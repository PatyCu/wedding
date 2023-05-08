const ComArribar = () => {
  return (
    <div id="container" className="my-0 mx-auto w-full p-10">
      <h2>Com Arribar</h2>
      <img src="../img/mapa_ordal.png" className="border border-slate-100" />
      <div className="mt-4">
        <p>
          <b>De Barcelona:</b> N-340 direcció Tarragona.
        </p>
        <p>Trencall a la dreta uns 400m després de la sortida d'Ordal.</p>
      </div>
      <div className="mt-4">
        <p>
          <b>De Vilafranca:</b> N-340 direcció Barcelona.
        </p>
        <p>
          Just abans d'arribar a Ordal, agafar el trencall a l'esquerra marcat
          en el mapa.
        </p>
      </div>
    </div>
  );
};

export default ComArribar;
