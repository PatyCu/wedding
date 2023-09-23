import imgWedshoots from "../img/icon-wedshoots.png";
import imgQRCode from "../img/icon-qrcode.jpg";

const Concurs = () => {
  return (
    <div id="container" className="my-0 mx-auto max-w-[1200px] p-10">
      <h2 className="pb-5 text-center text-2xl text-gold md:my-0 md:mx-auto">
        Concurs de fotografia!
      </h2>
      <p>
        Volem que ens ajudis a immortalitzar el nostre dia especial. Per això et
        proposem un concurs de fotografia. Els guanyadors rebran un premi
        sorpresa!
      </p>
      <div className="mt-4">
        <h3 className="pb-5 text-left text-xl text-gold md:my-0 md:mx-auto">
          Què cal fer?
        </h3>
        <ul>
          <li>
            <div>
              <p>
                <b>Instal·lar l&apos;app WedShoots al teu mòbil.</b>
              </p>
              <p>
                <img
                  src={imgWedshoots}
                  className="mx-auto w-24"
                  alt="WedShoots app icon"
                />
              </p>
              <p>
                Descarrega l&apos;aplicació de{" "}
                <a href="http://www.wedshoots.com">WedShoots</a> o busca-la a la
                teva botiga d&apos;aplicacions.
              </p>
            </div>
          </li>
          <li>
            <div>
              <p>
                <b>Uneix-te al nostre àlbum</b>
              </p>
              <p>Obre Wedshoots, posa el teu nom i escaneja aquest codi QR</p>
              <img src={imgQRCode} className="mx-auto w-24" alt="QR Code" />
              <p>
                També pots entrar a l&apos;app i buscar l&apos;àlbum amb el codi{" "}
              </p>
              <p className="mx-auto w-fit bg-gray p-1 text-center align-middle">
                <b>ESff6d5fad</b>
              </p>
            </div>
          </li>
          <li>
            Fes fotos durant el dia de la boda i pujar-les a l&apos;àlbum.
          </li>
          <li>Espera a veure si ets un dels guanyadors!</li>
        </ul>
      </div>
    </div>
  );
};

export default Concurs;
