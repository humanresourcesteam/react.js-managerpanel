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
  { name: "Developer", users: 20 },
  { name: "Staff", users: 15 },
  { name: "Cleaner", users: 10 },
  { name: "Designer", users: 50 },
  { name: "Backend Dev", users: 50 },
  { name: "UI", users: 10 },
  { name: "UX", users: 12 },
];
export default function BarCharts() {
  return (
    <div style={{ width: "100%", height: 400 }} className="bar">
      <span>Jobs List</span>
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
