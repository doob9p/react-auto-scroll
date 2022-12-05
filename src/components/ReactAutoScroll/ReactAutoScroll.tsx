import React, { useEffect, useRef, useState } from "react";
import "./ReactAutoScroll.css";
import useInterval from "../../hooks/useInterval";
import { classNames } from "../../utils/helper";

interface Props {
  className?: string;
  second: number;
  datas: any[];
  row: (value: any, index: number) => JSX.Element;
  maxHeight?: number;
  colNumber?: number;
}

function ReactAutoScroll({
  className = "",
  second,
  datas: _datas,
  row,
  maxHeight = 240,
  colNumber = 1,
}: Props) {
  const historyRef = useRef<HTMLDivElement>(null);
  const [datas, setDatas] = useState(_datas);

  useEffect(() => {
    const height = historyRef.current?.children[0].clientHeight ?? 48.2;

    historyRef.current?.scrollTo({
      top: historyRef.current.scrollTop + height,
      behavior: "smooth",
    });
  }, [datas]);

  useInterval(() => {
    setDatas((prev) => {
      if (colNumber > 1) {
        const prevValues = prev.filter((_, index) => index > colNumber - 1);
        const afterValues = prev.filter((_, index) => index < colNumber);

        return [...prevValues, ...afterValues];
      } else {
        const mappedPrev = prev.filter((_, index) => index > 0);

        return [...mappedPrev, prev[0]];
      }
    });
  }, second);

  return (
    <div
      id="react-auto-scroll"
      className={classNames("react-auto-scroll", className)}
      ref={historyRef}
      style={{ maxHeight }}
    >
      {datas &&
        datas.map((value, index) => {
          return row(value, index);
        })}
    </div>
  );
}

export default ReactAutoScroll;
