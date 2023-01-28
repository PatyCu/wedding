import { getAllGifts } from "../data/fetchDataGifts";
import SecondaryNavigation from "../utils/SecondaryNavigation";

const GiftList = () => {
  const allGifts = getAllGifts();
  const imgPath = "../img/";

  return (
    <div className="my-0 mx-auto w-full max-w-7xl p-0 text-center">
      <ul>
        {allGifts.map((gift) => (
          <li key={gift.key}>
            <SecondaryNavigation
              title={gift.itemTitle}
              link={`/gift/${gift.itemKey}`}
              img={imgPath.concat(gift.itemImg)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GiftList;
