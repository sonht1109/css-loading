import React from "react";
import * as scale from "d3-scale";
import data from "./data";
import * as shape from "d3-shape";

const HEIGHT = 300;
// const CURSOR_SIZE = 16
// const CURSOR_BORDER_WIDTH = 2
// const TEXTINPUT_HEIGHT = 40
// const TEXTINPUT_WIDTH = 100
const width = 1000;

const scaleX = scale
  .scaleTime()
  .domain([data[0].x, data[data.length - 1].x])
  .range([0, width]);

const scaleY = scale.scaleLinear().domain([0, 100]).range([HEIGHT, 0]);

const line = shape
  .line()
  .x((d) => scaleX(d.x))
  .y((d) => scaleY(d.y))
  .curve(shape.curveNatural)(data);

export default function Chart() {
  return (
    <svg width={width} height={HEIGHT}>
      <path d={line} stroke="#367be2" fill="transparent" strokeWidth="4" />
    </svg>
  );
}
