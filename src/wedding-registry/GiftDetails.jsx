import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../utils/ProgressBar";

const GiftDetails = ({ gift }) => {
  const amountToFund = parseInt(gift.itemValue) - parseInt(gift.itemFunded);
  const navigate = useNavigate();
  const percentage = (
    (100 * parseInt(gift.itemFunded)) /
    parseInt(gift.itemValue)
  ).toFixed(0);
  let allowToContribute = percentage < 100 ? true : false;
  const [acceptedContribution, setAcceptedContribution] = useState(false);
  return (
    <div>
      <div className="block w-full">
        <h1 className="text-4xl font-bold">{gift.itemTitle}</h1>
        <h5 className="p-2">{gift.itemDescription}</h5>
      </div>
      {!acceptedContribution && (
        <div className="mt-6">
          <ProgressBar
            itemValue={gift.itemValue}
            itemFunded={gift.itemFunded}
            percentage={percentage}
          />
        </div>
      )}
      {!acceptedContribution && allowToContribute && (
        <div className="mt-1 pt-3">
          <form
            onSubmit={() => {
              //e.preventDefault();
              navigate("#");
              setAcceptedContribution(true);
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
              />
              <span className="h-10 border-t border-b border-zinc-500 px-2 pt-2 text-center text-zinc-500">
                €
              </span>
              <button className="h-10  max-w-[120px] basis-2/5 rounded-r-lg border border-zinc-500 bg-gray p-2 font-bold text-zinc-500 hover:bg-gold">
                Contribueix!
              </button>
            </div>
          </form>
        </div>
      )}
      {acceptedContribution && (
        <div className="mt-6">
          Accepted Contribution
          <form
            onSubmit={() => {
              //e.preventDefault();
              setAcceptedContribution(true);
            }}
          >
            <button className="rounded-lg bg-black p-2 text-white hover:bg-gold">
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default GiftDetails;