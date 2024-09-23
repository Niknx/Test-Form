import FormWrapperComponent from "@/components/FormWrapper/FormWrapper";
import style from "./page.module.scss";

export default function HomePage() {
  return (
    <div className={style["home-page__wrapper"]}>
      <FormWrapperComponent></FormWrapperComponent>
    </div>
  );
}
