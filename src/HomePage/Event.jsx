const Event = () => {
  return (
    <div id="container" className="my-0 mx-auto w-full p-10">
      <h2 className="pb-5 text-center text-2xl text-gold md:my-0 md:mx-auto">
        L'event
      </h2>
      <ul className="flex-center mx-auto flex flex-row flex-wrap content-center items-center gap-4 align-middle">
        <li className="w-fit basis-2/12 justify-items-center">
          <img src="../img/icon-clock.png" className="mx-auto w-24" />
        </li>
        <li className="basis-2/12">18:30h</li>
        <li className="basis-7/12">Arribada a la Torre de Can Parellada</li>
        <li className="w-fit basis-2/12 justify-items-center">
          <img src="../img/icon-clock.png" className="mx-auto w-24" />
        </li>
        <li className="basis-2/12">18:30h</li>
        <li className="basis-6/12">Comença la festa!</li>
        <li className="w-fit basis-2/12 justify-items-center">
          <img src="../img/icon-clock.png" className="mx-auto w-24" />
        </li>
        <li className="basis-2/12">18:30h</li>
        <li className="basis-6/12">Comença la festa!</li>
      </ul>
    </div>
  );
};

export default Event;
