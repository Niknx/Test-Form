import style from "./BtnNextSlide.module.scss";

import { useDispatch, useSelector } from "react-redux";
import { RootState, setActiveSlide } from "@/state/state";

export default function BtnNextSlideComponent() {
  const activeSlide = useSelector(
    (state: RootState) => state.swiperControl.activeSlide
  );

  const dispatch = useDispatch();

  function nextSlide() {
    dispatch(setActiveSlide(activeSlide + 1));
  }

  return (
    <div className={style["btn-next-slide__wrapper"]}>
      <div onClick={nextSlide} className={style["btn-next-slide__btn"]}>
        Далее
      </div>
    </div>
  );
}
