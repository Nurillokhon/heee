/** @format */

"use client ";
interface InputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  name?: string;
}
export default function SingleInput({
  type = "text",
  placeholder = "",
  onChange,
  className = "",
  value,
  name,
}: InputProps) {
  return (
    <input
      defaultValue={value}
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      className={`w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black ${className}`}
    />
  );
}
