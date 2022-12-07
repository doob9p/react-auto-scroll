import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import ReactAutoScroll from "./ReactAutoScroll";

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
    name: "타마",
    age: 20,
  },
  {
    id: 3,
    name: "징베",
    age: 20,
  },
  {
    id: 4,
    name: "키드",
    age: 20,
  },
  {
    id: 5,
    name: "카포네",
    age: 20,
  },
  {
    id: 6,
    name: "라분",
    age: 20,
  },
  {
    id: 7,
    name: "상디",
    age: 20,
  },
];

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

export default {
  title: "Components|Basic/ReactAutoScroll",
  component: ReactAutoScroll,
  argTypes: {
    second: {
      defaultValue: 1000,
      description: "몇초에 한 번 씩 스크롤 될지 설정",
    },
    datas: { defaultValue: datas, description: "데이터 배열" },
    row: { defaultValue: row, description: "각 행의 element" },
    maxHeight: { defaultValue: 240, description: "컴포넌트의 최대 세로 길이" },
    colNumber: { defaultValue: 1, description: "데이터의 열 개수" },
  },
} as ComponentMeta<typeof ReactAutoScroll>;

export const Template: ComponentStory<typeof ReactAutoScroll> = (args) => (
  <ReactAutoScroll {...args} />
);

export const Standard = Template.bind({});
Standard.args = {
  second: 1000,
  datas,
  row,
};
