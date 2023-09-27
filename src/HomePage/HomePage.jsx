import SecondaryNavigation from "../utils/SecondaryNavigation";
import imgHeroFull from "../img/hero-full.png";
import imgHeroMD from "../img/hero-1790.png";
import imgHeroSD from "../img/hero-1055.png";
import imgHeroXSD from "../img/hero-480.png";
import imgEvent from "../img/torre-can-parellada.jpg";
import imgComArribar from "../img/how-to-get-there.jpg";
import imgAutocars from "../img/autocars.jpg";
import imgCamera from "../img/camera.jpg";
//import imgParella from "../img/parella.jpg";
//import imgAssistencia from "../img/assistencia.jpg";
//import imgLlista from "../img/suitcase.jpg";
//import imgGaleria from "../img/coming_soon.png";

const HomePage = () => {
  return (
    <div id="container-home">
      <section className="my-0 mx-auto mt-12 w-full max-w-[1200px] px-10">
        <h2 className="pb-5 text-center text-2xl text-gold md:my-0 md:mx-auto">
          L&apos;Oriol i la Paty es casen!
        </h2>
        <div className="block p-0 leading-7 md:p-10">
          <p>
            Si estàs llegint això és perquè ets una persona important per
            nosaltres. Tan important, que volem tenir-te al costat quan comencem
            aquesta nova etapa de la nostra vida.
          </p>
          <p className="mt-6">
            Probablement estem tan sorpresos com tu de què estiguem aquí tots
            plegats. Encara estem més sorpresos de què fem un bodorrio amb tots
            els ets i uts. Sobre tot la Paty, encara se&apos;n fa creus. Com ens
            hem de veure, que diria ella.
          </p>
          <p className="my-6">
            Ja que estem aquí aprofitem per donar-vos una mica d&apos;info
            pràctica i bastanta d&apos;impràctica sobre el Dia D. Des de què
            esperar de l&apos;event (incloent dresscode si esteu preocupats per
            saber què posar-vos) fins a què fer-nos arribar com a regal de
            noces. Endavant!
          </p>
        </div>
      </section>
      <section className="my-0 w-full max-w-[800px] bg-white p-0 text-center">
        <picture className="my-0 ">
          <source srcSet={imgHeroFull} media="(min-width: 1200px)" />
          <source srcSet={imgHeroMD} media="(min-width: 839px)" />
          <source srcSet={imgHeroSD} media="(min-width: 501px)" />
          <img src={imgHeroXSD} alt="Oriol i Paty fent el tonto" />
        </picture>
      </section>
      <div className="my-10 mx-auto w-3/5 max-w-7xl border-b-4 border-solid border-gold p-0 text-center">
        <h2 className="pb-2 text-center text-2xl text-gold md:my-0 md:mx-auto">
          Informació d&apos;interès
        </h2>
      </div>
      <section className="my-0 mx-auto w-full max-w-7xl p-0 text-center">
        <ul>
          <li key="event">
            <SecondaryNavigation title="L'event" link="/event" img={imgEvent} />
          </li>

          <li key="arribar">
            <SecondaryNavigation
              title="Com arribar"
              link="/"
              img={imgComArribar}
            />
          </li>
          <li key="autocars">
            <SecondaryNavigation
              title="Autocars"
              link="/autocars"
              img={imgAutocars}
            />
          </li>
          <li>
            <SecondaryNavigation
              title="Wedshoots"
              link="/wedshoots"
              img={imgCamera}
            />
          </li>
          {/* <li key="historia">
            <SecondaryNavigation
              title="Història"
              link="/historia"
              img={imgParella}
            />
          </li> */
          /* <li key="rsvp">
            <SecondaryNavigation
              title="Confirmar Assistència"
              link="/"
              img={imgAssistencia}
            />
            <li key="registry">
            <SecondaryNavigation
              title="Llista de noces"
              link="/wedding-registry"
              img={imgLlista}
            />
          </li>
          </li>
          <li key="gallery">
            <SecondaryNavigation title="Galeria" link="/" img={imgGaleria} />
          </li> */}
        </ul>
      </section>
    </div>
  );
};

export default HomePage;
