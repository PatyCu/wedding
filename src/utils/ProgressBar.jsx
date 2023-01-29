function calculateWidth(percentage) {
  let width = "";
  if (percentage <= 20) {
    width = "w-1/5";
  } else if (percentage <= 25) {
    width = "w-1/4";
  } else if (percentage <= 40) {
    width = "w-2/5";
  } else if (percentage <= 50) {
    width = "w-2/4";
  } else if (percentage <= 60) {
    width = "w-3/5";
  } else if (percentage <= 75) {
    width = "w-3/4";
  } else if (percentage <= 80) {
    width = "w-4/5";
  } else {
    width = "w-full";
  }
  return width;
}

const ProgressBar = ({ itemValue, itemFunded }) => {
  const percentage = (
    (100 * parseInt(itemFunded)) /
    parseInt(itemValue)
  ).toFixed(0);
  const width = calculateWidth(percentage);

  const progressBarClassName = "relative h-full rounded-3xl bg-gold ".concat(
    width
  );
  return (
    <div className="mt-6 py-4 px-6 shadow-lg">
      <div className="flex items-end justify-between gap-2">
        <span className="text-3xl font-bold text-gray">{percentage} % </span>
        <span className="text-xs">
          {itemFunded} de {itemValue} aportats
        </span>
      </div>
      <div className="mt-2 h-1 overflow-hidden rounded-3xl bg-gray">
        <div className={progressBarClassName}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
