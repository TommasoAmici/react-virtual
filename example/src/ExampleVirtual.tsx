import React from "react";
import { VirtualList } from "react-virtualization";
import { data } from "./data";

function renderItem(d: (typeof data)[0], translateY: number) {
  return (
    <li
      className="item virtual"
      key={d.id}
      style={{ transform: `translateY(${translateY}px)` }}
    >
      <div>
        <img src={`https://picsum.photos/id/${d.id % 200}/20/40`} />
        <span>{d.id}</span>
      </div>
      <span>{d.id}</span>
    </li>
  );
}

export function ExampleVirtual() {
  return (
    <>
      <h1>Virtualized list</h1>
      <VirtualList
        rowHeight={20}
        className="container"
        overscan={20}
        data={data}
        renderItem={renderItem}
      />
    </>
  );
}
