import imgIconClock from "../img/icon-clock.png";
import imgIconCheers from "../img/icon-cheers.png";
import imgIconSnacks from "../img/icon-snacks.png";
import imgIconDinner from "../img/icon-dinner.png";
import imgIconParty from "../img/icon-party.png";
import imgIconBackache from "../img/icon-backache.png";
import imgTorre from "../img/torre_dia.jpg";
import { Link } from "react-router-dom";
import TimelineItem from "../components/TimelineItem";

const Event = () => {
  const timelineItems = [
      {
          imgSrc: imgIconClock,
          time: "18:30h",
          description: "Arribada a la Torre de Can Parellada"
      },
      {
          imgSrc: imgIconCheers,
          time: "18:45h",
          description: "Brindem per nosaltres"
      },
      {
          imgSrc: imgIconSnacks,
          time: "19:00h",
          description: "Aperitiu"
      },
      {
          imgSrc: imgIconDinner,
          time: "21:00h",
          description: "Sopar"
      },
      {
          imgSrc: imgIconParty,
          time: "23:30h",
          description: "Party!"
      },
      {
          imgSrc: imgIconBackache,
          time: "02:30h",
          description: "...Fins que el cos aguanti"
      }
  ];

  return (
    <div id="container-event" className="my-0 mx-auto max-w-[1200px] p-10">
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
          Concurs de fotografia
        </h3>
        <p>
          Per introduir una mica (més) d&apos;emoció al assunto, farem un petit
          concurs de fotografia!
        </p>
        <p>
          Com a tot bon concurs hi haurà premi, així que aneu escalfant motors i
          el dit de disparar.
        </p>
        <p className="mt-4">
          Per participar haureu d&apos;utilitzar una app que es diu Wedshoots,
          així que ja podeu instal·lar-la i afegir-vos a l&apos;àlbum del nostre
          casament des de ja.
        </p>
        <p className="mt-4">
          Teniu les instruccions a l&apos;apartat de{" "}
          <Link to="/wedshoots" className="underline hover:text-gold">
            Wedshoots
          </Link>{" "}
          d&apos;aquesta web.
        </p>
      </div>
      <div className="mt-4">
        <h3 className="pb-5 text-left text-xl text-gold md:my-0 md:mx-auto">
          Timeline*
        </h3>
        <p className="mt-2 mb-4 italic">* Tots els horaris són aproximats.</p>  

        {timelineItems.map((item) => (
          <TimelineItem 
            key={item.time}
            imgSrc={item.imgSrc}
            time={item.time}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Event;
