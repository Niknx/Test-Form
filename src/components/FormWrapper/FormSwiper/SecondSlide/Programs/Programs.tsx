import style from "./Programs.module.scss";

import { useState } from "react";

import { setProgram, RootState } from "@/state/state";
import { useDispatch, useSelector } from "react-redux";

import { programs, Program, Country } from "@/data/data";

import ProgramsCardComponent from "./ProgramsCard/ProgramsCard";

export default function ProgramsComponent() {
  const country = useSelector((state: RootState) => state.dataForm.country);

  const countriesWithPrograms = country.filter(
    (c): c is Country =>
      "programs" in c && Array.isArray(c.programs) && c.programs.length > 0
  );

  const allPrograms = countriesWithPrograms.flatMap(
    (c) => (c as Country).programs
  );

  const programCounts = new Map<number, number>();
  allPrograms.forEach((p) => {
    programCounts.set(p.id, (programCounts.get(p.id) || 0) + 1);
  });

  const commonPrograms = Array.from(programCounts.entries())
    .filter(([id, count]) => count === countriesWithPrograms.length)
    .map(([id]) => id);

  const filteredPrograms = programs.filter((p) =>
    commonPrograms.includes(p.id)
  );

  //

  const [activeProgram, setActiveProgram] = useState<Program | null>(null);

  const dispatch = useDispatch();

  function handleCardClick(card: Program) {
    setActiveProgram(card);
    dispatch(setProgram(card));
  }

  return (
    <div className={style["programs__wrapper"]}>
      {filteredPrograms?.map((card) => {
        return (
          <ProgramsCardComponent
            key={card.id}
            card={card}
            selectCard={() => handleCardClick(card)}
            activeProgram={activeProgram}
          ></ProgramsCardComponent>
        );
      })}
    </div>
  );
}
