import style from "./TravelCountry.module.scss";

import HeaderBlokComponent from "../HeaderBlok/HeaderBlok";
import TravelCountryInputsComponent from "./TravelCountryInputs/TravelCountryInputs";

export default function TravelCountryComponent() {
  return (
    <div className={style["travel-country__wrapper"]}>
      <HeaderBlokComponent title="Страна путешествия"></HeaderBlokComponent>
      <TravelCountryInputsComponent></TravelCountryInputsComponent>
    </div>
  );
}
