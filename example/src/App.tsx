import React, { useState } from "react";
import { ExampleNotVirtual } from "./ExampleNotVirtual";
import { ExampleVirtual } from "./ExampleVirtual";

export function App() {
  const [virtualized, setVirtualized] = useState(false);

  return (
    <div className="app">
      <div>
        <label>
          <input
            type="checkbox"
            checked={virtualized}
            onChange={() => setVirtualized(!virtualized)}
          />{" "}
          Is virtualized?
        </label>
      </div>
      <div className="example">
        {virtualized ? <ExampleVirtual /> : <ExampleNotVirtual />}
      </div>
    </div>
  );
}
