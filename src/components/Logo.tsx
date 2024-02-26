import { LOGO_IMAGE, SITE } from "@config";
// import { useEffect, useState } from "react";

export default function Logo() {
  return (
    <>
      {LOGO_IMAGE.enable ? (
        // src={`/assets/${LOGO_IMAGE.svg ? "logo.svg" : "logo.svg"}`}
        <img
          id="logo"
          alt={SITE.title}
          width={LOGO_IMAGE.width}
          height={LOGO_IMAGE.height}
        />
      ) : (
        SITE.title
      )}
    </>
  );
}
