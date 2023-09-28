import { useEffect, useState } from "react";
import activitiesService from "../services/activities";
import SecondaryNavigation from "../utils/SecondaryNavigation";

const GiftList = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    getActivities();
  }, []);

  const getActivities = async () => {
    try {
      const activitiesData = await activitiesService.getActivities();
      setActivities(activitiesData.gifts);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  function getImageUrl(name) {
    return new URL(`../img/${name}`, import.meta.url).href;
  }

  return (
    <div className="my-0 mx-auto p-0 text-center lg:max-w-[1200px]">
      <ul>
        {activities.map((gift) => (
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
