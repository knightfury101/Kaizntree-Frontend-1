import classNames from "classnames";
import { useRef } from "react";
import { InputCheckboxComponent } from "./types";

export const InputCheckbox: InputCheckboxComponent = ({
  id,
  checked = false,
  disabled,
  onChange,
}) => {
  const inputIdRef = useRef(`KaizntreeInputCheckbox-${id}`);

  //This is Bug-2.
  const handleChange = () => {
    onChange(!checked);
  };

  return (
    <div
      className="KaizntreeInputCheckbox--container"
      data-testid={inputIdRef.current}
    >
      <label
        htmlFor={inputIdRef.current}
        className={classNames("KaizntreeInputCheckbox--label", {
          "KaizntreeInputCheckbox--label-checked": checked,
          "KaizntreeInputCheckbox--label-disabled": disabled,
        })}
      />
      <input
        id={inputIdRef.current}
        type="checkbox"
        className="KaizntreeInputCheckbox--input"
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
      />
    </div>
  );
};
