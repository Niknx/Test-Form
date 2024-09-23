import style from "./Code.module.scss";

import { useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";

import { useDispatch } from "react-redux";
import { setPhoneCode } from "@/state/state";

import { useOnClickOutside } from "usehooks-ts";
import clsx from "clsx";

import uzFlag from "@/assets/img/1.png";
import kzFlag from "@/assets/img/2.webp";

interface Code {
  id: number;
  img: StaticImageData;
  codeNumber: string;
  codeCountry: string;
}

const codes = [
  { id: 1, img: uzFlag, codeNumber: "+998", codeCountry: "UZ" },
  { id: 2, img: kzFlag, codeNumber: "+7", codeCountry: "KZ" },
  { id: 3, img: uzFlag, codeNumber: "+998", codeCountry: "UZ" },
  { id: 4, img: kzFlag, codeNumber: "+7", codeCountry: "KZ" },
  { id: 5, img: uzFlag, codeNumber: "+998", codeCountry: "UZ" },
  { id: 6, img: kzFlag, codeNumber: "+7", codeCountry: "KZ" },
];

const Code = ({
  code,
  selectCode,
}: {
  code: Code;
  selectCode?: (code: Code) => void;
}) => {
  return (
    <div onClick={() => selectCode?.(code)} className={style["code__code"]}>
      <Image
        className={style["code__img-flag"]}
        src={code.img}
        alt={code.codeCountry}
        width={250}
        height={125}
      />
      <div className={style["code__number"]}>
        ({code.codeNumber}) {code.codeCountry}
      </div>
    </div>
  );
};

export default function CodeComponent() {
  const [selectedCountry, setSelectedCountry] = useState(codes[0]);
  const [isOpenDd, setIsOpenDd] = useState(false);
  const refCode = useRef(null);

  const selectCode = (code: Code) => {
    setSelectedCountry(code);
    closeDd();
  };

  const toggleDd = () => setIsOpenDd(!isOpenDd);
  const closeDd = () => setIsOpenDd(false);

  useOnClickOutside(refCode, closeDd);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPhoneCode(selectedCountry.codeNumber));
  }, [selectedCountry]);

  return (
    <div ref={refCode} className={style["code__wrapper"]}>
      <div onClick={toggleDd} className={style["code__input"]}>
        <Code code={selectedCountry} />
        <svg
          className={style["code__arrow"]}
          xmlns="http://www.w3.org/2000/svg"
          width="9"
          height="5"
          viewBox="0 0 9 5"
          fill="none"
        >
          <path d="M1 1L4.5 4L8.5 1" stroke="#B6B3C4" strokeLinecap="round" />
        </svg>
      </div>
      <div
        className={clsx(style["code__dd"], isOpenDd && style["code__dd-open"])}
      >
        {codes.map((code) => (
          <Code key={code.id} code={code} selectCode={selectCode} />
        ))}
      </div>
    </div>
  );
}
