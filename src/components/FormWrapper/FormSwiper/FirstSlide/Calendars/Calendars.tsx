import style from "./Calendars.module.scss";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setCalendarStart, setCalendarEnd } from "@/state/state";

import { DateField } from "@mui/x-date-pickers/DateField";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import dayjs, { Dayjs } from "dayjs";
import clsx from "clsx";
import { useOnClickOutside } from "usehooks-ts";

type TargetState = "calendarStart" | "calendarEnd";

export default function CalendarComponent({
  targetState,
}: {
  targetState: TargetState;
}) {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);

  const handleDatePartChange = (
    newValue: Dayjs | null,
    part: "day" | "month" | "year"
  ) => {
    if (newValue && newValue.isValid()) {
      let updatedDate = selectedDate ? selectedDate.clone() : dayjs();

      switch (part) {
        case "day":
          updatedDate = updatedDate.date(newValue.date());
          break;
        case "month":
          updatedDate = updatedDate.month(newValue.month());
          break;
        case "year":
          updatedDate = updatedDate.year(newValue.year());
          break;
      }

      if (updatedDate.isValid()) {
        setSelectedDate(updatedDate);
      }
    }
  };

  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedDate) {
      if (targetState === "calendarStart") {
        dispatch(setCalendarStart(selectedDate.toJSON()));
      } else if (targetState === "calendarEnd") {
        dispatch(setCalendarEnd(selectedDate.toJSON()));
      }
    }
  }, [selectedDate, dispatch, targetState]);

  // 

  const styleInput = {
    "& .MuiOutlinedInput-notchedOutline": {
      borderRadius: "10px",
      borderColor: "#F1EFF5",
    },
    "& .MuiInputBase-root": {
      backgroundColor: "#F1EFF5",
      borderColor: "#F1EFF5",
      borderRadius: "10px",
    },
    "& .MuiInputBase-input": {
      padding: "6px 11px",

      color: "#59585b",
      fontFamily: "Inter, sans-serif",
      fontSize: "10px",
      fontWeight: "500",

      backgroundColor: "#F1EFF5",
      border: "#F1EFF5",
      borderRadius: "10px",
    },
  };

  // 

  function handleDateChange(date: Dayjs) {
    setSelectedDate(date);
    setIsOpenCalendar(false);
  }

  const today = dayjs();

  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const [isOpenCalendar, setIsOpenCalendar] = useState(false);

  const refCalendar = useRef(null);

  const handleClickOutside = () => {
    setIsOpenCalendar(false);
  };

  useOnClickOutside(refCalendar, handleClickOutside);

  return (
    <div className={style["calendar-start__wrapper"]}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateField
          key={1}
          sx={styleInput}
          value={selectedDate}
          onChange={(newValue) => {
            handleDatePartChange(newValue, "day");
            if (newValue) {
              today.date(newValue.date());
            }
          }}
          format="DD"
        />
        <DateField
          key={2}
          sx={styleInput}
          value={selectedDate}
          onChange={(newValue) => {
            handleDatePartChange(newValue, "month");
            if (newValue) {
              today.month(newValue.month());
            }
          }}
          format="MM"
        />
        <DateField
          key={3}
          sx={styleInput}
          value={selectedDate}
          onChange={(newValue) => {
            handleDatePartChange(newValue, "year");
            if (newValue) {
              today.year(newValue.year());
            }
          }}
          format="YYYY"
        />
        <div className={style["calendar-start__calendar-wrapper"]}>
          <div
            onClick={() => setIsOpenCalendar(!isOpenCalendar)}
            className={style["calendar-start__btn-calendar"]}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                d="M11.5 4V11H2L1 10V4M11.5 4H1M11.5 4L11 2H2L1 3V4M3.5 5.5V9.5M6.5 5.5V9.5M9.5 5.5V9.5M4 1V3M6.5 1V3M9 1V3"
                stroke="#B6B3C4"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div
            className={clsx(
              style["calendar-start__calendar"],
              isOpenCalendar && style["calendar-start__calendar-active"]
            )}
            ref={refCalendar}
          >
            {isHydrated && (
              <DateCalendar
                onChange={handleDateChange}
                value={selectedDate || today}
                defaultValue={today}
                sx={{ backgroundColor: "#F1EFF5" }}
              />
            )}
          </div>
        </div>
      </LocalizationProvider>
    </div>
  );
}
