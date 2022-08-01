import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { FullBlue } from "../components/svgs/Full-Blue";
import { Paws } from "../components/svgs/Paws";
import { Eye, EyeSlash } from "phosphor-react";

export default function SignUp() {
  return (
    <>
      <Paws />
      <section className="h-full w-full bg-[url('../assets/blob-1.svg')] bg-contain sm:bg-auto bg-no-repeat bg-white">
        <Header />

        <div className="px-2 w-full mt-4 mx-auto text-center bg-[url('../assets/blob-2.svg')] bg-no-repeat bg-[right_1rem] bg-[length:80px_400px] md:bg-[length:100px_500px]">
          <FullBlue />

          <div className="max-w-[310px] md:max-w-[550px] mx-auto mt-6">
            <p className="text-blue mb-4 text-base md:text-lg">
              Ainda não tem cadastro?
            </p>

            <p className="text-blue text-base md:text-lg">
              Então, antes de buscar seu melhor amigo, precisamos de alguns
              dados:
            </p>

            <form className="text-center mb-14 md:max-w-[350px] lg:max-w-[550px] mx-auto">
              <label
                htmlFor="email"
                className="block mt-6 text-gray md:text-lg"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Escolha seu melhor email"
                className="bg-background-gray w-full text-center py-[10px] rounded-md text-sm md:text-base placeholder:text-light-gray shadow-input"
              />

              <label htmlFor="name" className="block mt-6 text-gray md:text-lg">
                Nome
              </label>
              <input
                type="text"
                id="name"
                placeholder="Digite seu nome completo"
                className="bg-background-gray w-full text-center py-[10px] rounded-md text-sm md:text-base placeholder:text-light-gray shadow-input"
              />

              <label
                htmlFor="password"
                className="block mt-6 text-gray md:text-lg"
              >
                Senha
              </label>
              <div className="w-full lg:max-w-[400px] mx-auto relative">
                <input
                  type="password"
                  id="password"
                  placeholder="Crie uma senha"
                  className="bg-background-gray w-full text-center py-[10px] rounded-md text-sm md:text-base placeholder:text-light-gray shadow-input"
                />
                <button type="button" className="absolute right-4 top-3">
                  <EyeSlash className="opacity-50 w-[19px] h-[19px] md:w-[22px] md:h-[22px]" />
                </button>
              </div>

              <label
                htmlFor="confirmation_password"
                className="block mt-6 text-gray md:text-lg"
              >
                Confirma sua senha
              </label>
              <div className="w-full lg:max-w-[400px] mx-auto relative">
                <input
                  type="password"
                  id="confirmation_password"
                  placeholder="Repita a senha criada a cima"
                  className="bg-background-gray w-full text-center py-[10px] rounded-md text-sm md:text-base placeholder:text-light-gray shadow-input"
                />
                <button type="button" className="absolute right-4 top-3">
                  <EyeSlash className="opacity-50 w-[19px] h-[19px] md:w-[22px] md:h-[22px]" />
                </button>
              </div>

              <button
                type="submit"
                className="text-white block text-base sm:text-lg hover:bg-coral-hover transition-colors py-[10px] px-6 w-fit mx-auto font-semibold rounded-md shadow-xl mt-8 mb-4 bg-coral leading-4"
              >
                Cadastrar!
              </button>
            </form>
          </div>
        </div>

        <Footer />
      </section>
    </>
  );
}
