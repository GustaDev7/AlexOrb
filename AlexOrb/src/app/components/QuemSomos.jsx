
export default function QuemSouEu() {
    return (
      <div className="flex flex-col lg:flex-row items-center justify-center bg-escuro xl:px-40 px-12 pt-16 overflow-hidden">
        {/* Imagem */}
        <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
          <img
            src="/quem-somos.png"
            alt="Quem Sou Eu"
            className="w-48 sm:w-64 md:w-80 lg:w-96 rounded-lg shadow-lg"
          />
        </div>
  
        {/* Texto */}
        <div className="w-full lg:w-1/2 text-white text-center lg:text-left">
          <h3 className="text-2xl font-bold text-gray-300">3 Jovens</h3>
          <h1 className="text-4xl font-bold mt-2 bg-gradient-to-r from-purple-900 via-[#6121ff] to-purple-900 bg-clip-text text-transparent bg-[length:200%_100%] animate-gradientMove">
            Quem sou eu?
          </h1>
          <p className="text-gray-300 mt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <p className="text-gray-300 mt-4">
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <p className="text-gray-300 mt-4">
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    );
  }
  