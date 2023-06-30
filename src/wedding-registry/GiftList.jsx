import { getAllGifts } from "../data/fetchDataGifts";
import SecondaryNavigation from "../utils/SecondaryNavigation";

const GiftList = () => {
  const allGifts = getAllGifts();
  //const imgPath = "../img/";

  function getImageUrl(name) {
    return new URL(`../img/${name}`, import.meta.url).href;
  }

  return (
    <div className="my-0 mx-auto p-0 text-center lg:max-w-[1200px]">
      <ul>
        {allGifts.map((gift) => (
          <li key={gift.itemKey}>
            <SecondaryNavigation
              title={gift.itemTitle}
              link={`/gift/${gift.itemKey}`}
              img={getImageUrl(gift.itemImg)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GiftList;
