import InputErrorMessage from "./InputErroMessage";

export default function InputForm({
  type = "text",
  placeholder,
  name,
  value,
  onChange,
  errorInput,
}) {
  return (
    <div className={`flex flex-col gap-2 w-full `}>
      <div className="relative z-0">
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className="peer block w-full appearance-none border-b border-textGrayDark bg-textWhite/0 pb-1 pt-3 px-2 text-md text-gray-900 focus:border-primary focus:outline-none focus:ring-0"
          placeholder=" "
        />
        <label className="absolute origin-[0] top-4 text-md transform duration-300 peer-placeholder-shown:-z-10 z-10 peer-focus:z-10 peer-placeholder-shown:scale-100 scale-75 peer-focus:scale-75 peer-placeholder-shown:-translate-y-1 -translate-y-6 peer-focus:-translate-y-6 peer-placeholder-shown:translate-x-2 translate-x-2 peer-focus:text-primaryDark">
          {placeholder}
        </label>
      </div>
      {errorInput && <InputErrorMessage message={errorInput} />}
    </div>
  );
}
