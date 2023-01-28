//import SecondaryNavigation from "../utils/SecondaryNavigation";
//import { useState } from "react";
import { getAllGifts } from "../data/fetchDataGifts";
import SecondaryNavigation from "../utils/SecondaryNavigation";

const GiftList = () => {
  const allGifts = getAllGifts();
  console.log("all gifts: ", allGifts);
  const imgPath = "../img/";
  return (
    <div>
      <ul>
        {allGifts.map((gift) => (
          <li key={gift.key}>
            <SecondaryNavigation
              title={gift.itemTitle}
              link="#"
              img={imgPath.concat(gift.itemImg)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GiftList;
