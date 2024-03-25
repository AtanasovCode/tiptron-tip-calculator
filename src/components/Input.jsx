const Input = ({
    formFor,
    icon,
    placeholder,
    label,
    alt,
}) => {
  return (
    <div className="w-full">
      <form className="w-full">
        <label htmlFor={formFor} className="text-dark-grayish-cyan text-sm">
          {label}
        </label>
        <div className="relative w-full">
          <input
            type="text"
            placeholder={placeholder}
            className="w-full p-2 bg-light-grayish-cyan rounded-xl text-right"
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