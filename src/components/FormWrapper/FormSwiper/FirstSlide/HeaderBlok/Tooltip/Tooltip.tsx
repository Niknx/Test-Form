import style from "./Tooltip.module.scss";

export default function TooltipComponent() {
  return (
    <div className={style["tooltip__wrapper"]}>
      <div className={style["tooltip__btn"]}>?</div>
      <div className={style["tooltip__text"]}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, saepe.
      </div>
    </div>
  );
}
