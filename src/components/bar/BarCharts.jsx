import "./bar.scss";
import React from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Developer", users: 200 },
  { name: "Staff", users: 150 },
  { name: "Cleaner", users: 100 },
  { name: "Designer", users: 50 },
  { name: "Backend Dev", users: 500 },
];
export default function BarCharts() {
  return (
    <div style={{ width: "100%", height: 400 }} className="bar">
      <span>Female to Male ratio</span>
      <ResponsiveContainer>
        <BarChart
          width={500}
          height={200}
          data={data}
          margin={{
            top: 5,
            right: 70,
            left: 80,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="users" fill="#8884d8" background={{ fill: "#eee" }} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
