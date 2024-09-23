import style from "./ProgramsCard.module.scss";

import { Program } from "@/data/data";

import clsx from "clsx";

export default function ProgramsCardComponent({
  card,
  activeProgram,
  selectCard,
}: {
  card: Program;
  activeProgram: Program | null;
  selectCard: (card: Program) => void;
}) {
  const isCoversCovid = card.coverages.covid > 0;

  const isActive = activeProgram?.id === card.id;

  return (
    <div
      onClick={() => selectCard(card)}
      className={clsx(
        style["programs-card__wrapper"],
        isActive && style["programs-card__wrapper-active"]
      )}
    >
      <div className={style["programs-card__icon-container"]}>
        <div className={style["programs-card__icon"]}>
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
      </div>
      <div className={style["programs-card__content"]}>
        <h2 className={style["programs-card__title"]}>
          {card.name} {isCoversCovid && "(С покрытием COVID)"}
        </h2>
        <h3 className={style["programs-card__subtitle"]}>
          Общее покрытие - {card.liability} EUR
        </h3>
        <p className={style["programs-card__description"]}>
          {card.description}
        </p>
      </div>
    </div>
  );
}
