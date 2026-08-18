import { IconArrowNarrowRight, IconBrandGithub } from "@tabler/icons-react";
import { useState, useRef, useId, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLinkIcon } from "lucide-react";

const Slide = ({ slide, index, current, handleSlideClick }) => {
  const slideRef = useRef(null);

  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef();

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return;

      const x = xRef.current;
      const y = yRef.current;

      slideRef.current.style.setProperty("--x", `${x}px`);
      slideRef.current.style.setProperty("--y", `${y}px`);

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const handleMouseMove = (event) => {
    const el = slideRef.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
    yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
  };

  const handleMouseLeave = () => {
    xRef.current = 0;
    yRef.current = 0;
  };

  const { image, title, description, technologies, github, demo } = slide;

  return (
    <div className="[perspective:1200px] [transform-style:preserve-3d]">
      <li
        ref={slideRef}
        className="relative z-10 mx-[2vmin] flex h-[62vmin] w-[68vmin] flex-1 flex-col items-center justify-center text-center opacity-100 transition-all duration-300 ease-in-out sm:mx-[4vmin] sm:h-[70vmin] sm:w-[64vmin]"
        onClick={() => handleSlideClick(index)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform:
            current !== index
              ? "scale(0.98) rotateX(8deg)"
              : "scale(1) rotateX(0deg)",
          transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          transformOrigin: "bottom",
        }}>
        <div
          className="absolute top-0 left-0 h-full w-full overflow-hidden rounded-2xl bg-[#1D1F2F] transition-all duration-150 ease-out"
          style={{
            transform:
              current === index
                ? "translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)"
                : "none",
          }}>
          <img
            className="absolute inset-0 h-[120%] w-[120%] object-cover opacity-100 transition-opacity duration-600 ease-in-out"
            style={{
              opacity: current === index ? 1 : 0.5,
            }}
            alt={title}
            src={image}
            loading="eager"
            decoding="sync"
          />
          {current === index && (
            <div className="absolute inset-0 bg-black/35 transition-all duration-1000" />
          )}
        </div>

        <article
          className={`relative p-[3vmin] transition-opacity duration-700 ease-in-out ${
            current === index ? "visible opacity-100" : "invisible opacity-0"
          }`}>
          <h2 className="relative text-lg font-semibold md:text-2xl lg:text-3xl">
            {title}
          </h2>
          <p className="mx-auto mt-3 max-w-md text-xs text-white/80 sm:text-sm">
            {description}
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-1.5">
            {technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="bg-white/10 text-white hover:bg-white/15">
                {tech}
              </Badge>
            ))}
          </div>
          <div className="mt-6 flex items-center justify-center gap-3">
            {github && (
              <Button
                variant="outline"
                size="sm"
                nativeButton={false}
                className="border-white/20 bg-black/30 text-white hover:bg-black/50 hover:text-white"
                render={
                  <a href={github} target="_blank" rel="noreferrer" />
                }>
                <IconBrandGithub />
                GitHub
              </Button>
            )}
            {demo && (
              <Button
                size="sm"
                nativeButton={false}
                className="bg-white text-black hover:bg-white/90"
                render={
                  <a href={demo} target="_blank" rel="noreferrer" />
                }>
                <ExternalLinkIcon />
                Live Demo
              </Button>
            )}
          </div>
        </article>
      </li>
    </div>
  );
};

const CarouselControl = ({ type, title, handleClick }) => {
  return (
    <button
      className={`mx-2 flex h-10 w-10 items-center justify-center rounded-full bg-neutral-200 transition duration-200 hover:-translate-y-0.5 active:translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring dark:bg-neutral-800 ${
        type === "previous" ? "rotate-180" : ""
      }`}
      title={title}
      aria-label={title}
      onClick={handleClick}>
      <IconArrowNarrowRight className="text-neutral-600 dark:text-neutral-200" />
    </button>
  );
};

export default function Carousel({ slides }) {
  const [current, setCurrent] = useState(0);
  const id = useId();

  const handlePreviousClick = () => {
    const previous = current - 1;
    setCurrent(previous < 0 ? slides.length - 1 : previous);
  };

  const handleNextClick = () => {
    const next = current + 1;
    setCurrent(next === slides.length ? 0 : next);
  };

  const handleSlideClick = (index) => {
    if (current !== index) {
      setCurrent(index);
    }
  };

  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[min(70vmin,520px)]"
      aria-labelledby={`carousel-heading-${id}`}>
      <ul
        className="absolute flex transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${current * (100 / slides.length)}%)`,
        }}>
        {slides.map((slide, index) => (
          <Slide
            key={slide.id ?? index}
            slide={slide}
            index={index}
            current={current}
            handleSlideClick={handleSlideClick}
          />
        ))}
      </ul>

      <div className="absolute top-[calc(100%+1rem)] flex w-full justify-center pb-10">
        <CarouselControl
          type="previous"
          title="Go to previous slide"
          handleClick={handlePreviousClick}
        />

        <CarouselControl
          type="next"
          title="Go to next slide"
          handleClick={handleNextClick}
        />
      </div>
    </div>
  );
}