import SecondaryNavigation from "../utils/SecondaryNavigation";

const HomePage = () => {
  return (
    <div>
      <section className="mt-12 px-10">
        <h2 className="pb-5 text-center text-2xl md:my-0 md:mx-auto">
          Gràcies per compartir aquesta celebració amb nosaltres!
        </h2>
        <div className="block p-10 leading-7">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            doloribus aspernatur ex quam quos placeat hic expedita tenetur,
            iste, sint molestiae doloremque tempora deleniti, soluta alias iusto
            voluptatem perspiciatis odit!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            doloribus aspernatur ex quam quos placeat hic expedita tenetur,
            iste, sint molestiae doloremque tempora deleniti, soluta alias iusto
            voluptatem perspiciatis odit!
          </p>
        </div>
      </section>
      <section className="my-0 mx-auto w-full max-w-7xl bg-white p-0 text-center">
        <picture className="my-0 mx-auto max-h-fit ">
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
              link="/"
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
