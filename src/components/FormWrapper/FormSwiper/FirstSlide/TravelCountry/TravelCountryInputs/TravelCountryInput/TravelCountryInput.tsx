import style from "./TravelCountryInput.module.scss";

import { Country, contries } from "@/data/data";
import { DefaultCountry } from "@/state/DataForm/DataForm";

import { useMemo, useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";
import clsx from "clsx";

const CountryRowItem = ({
  country,
  onSelect,
}: {
  country: Country;
  onSelect: () => void;
}) => (
  <div
    onClick={onSelect}
    className={style["travel-country-input__row-item-dd-row"]}
  >
    {country.name}
  </div>
);

export default function TravelCountryInputComponent({
  row,
  index,
  selectRow,
}: {
  row: Country | DefaultCountry;
  index: number;
  selectRow: (row: Country, index: number) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectCountry = (country: Country) => {
    selectRow(country, index);
    toggleDropdown();
  };

  const dropdownRef = useRef(null);
  useOnClickOutside(dropdownRef, () => setIsOpen(false));

  const renderedCountryRows = useMemo(
    () =>
      contries.map((country) => (
        <CountryRowItem
          key={country.id}
          country={country}
          onSelect={() => handleSelectCountry(country)}
        />
      )),
    [handleSelectCountry]
  );

  return (
    <div
      ref={dropdownRef}
      onClick={toggleDropdown}
      className={clsx(
        style["travel-country-input__row"],
        isOpen && style["dd_show"]
      )}
    >
      <div className={style["travel-country-input__row-item"]}>
        <div className={style["travel-country-input__row-item-text"]}>
          {row.name}
        </div>
        <div className={style["travel-country-input__row-item-icon"]}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="7"
            viewBox="0 0 11 7"
            fill="none"
          >
            <path
              d="M2 2L5.5 5L9.5 2"
              stroke="#B6B3C4"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      <div className={style["travel-country-input__row-item-dd"]}>
        {renderedCountryRows}
      </div>
    </div>
  );
}
