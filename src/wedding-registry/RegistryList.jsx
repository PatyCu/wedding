import GiftList from "./GiftList";

const RegistryList = () => {
  /*
  return (
    <div className="bg-white/85 my-0 mx-auto flex w-11/12 flex-row flex-wrap">
      <div className="m-10 basis-full justify-center border-b-2 p-0 text-center text-gold ">
        <h2 className="pb-5 text-center text-2xl md:my-0 md:mx-auto">
          La nostra lluna de mel... a Nova Zelanda 💍
        </h2>
      </div>
      <div className="mt-1 basis-full md:basis-1/3">
        <img
          src="../img/newzealand-map.png"
          alt="map of New Zealand with pins on it to signal de stops in a trip"
          className="rounded-lg"
        />
      </div>
      <div className="mx-auto sm:basis-full md:-mt-5 md:basis-2/3">
        <Trip />
      </div>
    </div>
  );


  <picture>
    <img
      srcSet="
      ../img/new_zealand_cover_w_300.jpg 300w,
      ../img/new_zealand_cover_w_1315.jpg 1315w,
      ../img/new_zealand_cover_w_1987.jpg 1987w,
      ../img/ new_zealand_cover_w_2400.jpg 2400w"
      src="../img/new_zealand_cover_w_2400.jpg"
      alt="Snowed mountains and a lake in a New Zealander landscape"
      className="w-full"
    />
  </picture>

          <picture className="max-h-fit ">
            <source
              srcSet="../img/ new_zealand_cover_w_2400.jpg 2400w"
              media="(min-width: 1024px)"
            />
            <source
              srcSet="../img/new_zealand_cover_w_1987.jpg 1987w"
              media="(min-width: 768px)"
            />
            <source
              srcSet="../img/new_zealand_cover_w_1315.jpg 1315w"
              media="(min-width: 640px)"
            />
            <img
              src="../img/new_zealand_cover_w_300.jpg"
              alt="Snowed mountains and a lake in a New Zealander landscape"
              className="w-full"
            />
          </picture>

  */

  return (
    <div className="m-0 w-full p-0">
      <section className="m-0 w-full p-0">
        <div className="relative w-full bg-teal-200">
          <img
            src="../img/new_zealand_cover_w_2400.jpg"
            alt="Snowed mountains and a lake in a New Zealander landscape"
            className="w-full "
          />
          <div className="absolute top-1/4 left-4">
            <h1 className="text-3xl md:text-7xl">Nova Zelanda 💍</h1>
            <h2 className="md:text-xl">
              Gràcies per ajudar-nos en la nostra aventura!
            </h2>
          </div>
          <div className="absolute bottom-4 left-4 w-36">
            <img
              src="../img/parella.jpg"
              className="rounded-full border-2 border-solid border-white"
              alt="selfie de l'Oriol i la Paty junts"
            />
          </div>
        </div>
      </section>
      <section className="my-10">
        <h2 className="pb-5 text-2xl md:my-0 md:mx-auto">Regals</h2>
        <GiftList />
      </section>
    </div>
  );
};

export default RegistryList;
