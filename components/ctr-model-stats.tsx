"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, LabelList } from "recharts"

const featureImportance = [
  { feature: "C1", importance: 0.142 },
  { feature: "C14", importance: 0.128 },
  { feature: "C21", importance: 0.095 },
  { feature: "I1", importance: 0.087 },
  { feature: "C20", importance: 0.072 },
  { feature: "I9", importance: 0.068 },
  { feature: "C15", importance: 0.055 },
  { feature: "C9", importance: 0.048 },
]

const performanceMetrics = [
  { metric: "Training AUC", value: 0.8521 },
  { metric: "Validation AUC", value: 0.8247 },
  { metric: "Test AUC", value: 0.8193 },
  { metric: "Precision", value: 0.7854 },
  { metric: "Recall", value: 0.7623 },
  { metric: "F1 Score", value: 0.7737 },
]

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-3">
        <p className="text-sm font-semibold text-gray-900">{payload[0].payload.feature}</p>
        <p className="text-xs text-gray-700">
          <span className="font-semibold">Importance:</span> {(payload[0].value * 100).toFixed(2)}%
        </p>
      </div>
    )
  }
  return null
}

export function CTRModelStats() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <Card className="bg-white border-gray-200">
        <CardHeader>
          <CardTitle className="text-gray-900">Feature Importance</CardTitle>
          <CardDescription className="text-gray-600">Top 8 features contributing to CTR predictions</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={featureImportance} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" horizontal={true} vertical={false} />
              <XAxis
                type="number"
                stroke="#6b7280"
                tick={{ fill: "#374151", fontSize: 11 }}
                tickLine={{ stroke: "#9ca3af" }}
                tickFormatter={(value) => `${(value * 100).toFixed(0)}%`}
              />
              <YAxis
                dataKey="feature"
                type="category"
                stroke="#6b7280"
                tick={{ fill: "#374151", fontSize: 12 }}
                tickLine={{ stroke: "#9ca3af" }}
                width={60}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="importance" radius={[0, 8, 8, 0]}>
                {featureImportance.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={`hsl(${220 - index * 15}, 70%, 55%)`} />
                ))}
                <LabelList
                  dataKey="importance"
                  position="right"
                  formatter={(value: number) => `${(value * 100).toFixed(1)}%`}
                  style={{ fill: "#374151", fontSize: "11px", fontWeight: 600 }}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="bg-white border-gray-200">
        <CardHeader>
          <CardTitle className="text-gray-900">Model Performance</CardTitle>
          <CardDescription className="text-gray-600">Classification metrics on test set</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {performanceMetrics.map((item, idx) => (
              <div key={item.metric} className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">{item.metric}</span>
                <div className="flex items-center gap-3">
                  <div className="w-32 h-3 bg-gray-100 rounded-full overflow-hidden border border-gray-200">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{
                        width: `${item.value * 100}%`,
                        backgroundColor: `hsl(${140 + idx * 10}, 65%, 50%)`,
                      }}
                    />
                  </div>
                  <span className="text-sm font-bold text-gray-900 w-14 text-right">{item.value.toFixed(4)}</span>
                </div>
              </div>
            ))}

            <div className="mt-6 p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg border border-blue-200">
              <h4 className="text-sm font-bold text-gray-900 mb-3">Training Configuration</h4>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-gray-600 font-medium">Dataset:</span>
                  <p className="text-gray-900 font-semibold">Criteo (10M rows)</p>
                </div>
                <div>
                  <span className="text-gray-600 font-medium">Algorithm:</span>
                  <p className="text-gray-900 font-semibold">LightGBM</p>
                </div>
                <div>
                  <span className="text-gray-600 font-medium">Learning Rate:</span>
                  <p className="text-gray-900 font-semibold">0.05</p>
                </div>
                <div>
                  <span className="text-gray-600 font-medium">Max Depth:</span>
                  <p className="text-gray-900 font-semibold">7</p>
                </div>
                <div>
                  <span className="text-gray-600 font-medium">Estimators:</span>
                  <p className="text-gray-900 font-semibold">200</p>
                </div>
                <div>
                  <span className="text-gray-600 font-medium">Encoding:</span>
                  <p className="text-gray-900 font-semibold">Target</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
