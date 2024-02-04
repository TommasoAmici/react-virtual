import React from "react";
import { data } from "./data";

export function ExampleNotVirtual() {
  return (
    <>
      <h1>Non-virtualized list</h1>

      <ul className="container">
        {data.map((d) => (
          <li className="item" key={d.id}>
            <div>
              <img src={`https://picsum.photos/id/${d.id % 200}/20/40`} />
              <span>{d.id}</span>
            </div>
            <span>{d.id}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
