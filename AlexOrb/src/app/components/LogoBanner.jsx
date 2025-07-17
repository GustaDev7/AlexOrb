"use client"    

const logos = [
  "/jovens.png",
  "/jovens.png",
  "/jovens.png",
  "/jovens.png",
  "/jovens.png",
  "/jovens.png",
  "/jovens.png",
  "/jovens.png",
  "/jovens.png",
  "/jovens.png",
  "/jovens.png",
];

export default function LogoBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-principal via-[#7F4DFF] to-principal py-6 overflow-hidden relative shadow-md">
      <marquee behavior="scroll" direction="left" scrollamount="fu" className="flex gap-4">
        {logos.concat(logos).map((logo, index) => (
          <span key={index} className="inline-block">
            <img
              src={logo}
              alt="Logo"
              className="h-16 object-contain brightness-125 px-10 transition-transform transform hover:scale-110"
            />
          </span>
        ))}
      </marquee>
    </div>
  );
}
