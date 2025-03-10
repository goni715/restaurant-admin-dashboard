import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, ReferenceDot, ReferenceLine } from "recharts";
import { Card } from "antd";

const data = [
  { month: "Jan", lastMonth: 220, thisMonth: 320 },
  { month: "Feb", lastMonth: 180, thisMonth: 300 },
  { month: "Mar", lastMonth: 200, thisMonth: 290 },
  { month: "Apr", lastMonth: 250, thisMonth: 280 },
  { month: "May", lastMonth: 300, thisMonth: 310 },
  { month: "Jun", lastMonth: 350, thisMonth: 330 },
  { month: "Jul", lastMonth: 380, thisMonth: 360 },
  { month: "Aug", lastMonth: 340, thisMonth: 340 },
  { month: "Sept", lastMonth: 300, thisMonth: 320 },
  { month: "Oct", lastMonth: 270, thisMonth: 300 },
  { month: "Nov", lastMonth: 240, thisMonth: 270 },
  { month: "Dec", lastMonth: 200, thisMonth: 250 },
];

const ReservationChart = () => {
  return (
    <Card className="rounded-xl  p-3 !bg-[#F6F6F6]">
      <h3 className="text-lg font-semibold mb-3">Reservation Growth</h3>
      <ResponsiveContainer height={250}>
        <LineChart data={data}>
          <XAxis dataKey="month" stroke="#999" />
          <YAxis stroke="#999" />
          <Tooltip />
          <Legend verticalAlign="bottom" iconType="circle" />
          <Line type="monotone" dataKey="lastMonth" stroke="#E30613" strokeWidth={3} dot={false} name="Last Month" />
          <Line type="monotone" dataKey="thisMonth" stroke="#111827" strokeWidth={3} dot={false} name="This Month" />
          <ReferenceDot x="Jul" y={380} r={6} fill="#E30613" stroke="white" />
          <ReferenceLine x="Jul" stroke="#E30613" strokeDasharray="3 3" />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default ReservationChart;
