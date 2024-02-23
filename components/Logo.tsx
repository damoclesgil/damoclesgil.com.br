"use client";

import { useTheme } from "next-themes";
import NextImage from "next/image";

export function Logo() {
  const { theme, systemTheme } = useTheme();

  return (
    <>
      {theme === "light" || systemTheme === 'light' ? (
        <NextImage
          className="rounded-full"
          src="/damocles-gil.svg"
          width="180"
          height="60"
          alt="Dâmocles Gil Marçal Logo"
          title="Dâmocles Gil"
        />
      ) : (
        <NextImage
          className="rounded-full"
          src="/damocles-gil-white.svg"
          width="180"
          height="60"
          alt="Dâmocles Gil Marçal Logo White"
          title="Dâmocles Gil"
        />
      )}
    </>
  );
}
