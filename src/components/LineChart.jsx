import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const productSales = [
  {
    name: "Jan",
    product1: 4000,
    product2: 2400,
  },
  {
    name: "Feb",
    product1: 3000,
    product2: 2210,
  },
  {
    name: "Mar",
    product1: 2000,
    product2: 2290,
  },
  {
    name: "Apr",
    product1: 2780,
    product2: 2000,
  },
  {
    name: "May",
    product1: 1890,
    product2: 2181,
  },
  {
    name: "Jun",
    product1: 2390,
    product2: 2500,
  },
];

const LineChartComponent = () => {
  return (
    <ResponsiveContainer>
      <LineChart
        width={400}
        height={350}
        data={productSales}
        margin={{ right: 30 }}
      >
        <YAxis tick={{ fill: "#fff" }} />
        <XAxis dataKey="name" tick={{ fill: "#fff" }} />
        {/* <CartesianGrid strokeDasharray="5 5" /> */}
        <Tooltip content={<CustomTooltip />} />
        <Legend />

        <Line
          type="monotone"
          dataKey="product1"
          stroke="#2563eb"
          fill="#3b82f6"
          stackId="1"
        />

        <Line
          type="monotone"
          dataKey="product2"
          stroke="#7c3aed"
          fill="#8b5cf6"
          stackId="1"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
        <p className="text-medium text-lg text-white">{label}</p>
        <p className="text-sm text-blue-400">
          Revenue :<span className="ml-2">${payload[0].value}</span>
        </p>
        <p className="text-sm text-indigo-400">
          Profit :<span className="ml-2">${payload[1].value}</span>
        </p>
      </div>
    );
  }
};
export default LineChartComponent;
