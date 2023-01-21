import Trip from "./Trip";

const RegistryList = () => {
  return (
    <div className="my-0 mx-auto flex w-11/12 flex-row flex-wrap">
      <div className="m-10 basis-full justify-center border-b-2 p-0 text-center text-gold ">
        Llista de noces
      </div>
      <div className="basis-1/3">
        <img
          src="../img/NewZealandTripOverview.png"
          alt="map of New Zealand with pins on it to signal de stops in a trip"
        />
      </div>
      <div className="basis-2/3 border-solid">
        <h3 className="mx-8 text-2xl">Nova Zelanda 💍</h3>
        <Trip />
      </div>
    </div>
  );
};

export default RegistryList;
