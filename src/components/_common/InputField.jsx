import React from "react";

const InputField = ({
  type = "text",
  name,
  label,
  labelStyle,
  containerStyle,
  placeholder,
  inputStyle,
  inputContainerStyle,
  iconSrc,
  value,
  mustFill = true,
  handleChange,
  handleBtnClick,
  ...props
}) => {
  const displayInput = () => {
    switch (type) {
      case "textarea":
        return (
          <textarea
            name={name}
            className={inputStyle}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            {...props}
          />
        );
      default:
        return (
          <input
            type={type}
            placeholder={placeholder}
            className={inputStyle}
            name={name}
            value={value}
            onInput={handleChange}
            required
            {...props}
          />
        );
    }
  };
  return (
    <div className={containerStyle}>
      {label && (
        <label htmlFor={name} className={labelStyle}>
          {label} {mustFill && "*"}
        </label>
      )}

      <div className={inputContainerStyle}>
        {displayInput()}
        {iconSrc && (
          <button onClick={handleBtnClick} className="shadow-lg size-6">
            <img src={iconSrc} alt="input icon" />
          </button>
        )}
      </div>
    </div>
  );
};

export default InputField;
