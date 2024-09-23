"use client";

import style from "./FormWrapper.module.scss";

import FormFooterComponent from "./FormFooter/FormFooter";
import FormHeaderComponent from "./FormHeader/FormHeader";
import FormSwiperComponent from "./FormSwiper/FormSwiper";

export default function FormWrapperComponent() {
  return (
    <form className={style["form-wrapper__form"]} action="">
      <FormHeaderComponent></FormHeaderComponent>
      <FormSwiperComponent></FormSwiperComponent>
      <FormFooterComponent></FormFooterComponent>
    </form>
  );
}
