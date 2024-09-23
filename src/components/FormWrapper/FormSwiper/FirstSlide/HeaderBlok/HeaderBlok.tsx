import style from "./HeaderBlok.module.scss";

import TooltipComponent from "./Tooltip/Tooltip";

export default function HeaderBlokComponent({ title }: { title: string }) {
  return (
    <div className={style["header-block__header"]}>
      <h2 className={style["header-block__title"]}>{title}</h2>
      <TooltipComponent></TooltipComponent>
    </div>
  );
}
