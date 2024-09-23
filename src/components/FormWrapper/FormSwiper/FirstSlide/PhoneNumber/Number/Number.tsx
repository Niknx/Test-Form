import style from "./Number.module.scss";

import { useState } from "react";

import { useDispatch } from "react-redux";
import { setPhoneNumber } from "@/state/state";

import validatePhoneNumber from "@/lib/validatePhoneNumber";

export default function NumberComponent() {
  const [phone, setPhone] = useState("");

  const dispatch = useDispatch();

  const handlePhoneNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const formattedNumber = validatePhoneNumber(event.target.value);
    setPhone(formattedNumber);
    dispatch(setPhoneNumber(event.target.value));
  };

  return (
    <input
      type="tel"
      value={phone}
      onChange={handlePhoneNumberChange}
      className={style["phone-number__input"]}
    />
  );
}
