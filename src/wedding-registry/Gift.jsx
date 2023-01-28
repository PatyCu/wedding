import { useParams } from "react-router-dom";
import { getGiftById } from "../data/fetchDataGifts";

const Gift = () => {
  const { id } = useParams();
  const gift = getGiftById(id);
  return (
    <div>
      Individual Gift
      <p>Gift id: {id}</p>
      <p>{gift.itemTitle}</p>
    </div>
  );
};

export default Gift;
