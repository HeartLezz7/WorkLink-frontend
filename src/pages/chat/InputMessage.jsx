import TextareaAutosize from "react-textarea-autosize";

export default function InputMessage({ value, onChange }) {
  return (
    <input
      placeholder="message..."
      value={value}
      onChange={onChange}
      className="w-full rounded-xl py-2 px-4 outline-none bg-backgroundWhiteBlue"
    />
  );
}
