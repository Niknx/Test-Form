import style from "./SecondSlide.module.scss";

import ProgramsComponent from "./Programs/Programs";
import BtnSubmitComponent from "./BtnSubmit/BtnSubmit";

export default function SecondSlideComponent() {
  return (
    <swiper-slide>
      <div className={style["second-slide__wrapper"]}>
        <h1 className={style["second-slide__title"]}>Выберите программу</h1>
        <ProgramsComponent></ProgramsComponent>
        <h2 className={style["second-slide__text"]}>Сравнить программы</h2>
        <BtnSubmitComponent></BtnSubmitComponent>
      </div>
    </swiper-slide>
  );
}
