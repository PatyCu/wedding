const Event = () => {
  return (
    <div id="container" className="my-0 mx-auto w-full p-10">
      <h2 className="pb-5 text-center text-2xl text-gold md:my-0 md:mx-auto">
        L'event
      </h2>
      <div className="mt-4">
        <h3 className="pb-5 text-left text-xl text-gold md:my-0 md:mx-auto">
          Dress code
        </h3>
        <p>
          El dress code és el que qualsevol boda: ben guap@s (cadascú se sap lo
          seu) i amb un somriure. Nosaltres anirem mudats, això si.
        </p>
        <p className="mt-4">
          A tenir en compte: el primer brindis i l'aperitiu el farem a l'aire
          lliure, després passarem a estar sota cobert. L'event serà a l'Octubre
          i tot i que si els darrers anys són guia d'algo encara farà caloret,
          recomanem portar alguna peça de roba per abrigar-nos quan comenci a
          refrescar per la nit.
        </p>
      </div>
      <div className="mt-4">
        <h3 className="pb-5 text-left text-xl text-gold md:my-0 md:mx-auto">
          Autocars
        </h3>
        <p>
          Oferim servei d'autocars (cortesia d'Autocars Vendrell) per anar i
          tornar cap a l'Ordal en dues rutesdiferents:
        </p>
        <u className="list-inside list-disc no-underline">
          <li className="ml-4">
            <b>Ruta Penedès:</b> El Pla - Vilafranca - Ordal
          </li>
          <li className="ml-4">
            <b>Ruta Barcelona:</b> Barcelona - Ordal
          </li>
        </u>
        <p className="mt-4">
          Encara no sabem els horaris, en quant els tinguem us avisarem i els
          posarem per aquí.
        </p>
        <p className="mt-4">
          Si voleu reservar seient en alguna d'aquestes rutes si us plau
          aviseu-nos tan aviat com sigui possible!
        </p>
      </div>
      <div className="mt-4">
        <h3 className="pb-5 text-left text-xl text-gold md:my-0 md:mx-auto">
          Al·lèrgies i altres restriccions alimentàries
        </h3>
        <p>
          Necessitem que ens comuniqueu qualsevol al·lèrgia, intolerància, o
          restricció alimentària que tingueu per tal que informem al nostre
          servei de catèring.
        </p>
        <p className="mt-4">
          Amb aquesta informació ens assegurarem que tothom pugui gaudir de la
          festa i d'un bon sopar, sense ensurts i sense que ningú passi gana!
        </p>
      </div>
      <div className="mt-4">
        <h3 className="pb-5 text-left text-xl text-gold md:my-0 md:mx-auto">
          Timeline
        </h3>
        <ul className="flex-center mx-auto flex flex-row flex-wrap content-center items-center gap-4 align-middle">
          <li className="w-fit basis-2/12 justify-items-center">
            <img src="../img/icon-clock.png" className="mx-auto w-24" />
          </li>
          <li className="basis-2/12">18:30h</li>
          <li className="basis-7/12">Arribada a la Torre de Can Parellada</li>
          <li className="w-fit basis-2/12 justify-items-center">
            <img src="../img/icon-cheers.png" className="mx-auto w-24" />
          </li>
          <li className="basis-2/12">18:45h</li>
          <li className="basis-6/12">Brindem per nosaltres</li>
          <li className="w-fit basis-2/12 justify-items-center">
            <img src="../img/icon-snacks.png" className="mx-auto w-24" />
          </li>
          <li className="basis-2/12">19:00h</li>
          <li className="basis-6/12">Aperitiu</li>
          <li className="w-fit basis-2/12 justify-items-center">
            <img src="../img/icon-dinner.png" className="mx-auto w-24" />
          </li>
          <li className="basis-2/12">20:30h</li>
          <li className="basis-6/12">Sopar</li>
          <li className="w-fit basis-2/12 justify-items-center">
            <img src="../img/icon-party.png" className="mx-auto w-24" />
          </li>
          <li className="basis-2/12">22:30h</li>
          <li className="basis-6/12">Party!</li>
          <li className="w-fit basis-2/12 justify-items-center">
            <img src="../img/icon-backache.png" className="mx-auto w-24" />
          </li>
          <li className="basis-2/12">01:30h</li>
          <li className="basis-6/12">...Fins que el cos aguanti</li>
        </ul>
      </div>
    </div>
  );
};

export default Event;
