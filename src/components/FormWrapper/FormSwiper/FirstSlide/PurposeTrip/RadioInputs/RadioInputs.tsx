import style from "./RadioInputs.module.scss";

import { activities, Activities } from "@/data/data";

import { setActivities } from "@/state/state";

import { useDispatch } from "react-redux";

import { useState } from "react";
import clsx from "clsx";

export default function RadioInputsComponent() {
  const [selectedInput, setSelectedInput] = useState<Activities | null>(null);

  const dispatch = useDispatch();

  function selectInput(input: Activities) {
    setSelectedInput(input);
    dispatch(setActivities(input));
  }

  return (
    <div className={style["radio-inputs__wrapper"]}>
      {activities.map((input) => {
        return (
          <div
            onClick={() => selectInput(input)}
            className={style["radio-inputs__input"]}
            key={input.id}
          >
            <div
              className={clsx(
                style["radio-inputs__input-icon"],
                selectedInput?.id === input.id &&
                  style["radio-inputs__input-icon-active"]
              )}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="6"
                viewBox="0 0 6 6"
                fill="none"
              >
                <path
                  d="M1 2.5L2.5 4.5L5.5 1"
                  stroke="white"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className={style["radio-inputs__input-text"]}>
              {input.name}
            </div>
          </div>
        );
      })}
    </div>
  );
}
