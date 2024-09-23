import { configureStore } from "@reduxjs/toolkit";

export type RootState = ReturnType<typeof store.getState>;

import { swiperControl } from "./SwiperControl/SwiperControl";
import { dataForm } from "./DataForm/DataForm";

export const store = configureStore({
  reducer: {
    swiperControl: swiperControl.reducer,
    dataForm: dataForm.reducer,
  },
});

export const { setActiveSlide, setSwiperСhange } = swiperControl.actions;
export const {
  setCountry,
  setTypeInsurance,
  setCalendarStart,
  setCalendarEnd,
  setActivities,
  setPhoneCode,
  setPhoneNumber,
  setProgram,
} = dataForm.actions;
