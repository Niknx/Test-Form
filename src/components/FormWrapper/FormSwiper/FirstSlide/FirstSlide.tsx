import style from "./FirstSlide.module.scss";

import TravelCountryComponent from "./TravelCountry/TravelCountry";
import TypeInsuranceComponent from "./TypeInsurance/TypeInsurance";
import CalendarStartComponent from "./Calendars/CalendarStart/CalendarStart";
import CalendarEndComponent from "./Calendars/CalendarEnd/CalendarEnd";
import PurposeTripComponent from "./PurposeTrip/PurposeTrip";
import PhoneNumberComponent from "./PhoneNumber/PhoneNumber";
import BtnNextSlideComponent from "./BtnNextSlide/BtnNextSlide";

export default function FirstSlideComponent() {
  return (
    <swiper-slide>
      <div className={style["first-slide__wrapper"]}>
        <h1 className={style["first-slide__title"]}>
          Покупка страхового полиса
        </h1>
        <TravelCountryComponent></TravelCountryComponent>
        <TypeInsuranceComponent></TypeInsuranceComponent>
        <CalendarStartComponent></CalendarStartComponent>
        <CalendarEndComponent></CalendarEndComponent>
        <PurposeTripComponent></PurposeTripComponent>
        <PhoneNumberComponent></PhoneNumberComponent>
        <BtnNextSlideComponent></BtnNextSlideComponent>
      </div>
    </swiper-slide>
  );
}
