import imgMapaOrdal from "../img/mapa_ordal.png";

const ComArribar = () => {
  return (
    <div id="container" className="my-0 mx-auto w-full p-10">
      <h2>Com Arribar</h2>
      <img
        src={imgMapaOrdal}
        alt="Mapa de com arribar a la Torre Can Parellada"
        className="border border-slate-100"
      />
      <div className="mt-4">
        <p>
          <b>De Barcelona:</b> N-340 direcció Tarragona.
        </p>
        <p>Trencall a la dreta uns 400m després de la sortida d&apos;Ordal.</p>
      </div>
      <div className="mt-4">
        <p>
          <b>De Vilafranca:</b> N-340 direcció Barcelona.
        </p>
        <p>
          Just abans d&apos;arribar a Ordal, agafar el trencall a
          l&apos;esquerra marcat en el mapa.
        </p>
      </div>
    </div>
  );
};

export default ComArribar;
