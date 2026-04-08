import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

export default function RevenueChart({ data }) {
  if (!data || data.length === 0) return null; // أمان لو الداتا فاضية

  return (
    <div className="chart-container">
      <h2>RevenueChart</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line dataKey="total" stroke="#22c55e" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}