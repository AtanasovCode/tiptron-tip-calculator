import TipSelect from "./TipSelect";
import Output from "./Output";
import Input from "./Input";

import dollarIcon from "../assets/icon-dollar.svg";
import personIcon from "../assets/icon-person.svg";

const Calculator = ({
  percent,
  setPercent,
  setBill,
  setPeople,
  totalBill,
  split,
  tipPerPerson,
  getResult,
}) => {
  return (
    <div className="bg-white p-6 flex items-stretch justify-center rounded-xl">
      <div className="flex-1 flex flex-col items-start justify-center mr-8">
        <Input
          formFor="bill"
          label="Bill"
          placeholder="0"
          icon={dollarIcon}
          alt="dollar icon"
          handleChange={setBill}
        />

        <div className="my-8">
          <div className="mb-4">Select Tip %</div>
          <div className="grid grid-cols-3 gap-2">
            <TipSelect value="5" percent={percent} setPercent={setPercent} />
            <TipSelect value="10" percent={percent} setPercent={setPercent} />
            <TipSelect value="15" percent={percent} setPercent={setPercent} />
            <TipSelect value="25" percent={percent} setPercent={setPercent} />
            <TipSelect value="50" percent={percent} setPercent={setPercent} />
          </div>
        </div>

        <Input
          formFor="people"
          label="Number of People"
          placeholder="0"
          icon={personIcon}
          alt="person icon"
          handleChange={setPeople}
        />
      </div>

      <Output totalBill={totalBill} tipPerPerson={tipPerPerson} split={split} />
    </div>
  );
};

export default Calculator;
