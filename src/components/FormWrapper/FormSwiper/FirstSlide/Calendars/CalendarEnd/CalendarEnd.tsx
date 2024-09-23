import style from "./CalendarEnd.module.scss";

import HeaderBlokComponent from "../../HeaderBlok/HeaderBlok";
import CalendarComponent from "../Calendars";

export default function CalendarEndComponent() {
  return (
    <div className={style["calendar-end__wrapper"]}>
      <HeaderBlokComponent title="Конец страхования"></HeaderBlokComponent>

      <CalendarComponent targetState="calendarEnd"></CalendarComponent>
    </div>
  );
}
