import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { FullBlue } from "../components/svgs/Full-Blue";
import { Paws } from "../components/svgs/Paws";

export default function Login() {
  return (
    <>
      <Paws />
      <section className="flex flex-col h-screen w-full bg-[url('../assets/blob-1.svg')] bg-contain sm:bg-auto bg-no-repeat bg-white">
        <Header />

        <div className="flex-1 px-2 w-full mt-4 mx-auto text-center bg-[url('../assets/blob-2.svg')] bg-no-repeat bg-[right_1rem] bg-[length:80px_400px] md:bg-[length:100px_500px]">
          <FullBlue />

          <div className="max-w-[310px] md:max-w-[550px] mx-auto">
            <p className="block text-blue text-base my-16 sm:text-lg">
              Já tem conta? Faça seu login:
            </p>

            <form className="text-center mb-14 md:max-w-[350px] lg:max-w-[550px] mx-auto">
              <label
                htmlFor="email"
                className="block mt-6 text-gray sm:text-lg"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Digite seu email"
                className="bg-background-gray w-full text-center py-[10px] rounded-md text-sm sm:text-base placeholder:text-light-gray shadow-input"
              />

              <label
                htmlFor="password"
                className="block mt-6 text-gray sm:text-lg"
              >
                Senha
              </label>
              <input
                type="password"
                id="password"
                placeholder="Digite sua senha"
                className="bg-background-gray w-full text-center lg:max-w-[400px] py-[10px] rounded-md text-sm sm:text-base placeholder:text-light-gray shadow-input"
              />

              <button
                type="submit"
                className="text-white block text-base sm:text-lg hover:bg-coral-hover transition-colors py-[10px] sm:py-[6px] px-16 w-fit mx-auto font-semibold rounded-md shadow-xl mt-8 mb-4 bg-coral leading-4"
              >
                Entrar
              </button>
            </form>
          </div>
        </div>

        <Footer />
      </section>
    </>
  );
}
