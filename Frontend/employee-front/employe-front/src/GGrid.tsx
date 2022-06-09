import * as React from "react";
import { render } from "react-dom";
var ReactGridLayout = require("react-grid-layout");

var JSONEmpl = [
  {
    EmpId: "1",
    ProjectId: "1",
    DateFrom: "2019-7-4",
    DateTo: "2020-8-14",
    DaysWorked: 407,
  },
  {
    EmpId: "1",
    ProjectId: "2",
    DateFrom: "2019-12-25",
    DateTo: "2020-12-28",
    DaysWorked: 369,
  },
  {
    EmpId: "1",
    ProjectId: "3",
    DateFrom: "2018-10-12",
    DateTo: null,
    DaysWorked: 1335,
  },
];

class Orders extends React.Component<any, any> {
  render() {
    // layout is an array of objects, see the demo for more complete usage
    var layout = [
      { i: "a", x: 0, y: 0, w: 1, h: 2, static: true },
      { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
      { i: "c", x: 4, y: 0, w: 1, h: 2 },
    ];
    return (
      <ReactGridLayout
        className="layout"
        layout={layout}
        cols={JSONEmpl.length}
        rowHeight={30}
        width={1200}
      >
        {/*<div key={JSONEmpl[0].EmpId}>{JSONEmpl[0].EmpId}</div>*/}
        <div key={JSONEmpl[0].ProjectId}>{JSONEmpl[0].EmpId}</div>
      </ReactGridLayout>
    );
  }
  componentDidMount() {}
}
export default Orders;
