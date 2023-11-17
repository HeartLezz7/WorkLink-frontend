export default function InputMessage({ value, onChange }) {
  return (
    <textarea
      type="text"
      rows={1}
      placeholder="message..."
      value={value}
      onChange={onChange}
      className="w-full rounded-xl py-2 px-4 outline-none bg-backgroundWhiteBlue resize-none"
    />
  );
}
