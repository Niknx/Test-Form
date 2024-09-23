import style from "./FormSwiper.module.scss";

import { useEffect, useRef, useState } from "react";

import { useSelector } from "react-redux";
import { RootState } from "@/state/state";

import { register } from "swiper/element/bundle";

import SecondSlideComponent from "./SecondSlide/SecondSlide";
import FirstSlideComponent from "./FirstSlide/FirstSlide";

export default function FormSwiperComponent() {
  const swiperEl = useRef<any>(null);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    register();

    const swiperParams = {
      slidesPerView: 1,
      allowTouchMove: false,
      autoHeight: true,
      injectStyles: [
        `
          :host .swiper {
                overflow: visible;
          }
          `,
      ],
    };

    Object.assign(swiperEl.current, swiperParams);

    swiperEl.current.initialize();
    swiperEl.current.swiper.update();

    setIsHydrated(true);
  }, []);

  //
  const activeSlide: number = useSelector(
    (state: RootState) => state.swiperControl.activeSlide
  );

  useEffect(() => {
    swiperEl.current.swiper.slideTo(activeSlide);
  }, [activeSlide]);

  //

  const swiperСhange: number = useSelector(
    (state: RootState) => state.swiperControl.swiperСhange
  );

  useEffect(() => {
    swiperEl.current.swiper.update();
  }, [swiperСhange]);

  return (
    <div>
      <swiper-container ref={swiperEl} init={false}>
        <FirstSlideComponent></FirstSlideComponent>
        {isHydrated && <SecondSlideComponent></SecondSlideComponent>}
      </swiper-container>
    </div>
  );
}
