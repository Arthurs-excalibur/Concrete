"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";

interface ProgressiveImageProps extends Omit<ImageProps, "src"> {
  src: string;
  lowResSrc?: string;
}

/**
 * ProgressiveImage: Renders a lightweight (6-12KB) low-quality placeholder
 * immediately for fast First Contentful Paint, then smoothly cross-fades
 * to the crisp, full-resolution image once fully loaded.
 */
export default function ProgressiveImage({
  src,
  lowResSrc,
  alt,
  className = "",
  fill = true,
  priority = false,
  sizes,
  ...rest
}: ProgressiveImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const lowSrc =
    lowResSrc || src.replace(/\.(png|jpg|jpeg|webp)$/i, "-low.jpg");

  return (
    <>
      {/* Fast, lightweight Low-Quality Image Placeholder */}
      <Image
        src={lowSrc}
        alt={alt}
        fill={fill}
        sizes={sizes}
        priority={priority}
        className={`${className} transition-opacity duration-700 ease-out ${
          isLoaded ? "opacity-0" : "opacity-100"
        } filter blur-[2px] scale-[1.02] pointer-events-none`}
        aria-hidden={isLoaded}
        {...rest}
      />

      {/* Pristine high-resolution image - fades in over placeholder when loaded */}
      <Image
        src={src}
        alt={alt}
        fill={fill}
        sizes={sizes}
        priority={priority}
        onLoad={() => setIsLoaded(true)}
        className={`${className} transition-opacity duration-700 ease-out ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        {...rest}
      />
    </>
  );
}
