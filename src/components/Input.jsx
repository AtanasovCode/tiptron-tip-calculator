const Input = ({ formFor, icon, placeholder, label, alt, handleChange }) => {
  return (
    <div className="w-full">
      <form className="w-full">
        <label htmlFor={formFor} className="text-dark-grayish-cyan text-sm">
          {label}
        </label>
        <div className="relative w-full">
          <input
            type="number"
            placeholder={placeholder}
            className="
              [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none
              w-full py-2 px-5 bg-light-grayish-cyan rounded-xl text-right"
            onChange={(e) => handleChange(e.currentTarget.value)}
          />
          <img
            src={icon}
            alt={alt}
            className="absolute top-[50%] left-4 translate-y-[-50%]"
          />
        </div>
      </form>
    </div>
  );
};

export default Input;
