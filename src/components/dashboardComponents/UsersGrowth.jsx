import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { Card } from "antd";

const data = [
  { day: "Monday", activeUsers: 1300, newUsers: 1200 },
  { day: "Tuesday", activeUsers: 1600, newUsers: 1100 },
  { day: "Wednesday", activeUsers: 400, newUsers: 2200 },
  { day: "Thursday", activeUsers: 1500, newUsers: 500 },
  { day: "Friday", activeUsers: 1100, newUsers: 1000 },
  { day: "Saturday", activeUsers: 1400, newUsers: 1200 },
  { day: "Sunday", activeUsers: 1800, newUsers: 900 },
];

const UsersGrowth = () => {
  return (
    <Card className="rounded-xl p-3 !bg-[#F6F6F6]">
      <h3 className="text-lg font-semibold mb-2">Users Growth</h3>
      <ResponsiveContainer height={250}>
        <BarChart data={data} barSize={30}>
          <XAxis dataKey="day" stroke="#999" />
          <YAxis stroke="#999" tickFormatter={(value) => `${value / 1000}k`} />
          <Tooltip />
          <Legend verticalAlign="bottom" iconType="circle" />
          <Bar dataKey="activeUsers" fill="#E30613" name="Active User" barSize={12} />
          <Bar dataKey="newUsers" fill="#111827" name="New User" barSize={12} />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default UsersGrowth;
