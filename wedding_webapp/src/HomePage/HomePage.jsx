import SecondaryNavigation from "../utils/SecondaryNavigation";

const HomePage = () => {
  return (
    <div>
      <section className="my-0 mx-auto mt-12 w-full max-w-[1200px] px-10">
        <h2 className="pb-5 text-center text-2xl text-gold md:my-0 md:mx-auto">
          L'Oriol i la Paty es casen!
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
            els ets i uts. Sobre tot la Paty, encara se'n fa creus. Com ens hem
            de veure, que diria ella.
          </p>
          <p className="my-6">
            Ja que estem aquí aprofitem per donar-vos una mica d'info pràctica i
            bastanta d'impràctica sobre el Dia D. Des de què esperar de l'event
            (incloent dresscode si esteu preocupats per saber què posar-vos)
            fins a què fer-nos arribar com a regal de noces. Endavant!
          </p>
        </div>
      </section>
      <section className="my-0 w-full max-w-[800px] bg-white p-0 text-center">
        <picture className="my-0 ">
          <source srcSet="img/hero-full.png" media="(min-width: 1200px)" />
          <source srcSet="img/hero-1790.png" media="(min-width: 839px)" />
          <source srcSet="img/hero-1055.png" media="(min-width: 501px)" />
          <img src="img/hero-480.png" alt="Oriol i Paty fent el tonto" />
        </picture>
      </section>
      <div className="my-10 mx-auto w-3/5 max-w-7xl border-b-4 border-solid border-gold p-0 text-center">
        <h2 className="pb-2 text-center text-2xl text-gold md:my-0 md:mx-auto">
          Informació d&apos;interès
        </h2>
      </div>
      <section className="my-0 mx-auto w-full max-w-7xl p-0 text-center">
        <ul>
          <li key="historia">
            <SecondaryNavigation
              title="Història"
              link="/historia"
              img="../img/parella.jpg"
            />
          </li>
          <li key="event">
            <SecondaryNavigation
              title="L'event"
              link="/event"
              img="../img/torre-can-parellada.jpg"
            />
          </li>
          <li key="rsvp">
            <SecondaryNavigation
              title="Confirmar Assistència"
              link="/"
              img="../img/assistencia.jpg"
            />
          </li>
          <li key="arribar">
            <SecondaryNavigation
              title="Com arribar"
              link="/"
              img="../img/how-to-get-there.jpg"
            />
          </li>
          <li key="registry">
            <SecondaryNavigation
              title="Llista de noces"
              link="/wedding-registry"
              img="../img/suitcase.jpg"
            />
          </li>
          <li key="gallery">
            <SecondaryNavigation
              title="Galeria"
              link="/"
              img="../img/coming_soon.png"
            />
          </li>
        </ul>
      </section>
    </div>
  );
};

export default HomePage;
