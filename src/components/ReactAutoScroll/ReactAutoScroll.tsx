import React, { useEffect, useRef, useState } from "react";
import "./ReactAutoScroll.css";
import useInterval from "../../hooks/useInterval";

interface Props {
  second: number;
  datas: any[];
  row: (value: any) => JSX.Element;
  maxHeight?: number;
}

function ReactAutoScroll({
  second,
  datas: _datas,
  row,
  maxHeight = 240,
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
      const mappedPrev = prev.filter((_, index) => index > 0);

      return [...mappedPrev, prev[0]];
    });
  }, second);

  return (
    <div className="real-time-scheduling">
      <div
        id="history-container"
        className="history"
        ref={historyRef}
        style={{ maxHeight }}
      >
        {datas &&
          datas.map((value) => {
            return row(value);
          })}
      </div>
    </div>
  );
}

export default ReactAutoScroll;
