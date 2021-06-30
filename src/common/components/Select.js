import React from "react";
import styled, { withTheme } from "styled-components";
import Select from "react-select";

const ReactSelect = styled(Select)`
  .select__menu {
    z-index: 5;
  }
  .select__control {
    background-color: #fff;
    border-width: 0px;
    box-shadow: none;
    outline: none;
    max-height: 38px;
    overflow: auto;
    &:focus,
    &:hover {
      border-width: 0px;
      box-shadow: none;
      outline: none;
    }
  }
  .select__indicators {
    -webkit-align-items: normal;
    -webkit-box-align: normal;
    align-items: normal;
  }
  .select__value-container {
    padding: 2px;
  }
`;

const SelectWrapper = ({
  name,
  value,
  labelKey,
  valueKey,
  defaultOptions,
  size,
  disabled,
  onChange,
  onBlur,
  isSearchable,
  isClearable,
  loading,
  isMulti,
  defaultSelectedOptions,
  theme,
  closeMenuOnSelect,
  ...rest
}) => {
  const styles = {
    control: (base) => ({
      ...base,
      fontSize: "small",
    }),
    menu: (base) => ({
      ...base,
      fontSize: "small",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? "#267370"
        : state.isFocused
        ? "rgba(0, 184, 217, 0.1)"
        : "white",
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: "#267370",
    }),
  };

  return (
    <ReactSelect
      classNamePrefix="select"
      value={value}
      isDisabled={disabled}
      placeholder=""
      isLoading={loading}
      isClearable={disabled ? false : isClearable}
      isSearchable={isSearchable}
      name={name}
      options={defaultOptions}
      onChange={onChange}
      onBlur={onBlur}
      styles={styles}
      key={value}
      isMulti={isMulti}
      closeMenuOnSelect={closeMenuOnSelect}
      menuPlacement="auto"
      {...rest}
    />
  );
};

SelectWrapper.defaultProps = {
  onBlur: () => {},
  isSearchable: true,
  onChange: () => {},
  disabled: false,
  isClearable: true,
  loading: false,
  isMulti: false,
  closeMenuOnSelect: true,
};

export default withTheme(SelectWrapper);
