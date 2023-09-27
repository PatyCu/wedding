import { useParams } from "react-router-dom";
import { getGiftById, getPrevAndNextGift } from "../data/fetchDataGifts";
import Breadcrumb from "../utils/Breadcrumb";
import imgCompte from "../img/compte.png";

//import GiftDetails from "./GiftDetails";

const Gift = () => {
  const { id } = useParams();
  const gift = getGiftById(id);
  const prevAndNext = getPrevAndNextGift(id);

  function getImageUrl(name) {
    return new URL(`../img/${name}`, import.meta.url).href;
  }

  return (
    <div className="my-6 mx-6 lg:mx-auto lg:max-w-[1200px]">
      <Breadcrumb
        backPath="/registry-list"
        prevPath={prevAndNext[0]}
        nextPath={prevAndNext[1]}
      />
      <div className="flex-flow mx-6 mt-10 flex flex-wrap">
        <div className="md:basis-1/2">
          <img
            //src={"/img/".concat(gift.itemImg)}
            src={getImageUrl(gift.itemImg)}
            className=" w-full rounded-lg border border-solid border-gray"
            alt="the current gift"
          />
        </div>
        <div className="mt-6 md:mt-0 md:basis-1/2 md:pl-6">
          <div className="block w-full">
            <h1 className="text-4xl font-bold">{gift.itemTitle}</h1>
            <h5 className="p-2">{gift.itemDescription}</h5>
            <h5 className="p-2">Experiència valorada en {gift.itemValue}</h5>
          </div>
          <div className="m-4 w-fit  p-2">
            <p>
              Si vols que la teva contribució vagi dirigida a aquesta
              experiència:
            </p>
            <p className="mt-2 ml-4">
              Concepte:{" "}
              <span className="font-bold text-gold">{gift.itemTitle}</span>
            </p>
            <p className="mt-2 ml-4">
              IBAN:
              <img
                src={imgCompte}
                alt="Compte corrent"
                className="ml-14 w-52 rounded-lg border-2 border-solid border-lightgold"
              />
            </p>
          </div>
          {/* <GiftDetails id={id} gift={gift} /> */}
        </div>
      </div>
    </div>
  );
};

export default Gift;
