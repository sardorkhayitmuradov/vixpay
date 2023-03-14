import Image from "next/image";

export default function CustomFormattedImage({ width, height, src, alt, id }) {
  if (src == "null" || src == "undefined" || src == null || src.length < 1)
    return <></>;
  return (
    <Image
      data-tinafield={id}
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  );
}