import style from "./TypeInsurance.module.scss";

import RadioInputsComponent from "./RadioInputs/RadioInputs";
import HeaderBlokComponent from "../HeaderBlok/HeaderBlok";

export default function TypeInsuranceComponent() {
  return (
    <div className={style["type-insurance__wrapper"]}>
      <HeaderBlokComponent title="Тип покрытия"></HeaderBlokComponent>

      <RadioInputsComponent></RadioInputsComponent>
    </div>
  );
}
