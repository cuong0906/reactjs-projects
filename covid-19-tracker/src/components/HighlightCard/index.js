import { Grid } from "@material-ui/core";
import React from "react";
import Cards from "./Cards";

export default function HighlightCard({ report }) {
  const data = report && report.length ? report[report.length - 1] : [];
  const summary = [
    {
      title: "Số ca nhiễm",
      count: data.Confirmed,
      type: "confirmed",
    },
    {
      title: "Số ca đã khỏi",
      count: data.Recovered,
      type: "recovered",
    },
    {
      title: "Số ca tử vong",
      count: data.Deaths,
      type: "death",
    },
  ];
  
  return (
    <Grid container spacing={3}>
      {summary.map((item) => (
          <Grid item sm={4} xs={12} key={item.type}>
            <Cards title={item.title} count={item.count} type={item.type} />
          </Grid>
      ))}
    </Grid>
  );
}
