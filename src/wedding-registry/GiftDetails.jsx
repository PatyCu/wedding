import { useState } from "react";
import ProgressBar from "../utils/ProgressBar";
import GiftContribution from "./GiftContrribution";

const GiftDetails = ({ id, gift }) => {
  const [acceptedContribution, setAcceptedContribution] = useState(false);
  const [invalidContribution, setInvalidContribution] = useState(true);
  const amountToFund = parseInt(gift.itemValue) - parseInt(gift.itemFunded);
  const percentage = (
    (100 * parseInt(gift.itemFunded)) /
    parseInt(gift.itemValue)
  ).toFixed(0);
  let allowToContribute = percentage < 100 ? true : false;

  const handleAcceptedContribution = () => {
    setAcceptedContribution(false);
    setInvalidContribution(true);
  };

  const handleContributeInputValidation = (e) => {
    console.log(e.target.value);
    if (parseInt(e.target.value) > 0) {
      setInvalidContribution(false);
    } else {
      setInvalidContribution(true);
    }
  };

  return (
    <div>
      {!acceptedContribution && (
        <div className="mt-6">
          <ProgressBar
            itemValue={gift.itemValue}
            itemFunded={gift.itemFunded}
            percentage={percentage}
            git
            pul
          />
        </div>
      )}
      {!acceptedContribution && allowToContribute && (
        <div className="mt-1 pt-3">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              const contributeValue = formData.get("contribute") ?? "";
              if (parseInt(contributeValue) > 0) {
                setAcceptedContribution(true);
                console.log(contributeValue);
              } else {
                console.log("Valor = 0");
              }
            }}
          >
            <div className="flex flex-row flex-wrap pt-4">
              <label htmlFor="contribute" className="basis-full p-2 font-bold">
                Contribueix amb qualsevol suma fins a {amountToFund}€
              </label>
              <input
                id="contribute"
                type="number"
                min="0"
                max={amountToFund}
                name="contribute"
                placeholder="0"
                className="h-10 max-w-[60px] flex-grow basis-3/5 rounded-l-lg border-l border-t border-b border-r-0 border-zinc-500 p-0 text-right"
                onChange={(e) => handleContributeInputValidation(e)}
              />
              <span className="h-10 border-t border-b border-zinc-500 px-2 pt-2 text-center text-zinc-500">
                €
              </span>
              <button
                type="submit"
                disabled={invalidContribution}
                className="h-10  max-w-[120px] basis-2/5 rounded-r-lg border border-zinc-500 bg-gray p-2 font-bold text-zinc-500 hover:bg-gold disabled:bg-zinc-300 disabled:text-zinc-200"
              >
                Contribueix!
              </button>
            </div>
          </form>
        </div>
      )}
      {acceptedContribution && (
        <GiftContribution id={id} handleAccepted={handleAcceptedContribution} />
      )}
    </div>
  );
};

export default GiftDetails;
