import OutputItem from "./OutputItem";

const Output = ({ totalBill, tipPerPerson, split, reset, checkValues }) => {
  const disabledButtonStyles = checkValues()
    ? "opacity-100 cursor-pointer"
    : "opacity-20 cursor-not-allowed";

  return (
    <div className="flex-1 bg-very-dark-cyan dark:bg-blue-900 text-white p-6 rounded-xl flex flex-col justify-between w-full">
      <div className="">
        <OutputItem label="Total Bill" value={totalBill} />
        <OutputItem label="Tip Amount" value={tipPerPerson} unit="/ person" />
        <OutputItem label="Total" value={split} unit="/ person" />
      </div>
      <div className="w-full">
        <input
          type="button"
          value="reset"
          className={`
            w-full p-4 bg-strong-cyan dark:bg-blue-400 text-very-dark-cyan rounded-lg uppercase 
            cursor-pointer hover:bg-light-grayish-cyan dark:hover:bg-blue-300
            ${disabledButtonStyles ? disabledButtonStyles : ""}
        `}
          onClick={() => reset()}
        />
      </div>
    </div>
  );
};

export default Output;
