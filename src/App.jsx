import { useEffect, useState } from "react";
import Calculator from "./components/Calculator";

const App = () => {
  const [percent, setPercent] = useState(0);
  const [people, setPeople] = useState(0);
  const [bill, setBill] = useState(0);
  const [totalBill, setTotalBill] = useState(0);
  const [split, setSplit] = useState(0);
  const [tipPerPerson, setTipPerPerson] = useState(0);

  useEffect(() => {
    if (percent > 0 && bill > 0 && people > 0) {
      //What do I need to know:
      //total bill
      //how much will every person pay for the tip
      // how much will every person pay for the full bill

      let getTotalTip = parseInt(bill) * (parseInt(percent) / 100); //gets the total tip

      let getTipPerPerson = parseInt(getTotalTip) / parseInt(people); //the tip devided by the number of people present

      let getTotalBill = parseInt(getTotalTip) + parseInt(bill); //gets the total tip

      let getSplit = parseInt(getTotalBill) / parseInt(people); //split the full bill betweeen all people

      setTotalBill(getTotalBill.toFixed(2));
      setTipPerPerson(getTipPerPerson.toFixed(2));
      setSplit(getSplit.toFixed(2));
    }
  }, [percent, bill, people]);

  const reset = () => {
    setTotalBill(0);
    setSplit(0);
    setTipPerPerson(0);
    setPercent(0);
    setPeople(0);
    setBill(0);
  };

  const checkValues = () => {
    if (bill && people && percent) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="w-screen h-screen bg-light-grayish-cyan dark:bg-gray-700 flex items-center justify-center font-mono">
      <Calculator
        percent={percent}
        setPercent={setPercent}
        setPeople={setPeople}
        setBill={setBill}
        totalBill={totalBill}
        tipPerPerson={tipPerPerson}
        split={split}
        reset={reset}
        checkValues={checkValues}
      />
    </div>
  );
};

export default App;
