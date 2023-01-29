import gifts from "./activities.json";

const getAllGifts = () => {
  const allGifts = [];

  allGifts.push(...gifts.gifts);

  return allGifts;
};

const getGiftById = (id) => {
  return gifts.gifts[id];
};

const getPrevAndNextGift = (id) => {
  const allGifts = getAllGifts();
  const length = allGifts.length;
  const prevAndNext = [];

  if (id == 0) {
    prevAndNext.push(length - 1, +id + 1);
  } else if (id == length - 1) {
    prevAndNext.push(id - 1, 0);
  } else {
    prevAndNext.push(id - 1, +id + 1);
  }
  return prevAndNext;
};

export { getAllGifts, getGiftById, getPrevAndNextGift };
