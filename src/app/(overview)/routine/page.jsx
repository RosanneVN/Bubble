import BackButton from "../../components/buttons/BackButton";
import ProductCards from "../../components/ProductCards";

export default function MyRoutine() {
  return (
    <main className="flex flex-col w-full h-[100vh]">
      <BackButton url={"/problems"}></BackButton>
      <section className="flex flex-col w-full"></section>
      <section className="flex flex-col w-full h-[95vh] gap-8 text-[#4e4c57] ">
        <p className="text-center">Your routine:</p>
        <ProductCards></ProductCards>
      </section>
    </main>
  );
}
