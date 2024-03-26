import OutputItem from "./OutputItem";

const Output = ({ totalBill, tipPerPerson, split }) => {
  return (
    <div className="flex-1 bg-very-dark-cyan text-white p-6 rounded-xl flex flex-col justify-between w-full">
      <div className="">
        <OutputItem label="Total Bill" value={totalBill} />
        <OutputItem label="Tip Amount" value={tipPerPerson} unit="/ person" />
        <OutputItem label="Total" value={split} unit="/ person" />
      </div>
      <div className="w-full">
        <input
          type="button"
          value="reset"
          className="w-full p-4 bg-strong-cyan text-very-dark-cyan rounded-lg uppercase cursor-pointer hover:bg-light-grayish-cyan"
        />
      </div>
    </div>
  );
};

export default Output;
