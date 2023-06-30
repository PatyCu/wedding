import GiftList from "./GiftList";
import imgHero from "../img/new_zealand_cover_w_2400.jpg";
import imgParella from "../img/parella.jpg";

const RegistryList = () => {
  return (
    <div className="m-0 my-0 mx-auto lg:max-h-fit lg:max-w-[1200px]">
      <div className="m-0 p-0">
        <div className="relative">
          <img
            src={imgHero}
            alt="Snowed mountains and a lake in a New Zealander landscape"
            className="w-full lg:max-h-[60rem]"
          />
          <div className="absolute top-1/4 left-4">
            <h1 className="text-3xl md:text-7xl">Nova Zelanda 💍</h1>
            <h2 className="md:text-xl">
              Gràcies per ajudar-nos en la nostra aventura!
            </h2>
          </div>
          <div className="absolute bottom-4 left-4 w-36">
            <img
              src={imgParella}
              className="rounded-full border-2 border-solid border-white"
              alt="selfie de l'Oriol i la Paty junts"
            />
          </div>
        </div>
      </div>
      <section className="my-10">
        <h2 className="pb-5 text-2xl md:my-0 md:mx-auto">Regals</h2>
        <GiftList />
      </section>
    </div>
  );
};

export default RegistryList;
