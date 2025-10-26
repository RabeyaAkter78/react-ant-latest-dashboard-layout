import { BarChart, Bar } from "recharts";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default function Dashboard() {
  const userData = [
    { name: "Jan", users: 2400 },
    { name: "Feb", users: 2210 },
    { name: "Mar", users: 3290 },
    { name: "Apr", users: 2000 },
    { name: "May", users: 2780 },
    { name: "Jun", users: 3500 },
    { name: "Jul", users: 4100 },
    { name: "Aug", users: 4600 },
    { name: "Sep", users: 5200 },
    { name: "Oct", users: 4700 },
    { name: "Nov", users: 4900 },
    { name: "Dec", users: 5300 },
  ];
  const incomeData = [
    { name: "Jan", income: 4000 },
    { name: "Feb", income: 3000 },
    { name: "Mar", income: 5000 },
    { name: "Apr", income: 4780 },
    { name: "May", income: 5890 },
    { name: "Jun", income: 6390 },
    { name: "Jul", income: 7000 },
    { name: "Aug", income: 7200 },
    { name: "Sep", income: 7500 },
    { name: "Oct", income: 6900 },
    { name: "Nov", income: 7100 },
    { name: "Dec", income: 7600 },
  ];

  return (
    <div className="flex justify-between items-center gap-5 ">
      <div className="h-[400px]  w-1/2 bg-black text-white p-6 rounded-xl">
        <h2 className="text-xl font-semibold mb-3 ">Income Statistics</h2>
        <LineChart
          style={{ width: "100%", height: "100%", aspectRatio: 1.618 }}
          responsive
          data={incomeData}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="6 6" />
          <XAxis dataKey="name" />
          <YAxis width="auto" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="income"
            stroke="#bcaa8a"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="uv" stroke="#ffffff" />
        </LineChart>
      </div>
      <div className="h-[400px]  w-1/2 bg-black text-white p-6 rounded-xl">
       <h2 className="text-xl font-semibold mb-3 ">Number of Subscription Users</h2>
        <BarChart
          style={{ width: "100%", height: "90%", aspectRatio: 1.618 }}
          responsive
          data={userData}
        >
          <Bar dataKey="users" fill="#8884d8" />
        </BarChart>
      </div>
    </div>
  );
}
