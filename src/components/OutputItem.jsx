const OutputItem = ({ label, value, unit }) => {
  return (
    <div className="flex items-center justify-between mb-12">
      <div className="flex flex-col items-start mr-12">
        <div>{label}</div>
        {unit && <div className="text-xs text-grayish-cyan">{unit}</div>}
      </div>
      <div className="text-4xl text-strong-cyan dark:text-blue-200">
        ${value ? value : 0}
      </div>
    </div>
  );
};

export default OutputItem;
