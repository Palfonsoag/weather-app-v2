import React from "react";
import PropTypes from "prop-types";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const marginValues = { top: 20, bottom: 20, right: 5, left: 5 };

const ForecastChart = ({ data }) => {
  return (
    <ResponsiveContainer height={250} width={"95%"}>
      <LineChart margin={marginValues} data={data}>
        <XAxis dataKey="dayHour" />
        <YAxis />
        <CartesianGrid />
        <Tooltip />
        <Legend />
        <Line type="monotone" stroke="#FF0000" dataKey="min" />
        <Line type="monotone" stroke="#0000FF" dataKey="max" />
      </LineChart>
    </ResponsiveContainer>
  );
};

ForecastChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      dayHour: PropTypes.string.isRequired,
      min: PropTypes.number.isRequired,
      max: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ForecastChart;
