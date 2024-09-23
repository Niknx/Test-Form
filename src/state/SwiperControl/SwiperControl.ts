import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const swiperControl = createSlice({
  name: "SwiperControl",
  initialState: {
    quantitySlides: 2,
    activeSlide: 0,
    swiperСhange: 0,
  },
  reducers: {
    setActiveSlide: (state, actions: PayloadAction<number>) => {
      if (
        !(actions.payload < 0) &&
        !(actions.payload > state.quantitySlides - 1)
      ) {
        state.activeSlide = actions.payload;
      }
    },
    setSwiperСhange: (state, actions) => {
      state.swiperСhange += actions.payload;
    },
  },
});
