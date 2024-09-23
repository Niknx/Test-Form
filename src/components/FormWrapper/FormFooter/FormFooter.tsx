import style from "./FormFooter.module.scss";

export default function FormFooterComponent() {
  return (
    <div className={style["form-footer__container"]}>
      <div className={style["form-footer__icon"]}>!</div>
      <div className={style["form-footer__text"]}>
        Не волнуйтесь! Вы можете покинуть сайт и продолжить с этого момента в
        любое время
      </div>
    </div>
  );
}
