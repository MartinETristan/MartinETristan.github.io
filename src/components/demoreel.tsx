import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useCallback, useMemo, useRef, useEffect, useState } from "react";

function DemoReel() {
  //   const currentLanguage = i18n.language;

  const ref = useRef<HTMLCanvasElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const currentIndex = useTransform(scrollYProgress, [0, 1], [1, 2187]);

  const [canvasWidth, setCanvasWidth] = useState<number>(window.innerWidth);
  const aspectRatio = 1920 / 1080; // Relación de aspecto de las imágenes (16:9)
  const canvasHeight = canvasWidth / aspectRatio;

  useMotionValueEvent(currentIndex, "change", (latest) => {
    const roundedIndex = Number(latest.toFixed());
    render(roundedIndex);
    // console.log(roundedIndex);
  });

  const images = useMemo(() => {
    const LoadedImages: HTMLImageElement[] = [];

    for (let i = 0; i < 2187; i++) {
      const img = new Image();
      img.src = `/images/DemoReel/en/${i}.webp`;
      LoadedImages.push(img);
    }

    return LoadedImages;
  }, []);

  const render = useCallback(
    (index: number) => {
      const canvas = ref.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      // Limpiar el canvas antes de redibujar
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const img = images[index];
      if (!img) return;

      // Dibujar la imagen escalada a las dimensiones del canvas
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    },
    [images]
  );

  // Ajustar el tamaño del canvas cuando la ventana cambie de tamaño
  useEffect(() => {
    const handleResize = () => {
      setCanvasWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Ajustar las dimensiones del canvas dinámicamente
  useEffect(() => {
    const canvas = ref.current;
    if (canvas) {
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
    }
  }, [canvasWidth, canvasHeight]);

  return (
    <>
      <div style={{ height: "1000px" }}>
        <div>
          <canvas ref={ref} />
        </div>
      </div>
    </>
  );
}

export default DemoReel;
