import style from "./BtnSubmit.module.scss";

import { useSelector } from "react-redux";
import { RootState } from "@/state/state";

export default function BtnSubmitComponent() {
  const dataForm = useSelector((state: RootState) => state.dataForm);

  function alertDataForm() {
    alert(JSON.stringify(dataForm));
  }

  return (
    <div onClick={alertDataForm} className={style["btn-submit__wrapper"]}>
      <div className={style["btn-submit__text"]}>Выбрать Gold</div>
      <div className={style["btn-submit__text"]}>UZS 173,954.76</div>
    </div>
  );
}
