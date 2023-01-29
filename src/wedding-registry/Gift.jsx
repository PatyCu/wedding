import { Link, useParams } from "react-router-dom";
import { getGiftById, getPrevAndNextGift } from "../data/fetchDataGifts";
import ProgressBar from "../utils/ProgressBar";

const Gift = () => {
  const { id } = useParams();
  const gift = getGiftById(id);
  const prevAndNext = getPrevAndNextGift(id);
  const amountToFund = parseFloat(gift.itemValue) - parseFloat(gift.itemFunded);

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
        <div className="mt-6 pl-6 md:basis-1/2">
          <div className="block w-full">
            <h1 className="text-4xl font-bold">{gift.itemTitle}</h1>
            <h5 className="p-2">{gift.itemDescription}</h5>
          </div>
          <div className="mt-8">
            <ProgressBar
              itemValue={gift.itemValue}
              itemFunded={gift.itemFunded}
            />
          </div>
          <div className="mt-6">
            <span>Dona qualsevol suma fins a {amountToFund}€</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gift;
