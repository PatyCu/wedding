import { Link, useParams } from "react-router-dom";
import { getGiftById, getPrevAndNextGift } from "../data/fetchDataGifts";
import ProgressBar from "../utils/ProgressBar";

const Gift = () => {
  const { id } = useParams();
  const gift = getGiftById(id);
  const prevAndNext = getPrevAndNextGift(id);
  const amountToFund = parseInt(gift.itemValue) - parseInt(gift.itemFunded);
  const percentage = (
    (100 * parseInt(gift.itemFunded)) /
    parseInt(gift.itemValue)
  ).toFixed(0);
  let allowToContribute = percentage < 100 ? true : false;

  return (
    <div className="my-6 mx-6 lg:mx-auto lg:max-w-[1200px]">
      <div id="breadcrumb" className="flex flex-row flex-wrap">
        <Link
          to="/registry-list"
          className="group flex gap-2 font-bold hover:text-gold"
        >
          <span>
            <img
              src="/img/icon-arrow-left.svg"
              alt="left arrow to navigate to the previous gift"
              className="rounded-full border border-solid border-gray group-hover:border-gold"
            />
          </span>
          <span className="mt-0.5">Llista de noces</span>
        </Link>
        <div className="ml-auto flex gap-2">
          <span>
            <Link to={"/gift/".concat(prevAndNext[0])} className="group">
              <img
                src="/img/icon-arrow-left.svg"
                alt="left arrow to navigate to the previous gift"
                className="rounded-full border border-solid border-gray group-hover:border-gold"
              />
            </Link>
          </span>
          <span>
            <Link to={"/gift/".concat(prevAndNext[1])} className="group">
              <img
                src="/img/icon-arrow-right.svg"
                alt="right arrow to navigate to the next gift"
                className="rounded-full border border-solid border-gray group-hover:border-gold"
              />
            </Link>
          </span>
        </div>
      </div>
      <div className="flex-flow mx-6 mt-10 flex flex-wrap">
        <div className="md:basis-1/2">
          <img
            src={"/img/".concat(gift.itemImg)}
            className=" w-full rounded-lg border border-solid border-gray"
            alt="the current gift"
          />
        </div>
        <div className="mt-6 block pl-6 md:basis-1/2">
          <div className="block w-full">
            <h1 className="text-4xl font-bold">{gift.itemTitle}</h1>
            <h5 className="p-2">{gift.itemDescription}</h5>
          </div>
          <div className="mt-0">
            <ProgressBar
              itemValue={gift.itemValue}
              itemFunded={gift.itemFunded}
              percentage={percentage}
            />
          </div>
          <div className="mt-6">
            {allowToContribute && (
              <div className="pt-3">
                Contribueix amb qualsevol suma fins a {amountToFund}€
                <form>
                  <div className="flex-flow group flex items-center pt-4">
                    <label
                      htmlFor="contribute"
                      className="h-10 flex-grow basis-1/5 rounded-l-lg border border-zinc-500 bg-zinc-400 pt-2 text-center align-middle font-bold"
                    >
                      EUR €
                    </label>
                    <input
                      id="contribute"
                      type="number"
                      min="0"
                      max={amountToFund}
                      name="contribute"
                      placeholder="0€"
                      className="h-10 flex-grow basis-3/5 border-zinc-500 p-0 text-center"
                    />
                    <button className="h-10  rounded-r-lg border border-zinc-500 bg-gray p-2 font-bold text-zinc-500 hover:bg-gold">
                      <img src="/img/icon-arrow-right.svg" alt="Arrow icon" />
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gift;
