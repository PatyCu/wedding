import imgAutocars from "../img/autocars.jpg";

const Autocars = () => {
  return (
    <div id="container-autocars" className="my-0 mx-auto max-w-[1200px] p-10">
      <h2 className="pb-5 text-center text-2xl text-gold md:my-0 md:mx-auto">
        Autocars
      </h2>
      <p>
        Oferim servei d&apos;autocars (cortesia d&apos;
        <a
          href="https://www.autocarsvendrell.com/"
          className="underline hover:text-gold"
        >
          Autocars Vendrell
        </a>
        ) per anar i tornar cap a l&apos;Ordal en dues rutes diferents:
      </p>
      <ul className="list-inside list-disc no-underline">
        <li className="ml-4">
          <b>Ruta Penedès:</b> El Pla - Vilafranca - Ordal
        </li>
        <li className="ml-4">
          <b>Ruta Barcelona:</b> Barcelona - Ordal
        </li>
      </ul>
      <img src={imgAutocars} className="p-5" alt="Autocars Vendrell" />
      <div className="mt-4">
        <h3 className="pb-5 text-left text-xl text-gold md:my-0 md:mx-auto">
          <b>Ruta Penedès:</b> El Pla - Vilafranca - Ordal
        </h3>
        <div className="grid grid-cols-6 md:grid-cols-5 gap-4 md:w-1/2">
          <div className="bg-cobalt p-2 text-lightgold col-span-2 md:col-span-1">Hora</div>
          <div className="bg-cobalt p-2 text-lightgold col-span-2 md:col-span-2">Sortida</div>
          <div className="bg-cobalt p-2 text-lightgold col-span-2 md:col-span-2">Trobada</div>
          <div className="font-bold text-cobalt col-span-2 md:col-span-1">17:20h</div>
          <div className="col-span-2 md:col-span-2">El Pla</div>
          <div className="col-span-2 md:col-span-2">Poliesportiu</div>
          <div className="font-bold text-cobalt col-span-2 md:col-span-1">17:30h</div>
          <div className="col-span-2 md:col-span-2">Puigdàlber</div>
          <div className="col-span-2 md:col-span-2">Carretera</div>
          <div className="font-bold text-cobalt col-span-2 md:col-span-1">17:45h</div>
          <div className="col-span-2 md:col-span-2">Vilafranca</div>
          <div className="col-span-2 md:col-span-2">Carrer de Santa Clara, 3</div>
          <div className="font-bold text-cobalt col-span-2 md:col-span-1">18:00h</div>
          <div className="col-span-2 md:col-span-2">Cantallops</div>
          <div className="col-span-2 md:col-span-2">Parada de bus</div>
          <div className="font-bold text-cobalt col-span-2 md:col-span-1">18:10h</div>
          <div className="col-span-2 md:col-span-2">Sant Pau d&apos;Ordal</div>
          <div className="col-span-2 md:col-span-2">Parada de bus</div>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="pb-5 text-left text-xl text-gold md:my-0 md:mx-auto">
          <b>Ruta Barcelona:</b> Barcelona - Ordal
        </h3>
        <div className="grid grid-cols-6 md:grid-cols-5 gap-4 md:w-1/2">
          <div className="bg-cobalt p-2 text-lightgold col-span-2 md:col-span-1">Hora</div>
          <div className="bg-cobalt p-2 text-lightgold col-span-2 md:col-span-2">Sortida</div>
          <div className="bg-cobalt p-2 text-lightgold col-span-2 md:col-span-2">Trobada</div>
          <div className="font-bold text-cobalt col-span-2 md:col-span-1">17:15h</div>
          <div className="col-span-2 md:col-span-2">BCN</div>
          <div className="col-span-2 md:col-span-2">Pl. Espanya - Hotel Catalonia</div>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="pb-5 text-left text-xl text-gold md:my-0 md:mx-auto">
          <b>Tornada:</b> Ordal - Barcelona + Ordal - Penedès
        </h3>
        <div className="grid grid-cols-6 md:grid-cols-5 gap-4 md:w-1/2">
          <div className="bg-cobalt p-2 text-lightgold col-span-2 md:col-span-1">Hora</div>
          <div className="bg-cobalt p-2 text-lightgold col-span-2 md:col-span-2">Sortida</div>
          <div className="bg-cobalt p-2 text-lightgold col-span-2 md:col-span-2">Trobada</div>
          <div className="font-bold text-cobalt col-span-2 md:col-span-1">03:00h aprox.</div>
          <div className="col-span-2 md:col-span-2">Torre Can Parellada</div>
          <div className="col-span-2 md:col-span-2">Torre Can Parellada</div>
        </div>
        <p className="mt-4">
          Disclaimer: a la tornada (i només a la tornada), la{" "}
          <strong>Ruta Ordal - Barcelona</strong> farà una parada prèvia extra per portar als nuvis al seu hotel a Sitges
        </p>
      </div>
    </div>
  );
};

export default Autocars;
