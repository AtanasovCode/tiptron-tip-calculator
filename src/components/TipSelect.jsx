const TipSelect = ({ value, calculateTip, percent, setPercent }) => {
  const backgroundColor =
    value === percent ? "bg-light-grayish-cyan" : "bg-very-dark-cyan";
  const textColor = value === percent ? "text-black" : "text-white";

  return (
    <div
      className={`
          p-3 text-white rounded-lg flex items-center justify-center
          ${backgroundColor} ${textColor}
          hover:bg-light-grayish-cyan hover:text-black hover:cursor-pointer
        `}
      onClick={() => setPercent(value)}
    >
      {value} %
    </div>
  );
};

export default TipSelect;
