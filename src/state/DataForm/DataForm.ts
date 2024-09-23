import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Country, Activities, Program } from "@/data/data";

export interface DefaultCountry {
  name: string;
}

interface DataForm {
  country: Country[] | DefaultCountry[];
  typeInsurance: string | null;
  calendarStart: string | null;
  calendarEnd: string | null;
  activities: Activities | null;
  numberPhone: {
    code: string | null;
    number: string | null;
  };
  program: Program | null;
}

export const dataForm = createSlice({
  name: "dataForm",
  initialState: {
    country: [],
    typeInsurance: null,
    calendarStart: null,
    calendarEnd: null,
    activities: null,
    numberPhone: { code: null, number: null },
    program: null,
  } as DataForm,
  reducers: {
    setCountry: (
      state,
      action: PayloadAction<Country[] | DefaultCountry[]>
    ) => {
      state.country = action.payload;
    },
    setTypeInsurance: (state, action: PayloadAction<string | null>) => {
      state.typeInsurance = action.payload;
    },
    setCalendarStart: (state, action: PayloadAction<string | null>) => {
      state.calendarStart = action.payload;
    },
    setCalendarEnd: (state, action: PayloadAction<string | null>) => {
      state.calendarEnd = action.payload;
    },
    setActivities: (state, action: PayloadAction<Activities | null>) => {
      state.activities = action.payload;
    },
    setPhoneCode: (state, action: PayloadAction<string | null>) => {
      state.numberPhone.code = action.payload;
    },
    setPhoneNumber: (state, action: PayloadAction<string | null>) => {
      state.numberPhone.number = action.payload;
    },
    setProgram: (state, action: PayloadAction<Program | null>) => {
      state.program = action.payload;
    },
  },
});
