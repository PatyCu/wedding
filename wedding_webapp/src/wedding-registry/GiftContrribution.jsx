const GiftContribution = ({ amountToContribute, handleAccepted }) => (
  <div className="mt-6">
    <h2 className="text-2xl font-bold">
      Accepted Contribution of {amountToContribute}€
    </h2>
    <div className="p-4">
      <span className="">
        Moltes gràcies per voler contribuir a fer realitat el nostre somni de
        caçar Hobbits i perseguir Kiwis! Per fer-nos arribar el teu regal, et
        preguem que utilitzis algun dels mètodes a continuació que et sigui més
        còmode!
      </span>
      <div className="mt-5">
        <ul className="m-0 flex list-none flex-row flex-wrap gap-2 p-0 text-center">
          <li className="basis-full rounded-3xl border border-solid border-black border-opacity-50 text-center text-sm shadow-lg after:clear-both">
            <div className="flex flex-row flex-wrap ">
              <img
                src="/img/oriol_profile.jpg"
                className="my-6 ml-4 inline-block h-auto w-full max-w-[100px] basis-1/2 rounded-full"
                alt="Oriol somrient ben abrigat a la neu"
              />
              <ul className="my-1 mx-auto basis-1/2 text-left leading-10">
                <li>
                  <h2 className="text-lg text-gold underline">Oriol</h2>
                </li>
                <li>
                  <span className="fa-solid fa-phone" /> <b>Bizum:</b>{" "}
                  651.65.10.20
                </li>
                <li>
                  <span className="fa-brands fa-paypal" /> <b>Paypal: </b>
                  paypal.me/adreca
                </li>
                <li>
                  {" "}
                  <span className="fa-solid fa-money-bill-transfer" />{" "}
                  <b>IBAN: </b>
                </li>
              </ul>
            </div>
          </li>
          <li className="basis-full rounded-3xl border border-solid border-black border-opacity-50 text-center text-sm shadow-lg after:clear-both">
            <div className="flex flex-row flex-wrap">
              <img
                src="/img/oriol_profile.jpg"
                className="my-6 ml-4 inline-block h-auto w-full max-w-[100px] basis-1/2 rounded-full"
                alt="Oriol somrient ben abrigat a la neu"
              />
              <ul className="my-1 mx-auto basis-1/2 text-left leading-10">
                <li>
                  <h2 className="text-lg text-gold underline">Paty</h2>
                </li>
                <li>
                  <span className="fa-solid fa-phone" /> <b>Bizum:</b>{" "}
                  651.65.10.20
                </li>
                <li>
                  <span className="fa-brands fa-paypal" /> <b>Paypal: </b>
                  paypal.me/adreca
                </li>
                <li>
                  {" "}
                  <span className="fa-solid fa-money-bill-transfer" />{" "}
                  <b>IBAN: </b>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div className="m-0">
      <div className="my-0 mx-auto w-fit">
        <button
          className="w-28 rounded-lg bg-black p-2 text-white hover:bg-gold"
          type="button"
          onClick={handleAccepted}
        >
          Cancel
        </button>
        <button
          className="ml-2 w-28 rounded-lg bg-black p-2 text-white hover:bg-gold"
          type="button"
          onClick={handleAccepted}
        >
          Fet!
        </button>
      </div>
    </div>
  </div>
);

export default GiftContribution;
