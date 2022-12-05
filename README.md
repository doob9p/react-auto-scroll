# react-auto-scroll

<br>

![](https://github.com/doob9p/react-auto-scroll/blob/master/public/introduce.gif)

<br>

## Install

```
npm install @doob9p/react-auto-scroll
```

<br>
<br>

## Example

```
import React from "react";
import ReactAutoScroll from "./lib/components/react-auto-scroll/ReactAutoScroll";

type Data = {
  id: number;
  name: string;
  age: number;
};

const datas: Data[] = [
  {
    id: 1,
    name: "브룩",
    age: 20,
  },
  {
    id: 2,
    name: "브룩",
    age: 20,
  },
  {
    id: 3,
    name: "브룩",
    age: 20,
  },
  {
    id: 4,
    name: "브룩",
    age: 20,
  },
  {
    id: 5,
    name: "브룩",
    age: 20,
  },
  {
    id: 6,
    name: "브룩",
    age: 20,
  },
  {
    id: 7,
    name: "브룩",
    age: 20,
  },
];

function Test() {
  const row = (value: Data) => {
    return (
      <div
        key={value.id}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: 50,
        }}
      >
        <span>{value.id}</span>
        <span>{value.name}</span>
        <span>{value.age}</span>
      </div>
    );
  };

  return (
    <div>
      <div style={{ width: 800, textAlign: "center" }}>
        <ReactAutoScroll second={1000} datas={datas} row={row} />
      </div>
    </div>
  );
}

export default Test;
```
