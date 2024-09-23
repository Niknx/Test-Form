// Для корректной работы библиотеки Swiper версии 11.1.14 в
// TypeScript-проекте необходимо создать собственные объявления
// типов, поскольку на момент разработки официальная типизация
// отсутствовала, а использование React-компонентов из Swiper
// не рекомендуется разработчиком Swiper

import React from "react";

import type { SwiperSlideProps, SwiperProps } from "swiper/react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "swiper-container": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & SwiperProps,
        HTMLElement
      >;
      "swiper-slide": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & SwiperSlideProps,
        HTMLElement
      >;
    }
  }
}
