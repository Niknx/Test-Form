import style from "./BtnSlide.module.scss";

import { useSelector, useDispatch } from "react-redux";
import { RootState, setActiveSlide } from "@/state/state";

import clsx from "clsx";

export default function BtnSlideComponent() {
  const quantitySlides: number = useSelector(
    (state: RootState) => state.swiperControl.quantitySlides
  );

  const activeSlide: number = useSelector(
    (state: RootState) => state.swiperControl.activeSlide
  );

  const dispatch = useDispatch();

  const buttons = Array.from({ length: quantitySlides }, (_, index) => (
    <div
      key={index}
      className={clsx(
        style["btn-slide__btn"],
        index == activeSlide && style["btn-slide__btn-active"]
      )}
      onClick={() => dispatch(setActiveSlide(index))}
    ></div>
  ));

  return <div className={style["btn-slide__wrapper"]}>{buttons}</div>;
}
