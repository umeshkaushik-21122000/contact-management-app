import { RadioGroupProps } from "./types";

const RadioGroup: React.FC<RadioGroupProps> = ({ value, onChange }) => (
    <div className="flex gap-3 justify-evenly">
      <label>Status:</label>
      <input
          type="radio"
          name="status"
          value="active"
          checked={value}
          onChange={onChange}
          className=""
        />
      <label>
        Active
      </label>
      <input
          type="radio"
          name="status"
          value="inactive"
          checked={!value}
          onChange={onChange}
          className=""
        />
      <label>
        Inactive
      </label>
  
    </div>
  );

  export default RadioGroup;