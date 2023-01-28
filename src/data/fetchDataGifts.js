import gifts from "./activities.json";

const getAllGifts = () => {
  const allGifts = [];

  allGifts.push(...gifts.gifts);

  return allGifts;
};

const getGiftById = (id) => {
  return gifts.gifts[id];
};

export { getAllGifts, getGiftById };
