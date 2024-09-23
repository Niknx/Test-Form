import BtnPrevSlideComponent from "./BtnPrevSlide/BtnPrevSlide";
import BtnSlideComponent from "./BtnSlide/BtnSlide";
import style from "./FormHeader.module.scss";

export default function FormHeaderComponent() {
  return (
    <div className={style['form-header__wrapper']}>
      <BtnSlideComponent></BtnSlideComponent>
      <BtnPrevSlideComponent></BtnPrevSlideComponent>
    </div>
  );
}
