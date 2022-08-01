import { Header } from "../components/Header";
import { FullWhite } from "../components/svgs/Full-White";
import { CatAndDog } from "../components/svgs/CatAndDog";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <section className="h-full w-full bg-[url('../assets/blob-1.svg')] bg-contain sm:bg-auto bg-no-repeat bg-blue">
      <Header />

      <div className="text-white w-full mt-4 mx-auto text-center bg-[url('../assets/blob-2.svg')] bg-no-repeat bg-[right_1rem] bg-[length:80px_400px] md:bg-[length:100px_500px]">
        <div className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] mx-auto">
          <FullWhite />
          <p className="block mt-6 mb-4 text-2xl sm:text-3xl font-medium font-ibm">
            Boas Vindas!
          </p>
          <p className="leading-6 text-base sm:text-lg text-center font-light mb-5">
            Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo
            hoje? Vem com a gente!
          </p>
          <button className="block text-base sm:text-lg hover:bg-coral-hover transition-colors py-3 w-[180px] sm:w-[230px] md:w-full mx-auto font-semibold rounded-md mt-6 mb-4 bg-coral leading-4 shadow-button">
            Já tenho conta
          </button>
          <button className="block text-base sm:text-lg hover:bg-coral-hover transition-colors py-3 w-[180px] sm:w-[230px] md:w-full mx-auto font-semibold rounded-md shadow-button bg-coral leading-4">
            Quero me cadastrar
          </button>
          <CatAndDog />
        </div>
      </div>

      <Footer />
    </section>
  );
}
