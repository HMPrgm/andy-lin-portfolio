import Image from 'next/image';

export default function ImageContainer({ src, alt }:{ src:string, alt:string }) {
  return (
    <div className="relative w-96 h-96 overflow-hidden rounded-sm">
      <Image
        src={src}
        alt={alt}
        fill={true}
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 256px"
      />
    </div>
  );
};