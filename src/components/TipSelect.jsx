const TipSelect = ({ value, percent, setPercent }) => {
  const backgroundColor = value === percent ? "bg-light-grayish-cyan" : "bg-very-dark-cyan";
  const textColor = value === percent ? "text-black" : "text-white";

  return (
    <div
      className={`
          py-3 ${textColor} rounded-lg flex items-center justify-center
          ${backgroundColor}
          hover:bg-light-grayish-cyan hover:text-black hover:cursor-pointer
        `}
      onClick={() => setPercent(value)}
    >
      {value} %
    </div>
  );
};

export default TipSelect;
