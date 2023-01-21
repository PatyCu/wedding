import Trip from "./Trip";

const RegistryList = () => {
  return (
    <div className="bg-white/85 my-0 mx-auto flex w-11/12 flex-row flex-wrap ">
      <div className="m-10 basis-full justify-center border-b-2 p-0 text-center text-gold ">
        <h2 className="pb-5 text-center text-2xl md:my-0 md:mx-auto">
          La nostra lluna de mel... a Nova Zelanda 💍
        </h2>
      </div>
      <div className="basis-1/3">
        <img
          src="../img/NewZealandTripOverview.png"
          alt="map of New Zealand with pins on it to signal de stops in a trip"
        />
      </div>
      <div className="-mt-5 basis-2/3 border-solid">
        <Trip />
      </div>
    </div>
  );
};

export default RegistryList;
