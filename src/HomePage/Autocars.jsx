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
        <div>
          <table
            id="horaris-penedes"
            className="w-full max-w-[600px] border-collapse bg-white p-2 text-left align-middle"
          >
            <thead>
              <tr className="bg-cobalt p-2 text-lightgold">
                <th>Parada</th>
                <th>Sortida</th>
                <th>Trobada</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-bold text-cobalt">17:20h</td>
                <td>El Pla</td>
                <td>Poliesportiu</td>
              </tr>
              <tr>
                <td className="font-bold text-cobalt">17:30h</td>
                <td>Puigdàlber</td>
                <td>Carretera</td>
              </tr>
              <tr>
                <td className="font-bold text-cobalt">17:45h</td>
                <td>Vilafranca</td>
                <td>Antiga Hisenda c/Santa Clara</td>
              </tr>
              <tr>
                <td className="font-bold text-cobalt">18:00h</td>
                <td>Cantallops</td>
                <td>Parada de bus</td>
              </tr>
              <tr>
                <td className="font-bold text-cobalt">18:10h</td>
                <td>Sant Pau d&apos;Ordal</td>
                <td>Parada de bus</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="pb-5 text-left text-xl text-gold md:my-0 md:mx-auto">
          <b>Ruta Barcelona:</b> Barcelona - Ordal
        </h3>
        <div>
          <table
            id="horaris-bcn"
            className="w-full max-w-[600px] border-collapse bg-white p-2 text-left align-middle"
          >
            <thead>
              <tr className="bg-cobalt p-2 text-lightgold">
                <th>Parada</th>
                <th>Sortida</th>
                <th>Trobada</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-bold text-cobalt">17:15h</td>
                <td>BCN</td>
                <td>Pl. Espanya - Hotel Catalonia</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-4">
            Disclaimer: a la tornada (i només a la tornada), la{" "}
            <strong>Ruta Barcelona</strong> farà una parada prèvia extra per
            portar als nuvis al seu hotel a Sitges
          </p>
        </div>
      </div>
    </div>
  );
};

export default Autocars;
