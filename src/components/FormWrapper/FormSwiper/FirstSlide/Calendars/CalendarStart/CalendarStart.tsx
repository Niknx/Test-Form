import style from "./CalendarStart.module.scss";

import HeaderBlokComponent from "../../HeaderBlok/HeaderBlok";
import CalendarComponent from "../Calendars";

export default function CalendarStartComponent() {
  return (
    <div className={style["calendar-start__wrapper"]}>
      <HeaderBlokComponent title="Начало страхования"></HeaderBlokComponent>

      <CalendarComponent targetState="calendarStart"></CalendarComponent>
    </div>
  );
}
