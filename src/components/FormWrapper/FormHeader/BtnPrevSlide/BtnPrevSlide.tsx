import style from "./BtnPrevSlide.module.scss";

import { useSelector, useDispatch } from "react-redux";
import { RootState, setActiveSlide } from "@/state/state";

export default function BtnPrevSlideComponent() {
  const activeSlide: number = useSelector(
    (state: RootState) => state.swiperControl.activeSlide
  );

  const dispatch = useDispatch();

  return (
    <div
      onClick={() => dispatch(setActiveSlide(activeSlide - 1))}
      className={style["btn-prev-slide"]}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="15"
        viewBox="0 0 18 15"
        fill="none"
      >
        <path
          d="M16 7.5H2M2 7.5L7.5 2M2 7.5L7.5 13.5"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
