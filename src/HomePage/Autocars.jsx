const Autocars = () => {
  return (
    <div id="container" className="my-0 mx-auto max-w-[1200px] p-10">
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
      <div className="mt-4">
        <h3 className="pb-5 text-left text-xl text-gold md:my-0 md:mx-auto">
          <b>Ruta Penedès:</b> El Pla - Vilafranca - Ordal
        </h3>
        <table
          id="horaris-penedes"
          className="w-full max-w-[600px] border-collapse bg-white p-2 text-left align-middle"
        >
          <tr className="bg-cobalt p-2 text-lightgold">
            <th>Parada</th>
            <th>Sortida</th>
            <th>Trobada</th>
          </tr>
          <tr>
            <td>El Pla del Penedès</td>
            <td>16:30h</td>
            <td>Poliesportiu</td>
          </tr>
          <tr>
            <td>Vilafranca del Penedès</td>
            <td>17:00h</td>
            <td>Estació d&apos;autobusos</td>
          </tr>
        </table>
      </div>
      <div className="mt-4">
        <h3 className="pb-5 text-left text-xl text-gold md:my-0 md:mx-auto">
          <b>Ruta Barcelona:</b> Barcelona - Ordal
        </h3>
        <table
          id="horaris-penedes"
          className="w-full max-w-[600px] border-collapse bg-white p-2 text-left align-middle"
        >
          <tr className="bg-cobalt p-2 text-lightgold">
            <th>Parada</th>
            <th>Sortida</th>
            <th>Trobada</th>
          </tr>
          <tr>
            <td>Barcelona</td>
            <td>17:30h</td>
            <td>Pl. Espanya - Hotel Catalonia</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Autocars;
