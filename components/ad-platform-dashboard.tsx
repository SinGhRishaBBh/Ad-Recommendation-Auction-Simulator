"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MetricsOverview } from "@/components/metrics-overview"
import { AuctionChart } from "@/components/auction-chart"
import { AdvertiserTable } from "@/components/advertiser-table"
import { SimulationControls } from "@/components/simulation-controls"
import { CTRModelStats } from "@/components/ctr-model-stats"
import { BarChart3, TrendingUp, DollarSign, MousePointer } from "lucide-react"

export function AdPlatformDashboard() {
  const [simulationData, setSimulationData] = useState({
    totalAuctions: 150000,
    totalClicks: 4250,
    totalRevenue: 87340.25,
    avgCTR: 0.0283,
    advertisers: 400,
    avgBid: 0.58,
  })

  const handleSimulationUpdate = (newData: any) => {
    setSimulationData(newData)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-foreground">Ad Platform Analytics</h1>
              <p className="text-sm text-muted-foreground mt-1">Real-time auction & CTR prediction system</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm text-muted-foreground">Live System</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-6">
        <div className="grid gap-6">
          {/* KPI Cards */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-card border-border">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-card-foreground">Total Auctions</CardTitle>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-card-foreground">
                  {simulationData.totalAuctions.toLocaleString()}
                </div>
                <p className="text-xs text-muted-foreground mt-1">{simulationData.advertisers} active advertisers</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-card-foreground">Total Clicks</CardTitle>
                <MousePointer className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-card-foreground">
                  {simulationData.totalClicks.toLocaleString()}
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  {(simulationData.avgCTR * 100).toFixed(2)}% avg CTR
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-card-foreground">Total Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-card-foreground">
                  ${simulationData.totalRevenue.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  ${simulationData.avgBid.toFixed(3)} avg cost per click
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-card-foreground">Model Performance</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-card-foreground">0.8247</div>
                <p className="text-xs text-muted-foreground mt-1">Validation AUC score</p>
              </CardContent>
            </Card>
          </div>

          {/* Main Dashboard Tabs */}
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList className="bg-card border border-border">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="simulation">Simulation Controls</TabsTrigger>
              <TabsTrigger value="model">CTR Model</TabsTrigger>
              <TabsTrigger value="advertisers">Advertisers</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 lg:grid-cols-2">
                <AuctionChart />
                <MetricsOverview />
              </div>
            </TabsContent>

            {/* Simulation Controls Tab */}
            <TabsContent value="simulation" className="space-y-4">
              <SimulationControls onUpdate={handleSimulationUpdate} />
            </TabsContent>

            {/* CTR Model Tab */}
            <TabsContent value="model" className="space-y-4">
              <CTRModelStats />
            </TabsContent>

            {/* Advertisers Tab */}
            <TabsContent value="advertisers" className="space-y-4">
              <AdvertiserTable />
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
