"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"

const auctionData = [
  { batch: "B1", ctr: 0.028, bid: 0.55, score: 0.0154 },
  { batch: "B2", ctr: 0.031, bid: 0.58, score: 0.018 },
  { batch: "B3", ctr: 0.026, bid: 0.62, score: 0.0161 },
  { batch: "B4", ctr: 0.033, bid: 0.54, score: 0.0178 },
  { batch: "B5", ctr: 0.029, bid: 0.6, score: 0.0174 },
  { batch: "B6", ctr: 0.035, bid: 0.57, score: 0.02 },
  { batch: "B7", ctr: 0.027, bid: 0.59, score: 0.0159 },
  { batch: "B8", ctr: 0.032, bid: 0.61, score: 0.0195 },
]

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-3">
        <p className="text-sm font-semibold text-gray-900 mb-2">{payload[0].payload.batch}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-xs text-gray-700">
            <span style={{ color: entry.color }} className="font-semibold">
              {entry.name}:
            </span>{" "}
            {entry.value.toFixed(4)}
          </p>
        ))}
      </div>
    )
  }
  return null
}

export function AuctionChart() {
  return (
    <Card className="bg-white border-gray-200">
      <CardHeader>
        <CardTitle className="text-gray-900">Auction Performance Metrics</CardTitle>
        <CardDescription className="text-gray-600">
          CTR predictions, bid values, and final scores across auction batches
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={auctionData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis
              dataKey="batch"
              stroke="#6b7280"
              tick={{ fill: "#374151", fontSize: 12 }}
              tickLine={{ stroke: "#9ca3af" }}
            />
            <YAxis stroke="#6b7280" tick={{ fill: "#374151", fontSize: 12 }} tickLine={{ stroke: "#9ca3af" }} />
            <Tooltip content={<CustomTooltip />} />
            <Legend wrapperStyle={{ paddingTop: "20px" }} iconType="line" />
            <Line
              type="monotone"
              dataKey="ctr"
              stroke="#3b82f6"
              strokeWidth={3}
              name="CTR"
              dot={{ fill: "#3b82f6", r: 4 }}
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="bid"
              stroke="#10b981"
              strokeWidth={3}
              name="Bid ($)"
              dot={{ fill: "#10b981", r: 4 }}
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="score"
              stroke="#f59e0b"
              strokeWidth={3}
              name="Score"
              dot={{ fill: "#f59e0b", r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
