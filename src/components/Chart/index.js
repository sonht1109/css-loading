import React from "react";
import * as scale from "d3-scale";
import data from "./data";
import * as shape from "d3-shape";
import * as d3 from "d3";

const HEIGHT = 200;
const width = 500;

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

const arcGen = d3
  .arc()({
    innerRadius: 70,
    outerRadius: 90,
    startAngle: 0,
    endAngle: 2 * Math.PI
  })

export default function Chart() {
  return (
    <svg width={width} height={HEIGHT} id="chart">
      <path d={line} stroke="#4b9cdb" fill="transparent" strokeWidth="2" />
      {/* <path d={arcGen} /> */}
    </svg>
  );
}
