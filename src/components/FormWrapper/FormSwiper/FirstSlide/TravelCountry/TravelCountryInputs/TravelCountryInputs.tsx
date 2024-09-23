import style from "./TravelCountryInputs.module.scss";

import { setSwiperСhange, setCountry } from "@/state/state";
import { Country } from "@/data/data";
import { DefaultCountry } from "@/state/DataForm/DataForm";

import TravelCountryInputComponent from "./TravelCountryInput/TravelCountryInput";

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

const defaultCountry: DefaultCountry = {
  name: "Выберите страну",
};

export default function TravelCountryInputsComponent() {
  const [items, setItems] = useState<Array<Country | DefaultCountry>>([
    defaultCountry,
  ]);
  const dispatch = useDispatch();

  const handleAddItemClick = () => {
    setItems((prevItems) => [...prevItems, defaultCountry]);
    dispatch(setSwiperСhange(1));
  };

  const handleSelectRow = (row: Country, index: number) => {
    setItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems[index] = row;
      return updatedItems;
    });
  };

  const dispatchCountryUpdate = () => {
    dispatch(setCountry(items));
  };

  useEffect(() => {
    dispatchCountryUpdate();
  }, [dispatchCountryUpdate]);

  return (
    <div className={style["travel-country-input__wrapper"]}>
      {items.map((row, index) => (
        <TravelCountryInputComponent
          key={index}
          row={row}
          index={index}
          selectRow={handleSelectRow}
        />
      ))}
      <div
        onClick={handleAddItemClick}
        className={style["travel-country-input__btn-add-row"]}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
        >
          <path
            d="M8.5 2V14.5M2 8.5H15"
            
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}
