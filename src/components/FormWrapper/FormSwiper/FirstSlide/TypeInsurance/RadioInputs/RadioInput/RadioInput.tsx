import style from "./RadioInput.module.scss";

import { useState } from "react";

import { TypeCoating } from "../RadioInputs";
import clsx from "clsx";

export default function RadioInputComponent({
  input,
  selectInput,
  selectedInput,
}: {
  input: TypeCoating;
  selectInput: (input: TypeCoating) => void;
  selectedInput: TypeCoating | null;
}) {
  const thisInputSelected = input.id === selectedInput?.id;

  return (
    <div
      onClick={() => selectInput(input)}
      className={style["radio-input__wrapper"]}
    >
      <div
        className={clsx(
          style["radio-input__icon"],
          thisInputSelected && style["radio-input__icon-selected"]
        )}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="6"
          height="6"
          viewBox="0 0 6 6"
          fill="none"
        >
          <path d="M1 2.5L2.5 4.5L5.5 1" stroke="white" strokeLinecap="round" />
        </svg>
      </div>
      <div className={style["radio-input__text"]}>{input.text}</div>
    </div>
  );
}
