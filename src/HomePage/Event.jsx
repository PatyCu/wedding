import imgIconClock from "../img/icon-clock.png";
import imgIconCheers from "../img/icon-cheers.png";
import imgIconSnacks from "../img/icon-snacks.png";
import imgIconDinner from "../img/icon-dinner.png";
import imgIconParty from "../img/icon-party.png";
import imgIconBackache from "../img/icon-backache.png";
import imgTorre from "../img/torre_dia.jpg";

const Event = () => {
  return (
    <div id="container" className="my-0 mx-auto max-w-[1200px] p-10">
      <h2 className="pb-5 text-center text-2xl text-gold md:my-0 md:mx-auto">
        L&apos;event
      </h2>
      <div className="mt-4">
        <h3 className="pb-5 text-left text-xl text-gold md:my-0 md:mx-auto">
          Dress code
        </h3>
        <p>
          El dress code és el que qualsevol boda: ben guap@s (cadascú se sap lo
          seu) i amb un somriure. Nosaltres anirem mudats, això si.
        </p>
        <div className="mt-4">
          El primer brindis i l&apos;aperitiu el farem a l&apos;aire lliure a un
          gran pati amb terra de sorra, després passarem a estar sota cobert.
          <img
            src={imgTorre}
            alt="Pati de sorra de la Torre Can Parellada"
            className="p-8"
          />
          <p className="mt-4">Això si fa bo, és clar, sinó cap dins.</p>
          <p className="mt-4">
            A tenir en compte: l&apos;event serà a l&apos;Octubre i tot i que si
            els darrers anys són guia d&apos;algo encara farà caloret, recomanem
            portar alguna peça de roba per abrigar-nos quan comenci a refrescar
            per la nit.
          </p>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="pb-5 text-left text-xl text-gold md:my-0 md:mx-auto">
          Autocars
        </h3>
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
          Si voleu reservar seient en alguna d&apos;aquestes rutes si us plau
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
          festa i d&apos;un bon sopar, sense ensurts i sense que ningú passi
          gana!
        </p>
      </div>
      <div className="mt-4">
        <h3 className="pb-5 text-left text-xl text-gold md:my-0 md:mx-auto">
          Timeline
        </h3>
        <ul className="flex-center mx-auto flex flex-row flex-wrap content-center items-center gap-4 align-middle">
          <li className="w-fit basis-2/12 justify-items-center">
            <img src={imgIconClock} className="mx-auto w-10" alt="clock icon" />
          </li>
          <li className="basis-2/12">18:30h</li>
          <li className="basis-6/12">Arribada a la Torre de Can Parellada</li>
          <li className="w-fit basis-2/12 justify-items-center">
            <img
              src={imgIconCheers}
              className="mx-auto w-24"
              alt="champagne glasses icon"
            />
          </li>
          <li className="basis-2/12">18:45h</li>
          <li className="basis-6/12">Brindem per nosaltres</li>
          <li className="w-fit basis-2/12 justify-items-center">
            <img
              src={imgIconSnacks}
              className="mx-auto w-24"
              alt="snacks icon"
            />
          </li>
          <li className="basis-2/12">19:00h</li>
          <li className="basis-6/12">Aperitiu</li>
          <li className="w-fit basis-2/12 justify-items-center">
            <img
              src={imgIconDinner}
              className="mx-auto w-24"
              alt="dinner plate icon"
            />
          </li>
          <li className="basis-2/12">20:30h</li>
          <li className="basis-6/12">Sopar</li>
          <li className="w-fit basis-2/12 justify-items-center">
            <img
              src={imgIconParty}
              className="mx-auto w-24"
              alt="disco ball icon"
            />
          </li>
          <li className="basis-2/12">22:30h</li>
          <li className="basis-6/12">Party!</li>
          <li className="w-fit basis-2/12 justify-items-center">
            <img
              src={imgIconBackache}
              className="mx-auto w-24"
              alt="person with back ache icon"
            />
          </li>
          <li className="basis-2/12">01:30h</li>
          <li className="basis-6/12">...Fins que el cos aguanti</li>
        </ul>
      </div>
    </div>
  );
};

export default Event;
