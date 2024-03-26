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
  reset,
  checkValues,
}) => {
  return (
    <div
      className="
    bg-white px-6 py-12 flex flex-col rounded-xl w-full
    md:w-3/4 md:flex-row md:m-6
    xl:w-3/5
  "
    >
      <div className="flex-1 flex flex-col items-start justify-center mb-8 md:mr-8">
        <Input
          formFor="bill"
          label="Bill"
          placeholder="0"
          icon={dollarIcon}
          alt="dollar icon"
          handleChange={setBill}
        />

        <div className="my-8 w-full">
          <div className="mb-4">Select Tip %</div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            <TipSelect value="5" percent={percent} setPercent={setPercent} />
            <TipSelect value="10" percent={percent} setPercent={setPercent} />
            <TipSelect value="15" percent={percent} setPercent={setPercent} />
            <TipSelect value="25" percent={percent} setPercent={setPercent} />
            <TipSelect value="50" percent={percent} setPercent={setPercent} />
            <input
              type="number"
              placeholder="custom"
              className="
              [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none
              capitalize p-2 rounded-lg bg-light-grayish-cyan
              "
              onChange={(e) => setPercent(e.currentTarget.value)}
            />
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

      <Output
        reset={reset}
        totalBill={totalBill}
        tipPerPerson={tipPerPerson}
        split={split}
        checkValues={checkValues}
      />
    </div>
  );
};

export default Calculator;
