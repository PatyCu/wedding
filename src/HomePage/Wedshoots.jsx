import imgWedshoots from "../img/icon-wedshoots.png";
import imgQRCode from "../img/icon-qrcode.jpg";
import imgAppleStoreBadge from "../img/apple-store-badge.svg";
import imgGooglePlayBadge from "../img/google-play-badge.svg";

const Wedshoots = () => {
  return (
    <div
      id="container-concurs"
      className="my-0 mx-auto max-w-[600px] p-10 text-center"
    >
      <h2 className="pb-5 text-2xl text-gold md:my-0 md:mx-auto">Wedshoots</h2>
      <div className="mt-4">
        <p>
          Volem que ens ajudis a immortalitzar el nostre dia especial, per això
          et proposem un concurs de fotografia!
        </p>
        <p>Els guanyadors tindran premi que entregarem durant el banquet 👀</p>
      </div>

      <div className="mt-4">
        <h3 className="pb-5 text-xl text-gold md:my-0 md:mx-auto">
          Què cal fer?
        </h3>
        <ul>
          <li className="mt-4 rounded-lg border-2 border-solid border-lightgold p-2">
            <p>
              <b>Instal·lar l&apos;app WedShoots al teu mòbil.</b>
            </p>
            <p className="mt-4">
              <img
                src={imgWedshoots}
                className="mx-auto w-24"
                alt="WedShoots app icon"
              />
            </p>
            <p className="mt-4">
              Descarrega l&apos;aplicació de{" "}
              <a href="http://www.wedshoots.com">WedShoots</a> o busca-la a la
              teva botiga d&apos;aplicacions.
            </p>
            <ul className="mx-auto mt-4 flex justify-center">
              <li>
                <a
                  href="https://apps.apple.com/es/app/wedshoots/id660256196"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={imgAppleStoreBadge}
                    alt="Apple Store Badge icon"
                    className="h-12"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://play.google.com/store/apps/details?id=net.bodas.android.wedshoots&hl=ca&gl=US"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={imgGooglePlayBadge}
                    alt="Google Play Badge icon"
                    className="h-12"
                  />
                </a>
              </li>
            </ul>
          </li>
          <li className="mt-4 rounded-lg border-2 border-solid border-lightgold p-2">
            <div>
              <p>
                <b>Uneix-te al nostre àlbum</b>
              </p>
              <p className="mt-4">
                Obre Wedshoots, posa el teu nom i escaneja aquest codi QR
              </p>
              <img src={imgQRCode} className="mx-auto w-52" alt="QR Code" />
              <p>
                També pots entrar a l&apos;app i buscar l&apos;àlbum amb el codi{" "}
              </p>
              <p className="mx-auto mt-2 w-fit bg-gray p-1 text-center align-middle">
                <b>ESff6d5fad</b>
              </p>
            </div>
          </li>
          <li className="mt-4 rounded-lg border-2 border-solid border-lightgold p-2">
            <p>
              Fes fotos durant el dia de la boda i pujar-les a l&apos;àlbum.
            </p>
            <p>Espera a veure si ets un dels guanyadors!</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Wedshoots;
