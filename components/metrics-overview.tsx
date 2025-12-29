"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"

const revenueData = [
  { hour: "00:00", revenue: 3200, clicks: 125 },
  { hour: "02:00", revenue: 2100, clicks: 85 },
  { hour: "04:00", revenue: 1800, clicks: 72 },
  { hour: "06:00", revenue: 4500, clicks: 168 },
  { hour: "08:00", revenue: 7200, clicks: 285 },
  { hour: "10:00", revenue: 8900, clicks: 342 },
  { hour: "12:00", revenue: 9800, clicks: 378 },
  { hour: "14:00", revenue: 8500, clicks: 320 },
  { hour: "16:00", revenue: 7800, clicks: 298 },
  { hour: "18:00", revenue: 9200, clicks: 355 },
  { hour: "20:00", revenue: 8100, clicks: 310 },
  { hour: "22:00", revenue: 5600, clicks: 215 },
]

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-3">
        <p className="text-sm font-semibold text-gray-900 mb-2">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-xs text-gray-700">
            <span style={{ color: entry.color }} className="font-semibold">
              {entry.name}:
            </span>{" "}
            {entry.name === "Revenue" ? `$${entry.value.toLocaleString()}` : entry.value}
          </p>
        ))}
      </div>
    )
  }
  return null
}

export function MetricsOverview() {
  return (
    <Card className="bg-white border-gray-200">
      <CardHeader>
        <CardTitle className="text-gray-900">Revenue & Clicks Over Time</CardTitle>
        <CardDescription className="text-gray-600">Last 24 hours performance trends</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <AreaChart data={revenueData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.05} />
              </linearGradient>
              <linearGradient id="colorClicks" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#06b6d4" stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis
              dataKey="hour"
              stroke="#6b7280"
              tick={{ fill: "#374151", fontSize: 11 }}
              tickLine={{ stroke: "#9ca3af" }}
            />
            <YAxis
              yAxisId="left"
              stroke="#6b7280"
              tick={{ fill: "#374151", fontSize: 11 }}
              tickLine={{ stroke: "#9ca3af" }}
              label={{ value: "Revenue ($)", angle: -90, position: "insideLeft", fill: "#374151" }}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              stroke="#6b7280"
              tick={{ fill: "#374151", fontSize: 11 }}
              tickLine={{ stroke: "#9ca3af" }}
              label={{ value: "Clicks", angle: 90, position: "insideRight", fill: "#374151" }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend wrapperStyle={{ paddingTop: "10px" }} />
            <Area
              yAxisId="left"
              type="monotone"
              dataKey="revenue"
              stroke="#8b5cf6"
              fillOpacity={1}
              fill="url(#colorRevenue)"
              strokeWidth={2}
              name="Revenue"
            />
            <Area
              yAxisId="right"
              type="monotone"
              dataKey="clicks"
              stroke="#06b6d4"
              fillOpacity={1}
              fill="url(#colorClicks)"
              strokeWidth={2}
              name="Clicks"
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
