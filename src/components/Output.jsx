const Output = ({ totalBill, tipPerPerson, split }) => {
  return (
    <div className="flex-1 bg-very-dark-cyan text-white p-6 rounded-xl flex flex-col justify-between w-full">
      <div className="">
        <div className="flex items-center justify-between mb-12">
          <div className="flex flex-col items-start mr-36">
            <div className="">Total Bill</div>
          </div>
          <div className="text-4xl text-strong-cyan">
            ${totalBill ? totalBill : 0}
          </div>
        </div>
        <div className="flex items-center justify-between mb-12">
          <div className="flex flex-col items-start mr-36">
            <div>Tip Amount</div>
            <div className="text-xs text-grayish-cyan">/ person</div>
          </div>
          <div className="text-4xl text-strong-cyan">
            ${tipPerPerson ? tipPerPerson : 0}
          </div>
        </div>
        <div className="flex items-center justify-between mb-12">
          <div className="flex flex-col items-start">
            <div>Total</div>
            <div className="text-xs text-grayish-cyan">/ person</div>
          </div>
          <div className="text-4xl text-strong-cyan">
            ${split ? split : 0}
          </div>
        </div>
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
