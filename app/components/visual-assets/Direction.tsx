import Image from "next/image";

export default function Direction() {
  return (
    <div className="relative h-full w-full">
      <Image
        src="/visual-assets/direction.png"
        alt="Pensamiento estratégico DIXOY"
        fill
        className="object-contain p-6"
      />
    </div>
  );
}