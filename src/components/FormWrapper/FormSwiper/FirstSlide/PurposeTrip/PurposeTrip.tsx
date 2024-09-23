import style from "./PurposeTrip.module.scss";

import HeaderBlokComponent from "../HeaderBlok/HeaderBlok";
import RadioInputsComponent from "./RadioInputs/RadioInputs";

export default function PurposeTripComponent() {
  return (
    <div className={style["purpose-trip"]}>
      <HeaderBlokComponent title="Цель"></HeaderBlokComponent>
      <RadioInputsComponent></RadioInputsComponent>
    </div>
  );
}
