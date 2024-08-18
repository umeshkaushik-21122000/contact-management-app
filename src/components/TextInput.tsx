import { TextInputProps } from "./types";


const TextInput: React.FC<TextInputProps> = ({
    id,
    name,
    placeholder,
    value,
    onChange,
    maxLength,
  }) => (
    <div>
      <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900">{name}</label>
      <input
        id={id}
        type="text"
        name={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="block mb-2 text-sm font-medium text-gray-900 border border-2  rounded rounded-4 px-4"
        maxLength={maxLength}
      />
    </div>
  );

  export default TextInput;