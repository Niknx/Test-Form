import style from "./RadioInputs.module.scss";

import { useState } from "react";

import { useDispatch } from "react-redux";
import { setTypeInsurance } from "@/state/state";

import RadioInputComponent from "./RadioInput/RadioInput";

const typeInsurance = [
  { id: 1, text: "Однократное путешествие" },
  { id: 2, text: "Многократное путешествие" },
];

export interface TypeInsurance {
  id: number;
  text: string;
}

export default function RadioInputsComponent() {
  const [selectedInput, setSelectedInput] = useState<TypeInsurance | null>(null);

  const dispatch = useDispatch();

  function selectInput(input: TypeInsurance) {
    setSelectedInput(input);
    dispatch(setTypeInsurance(input.text));
  }

  return (
    <div className={style["radio-inputs__wrapper"]}>
      {typeInsurance.map((input) => {
        return (
          <RadioInputComponent
            key={input.id}
            input={input}
            selectInput={selectInput}
            selectedInput={selectedInput}
          ></RadioInputComponent>
        );
      })}
    </div>
  );
}
