import TipSelect from "./TipSelect";
import Output from "./Output";
import Input from "./Input";

import dollarIcon from "../assets/icon-dollar.svg";
import personIcon from "../assets/icon-person.svg";

const Calculator = () => {
  return (
    <div className="bg-white p-6 flex items-center justify-between rounded-xl">
      <div className="flex-1 flex flex-col items-start mr-8">
        <Input
          formFor="bill"
          label="Bill"
          placeholder="0"
          icon={dollarIcon}
          alt="dollar icon"
        />

        <div className="my-8">
          <div className="mb-4">Select Tip %</div>
          <div className="grid grid-cols-3 gap-4">
            <TipSelect percentage="5" />
            <TipSelect percentage="10" />
            <TipSelect percentage="15" />
            <TipSelect percentage="25" />
            <TipSelect percentage="50" />
          </div>
        </div>

        <Input
          formFor="people"
          label="Number of People"
          placeholder="0"
          icon={personIcon}
          alt="person icon"
        />
      </div>
      <div className="">
        <Output />
      </div>
    </div>
  );
};

export default Calculator;
