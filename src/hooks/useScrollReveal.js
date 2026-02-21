import { useEffect } from "react";

const useScrollReveal = (ref, options = {}) => {
  const {
    origin = "bottom",
    distance = "50px",
    duration = 1000,
    delay = 0,
    reset = false, // لو عايز Animation يتكرر لما تعمل scroll فوق وتحت
  } = options;

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;

    // إعدادات البداية
    element.style.opacity = 0;
    element.style.transition = `all ${duration}ms ease ${delay}ms`;

    switch (origin) {
      case "left":
        element.style.transform = `translateX(-${distance})`;
        break;
      case "right":
        element.style.transform = `translateX(${distance})`;
        break;
      case "top":
        element.style.transform = `translateY(-${distance})`;
        break;
      case "bottom":
      default:
        element.style.transform = `translateY(${distance})`;
        break;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.style.opacity = 1;
          element.style.transform = "translateX(0) translateY(0)";
        } else if (reset) {
          // ترجع لحالتها الأولية لو reset = true
          element.style.opacity = 0;
          switch (origin) {
            case "left":
              element.style.transform = `translateX(-${distance})`;
              break;
            case "right":
              element.style.transform = `translateX(${distance})`;
              break;
            case "top":
              element.style.transform = `translateY(-${distance})`;
              break;
            case "bottom":
            default:
              element.style.transform = `translateY(${distance})`;
              break;
          }
        }
      },
      {
        threshold: 0.1, // يظهر لما 10% من العنصر ظاهر
      },
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [ref, origin, distance, duration, delay, reset]);
};

export default useScrollReveal;
