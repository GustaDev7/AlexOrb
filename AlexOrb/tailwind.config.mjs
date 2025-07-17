/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
            fontFamily: {
        sans: ["Poppins", "sans-serif"], // Define Poppins como padrão
      },
      colors: {
        escuro: "#0f0f0f",
        claro: "#f5f5f5",
        principal: "#6121ff",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'form': "url('/bg-form.jpg')",
      },
      keyframes: {
        luz: {
          "0%, 100%": { opacity: "0" },
          "50%": { opacity: "0.5" },
        },
        gradientMove: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        luz: "luz 5s infinite",
        luzDelay: "luz 5s 2s infinite",
      },
      blur: {
        light: "150px",
      },
      opacity: {
        light: "0.3",
      },
      mixBlendMode: {
        screen: "screen",
      },
      gradientMove: "gradientMove 3s ease-in-out infinite alternate",
    },
  },
  plugins: [],
};
