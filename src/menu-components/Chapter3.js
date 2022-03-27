import React from "react";
import "../content.css";
import { VictoryChart } from "victory";
import { VictoryGroup } from "victory";
import { VictoryBar } from "victory";
import { VictoryTheme } from "victory";

export default function Chapter3() {
  return (
    <div className="content">
      <h2>Вариант 3</h2>
      <VictoryChart theme={VictoryTheme.material} domain={{ y: [0.5, 5.5] }}>
        <VictoryGroup
          horizontal
          offset={10}
          style={{ data: { width: 10 } }}
          colorScale={["brown", "tomato", "gold"]}
        >
          <VictoryBar
            data={[
              { x: "Потребление ээ", y: 1 },
              { x: "Майнинг", y: 2 },
              { x: "Что-то ещё", y: 3 },
            ]}
          />
          <VictoryBar
            data={[
              { x: "Потребление ээ", y: 1 },
              { x: "Майнинг", y: 2 },
              { x: "Что-то ещё", y: 3 },
            ]}
          />
          <VictoryBar
            data={[
              { x: "Потребление ээ", y: 1 },
              { x: "Майнинг", y: 2 },
              { x: "Что-то ещё", y: 3 },
            ]}
          />
        </VictoryGroup>
      </VictoryChart>
    </div>
  );
}
