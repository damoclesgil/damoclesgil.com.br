import { LOGO_IMAGE, SITE } from "@config";

export default function Logo() {
  return (
    <>
      {LOGO_IMAGE.enable ? (
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
