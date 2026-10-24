import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

// داده‌های نمونه نمودار خطی
const procedureData = [
  { month: "Apr", visitors: 44 },
  { month: "May", visitors: 42 },
  { month: "Jun", visitors: 57 },
  { month: "Jul", visitors: 56 },
  { month: "Aug", visitors: 78 },
  { month: "Sep", visitors: 64 },
  { month: "Oct", visitors: 88 },
  { month: "Nov", visitors: 78 },
  { month: "Dec", visitors: 98 },
];

export default function StatsCard({
  title,
  value,
  increase,
  isSmall = false,
}) {
  

  if (isSmall) {
    return (
      <section className="min-w-0 rounded-3xl bg-white p-5 shadow-[0_8px_25px_rgba(30,41,59,0.02)] border border-slate-50 flex flex-col justify-center h-[100px]">
        <p className="text-[12px] font-bold text-[#707e94]">
          {title}
        </p>
        <div className="mt-1 flex items-baseline gap-1.5">
          <strong className="text-[18px] font-black leading-none text-[#334d6e]">
            {value}
          </strong>
          <span className="text-[11px] font-bold text-[#09d6a0]">
            +{increase}
          </span>
        </div>
      </section>
    );
  }

  
  return (
    <section className="h-full min-w-0 rounded-3xl bg-white p-5 shadow-[0_8px_25px_rgba(30,41,59,0.02)] border border-slate-50 flex flex-col justify-between">
  
      <div>
        <p className="text-[12px] font-bold text-[#707e94]">
          {title}
        </p>

        <div className="mt-1 flex items-baseline gap-1.5">
          <strong className="text-[18px] font-black leading-none text-[#334d6e]">
            {value}
          </strong>

          <span className="text-[11px] font-bold text-[#09d6a0]">
            +{increase}
          </span>
        </div>
      </div>

      {/* نمودار خطی  */}
      <div className="mt-4 h-[90px] w-full min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={procedureData}
            margin={{
              top: 5,
              right: 5,
              left: -25,
              bottom: 0,
            }}
          >
            <CartesianGrid
              stroke="#f1f3f7"
              strokeDasharray="3 3"
              vertical
              horizontal={false}
            />

            <XAxis
              dataKey="month"
              tick={{ fontSize: 10, fill: "#a3b1cc", fontWeight: 500 }}
              tickLine={false}
              axisLine={false}
              dy={4}
            />

            <YAxis
              domain={[20, 110]}
              ticks={[40, 80]}
              tick={{ fontSize: 10, fill: "#a3b1cc", fontWeight: 500 }}
              tickLine={false}
              axisLine={false}
              width={30}
            />

            <Tooltip
              cursor={false}
              formatter={(amount) => [amount, "Visitors"]}
              contentStyle={{
                border: "none",
                borderRadius: 12,
                fontSize: 11,
                boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
                padding: "6px 10px",
              }}
            />

            <Line
              type="monotone"
              dataKey="visitors"
              stroke="#59bfee"
              strokeWidth={2.5}
              dot={false}
              activeDot={{
                r: 4,
                fill: "#0ea5e9",
                strokeWidth: 0
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
