import gifts from "./activities.json";

const getAllGifts = () => {
  const allGifts = [];

  allGifts.push(...gifts.gifts);

  return allGifts;
};

export { getAllGifts };
