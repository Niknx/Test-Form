import style from "./PhoneNumber.module.scss";

import HeaderBlokComponent from "../HeaderBlok/HeaderBlok";
import CodeComponent from "./Code/Code";
import NumberComponent from "./Number/Number";

export default function PhoneNumberComponent() {
  return (
    <div className={style["phone-number__wrapper"]}>
      <HeaderBlokComponent title="Номер мобильного телефона"></HeaderBlokComponent>
      <div className={style["phone-number__content"]}>
        <CodeComponent></CodeComponent>
        <NumberComponent></NumberComponent>
      </div>
    </div>
  );
}
