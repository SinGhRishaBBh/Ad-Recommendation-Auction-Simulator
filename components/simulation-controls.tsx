"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Play, RotateCcw } from "lucide-react"

interface SimulationControlsProps {
  onUpdate: (data: any) => void
}

export function SimulationControls({ onUpdate }: SimulationControlsProps) {
  const [numAdvertisers, setNumAdvertisers] = useState(400)
  const [numAuctions, setNumAuctions] = useState(150000)
  const [avgBid, setAvgBid] = useState(0.58)
  const [avgQuality, setAvgQuality] = useState(75)
  const [isRunning, setIsRunning] = useState(false)

  const handleRunSimulation = () => {
    setIsRunning(true)

    // Simulate running auction
    setTimeout(() => {
      const estimatedClicks = Math.floor(numAuctions * 0.0283)
      const estimatedRevenue = estimatedClicks * avgBid

      onUpdate({
        totalAuctions: numAuctions,
        totalClicks: estimatedClicks,
        totalRevenue: estimatedRevenue,
        avgCTR: 0.0283,
        advertisers: numAdvertisers,
        avgBid: avgBid,
      })

      setIsRunning(false)
    }, 2000)
  }

  const handleReset = () => {
    setNumAdvertisers(400)
    setNumAuctions(150000)
    setAvgBid(0.58)
    setAvgQuality(75)
  }

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-card-foreground">Simulation Parameters</CardTitle>
          <CardDescription className="text-muted-foreground">Adjust auction and advertiser settings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="advertisers" className="text-card-foreground">
              Number of Advertisers: {numAdvertisers}
            </Label>
            <Slider
              id="advertisers"
              min={50}
              max={1000}
              step={50}
              value={[numAdvertisers]}
              onValueChange={(value) => setNumAdvertisers(value[0])}
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="auctions" className="text-card-foreground">
              Number of Auctions
            </Label>
            <Input
              id="auctions"
              type="number"
              value={numAuctions}
              onChange={(e) => setNumAuctions(Number.parseInt(e.target.value) || 0)}
              className="bg-secondary border-border text-card-foreground"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="bid" className="text-card-foreground">
              Average Bid ($)
            </Label>
            <Input
              id="bid"
              type="number"
              step="0.01"
              value={avgBid}
              onChange={(e) => setAvgBid(Number.parseFloat(e.target.value) || 0)}
              className="bg-secondary border-border text-card-foreground"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="quality" className="text-card-foreground">
              Average Quality Score: {avgQuality}
            </Label>
            <Slider
              id="quality"
              min={1}
              max={100}
              step={1}
              value={[avgQuality]}
              onValueChange={(value) => setAvgQuality(value[0])}
              className="w-full"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              onClick={handleRunSimulation}
              disabled={isRunning}
              className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Play className="mr-2 h-4 w-4" />
              {isRunning ? "Running..." : "Run Simulation"}
            </Button>
            <Button
              onClick={handleReset}
              variant="outline"
              className="border-border text-card-foreground hover:bg-secondary bg-transparent"
            >
              <RotateCcw className="mr-2 h-4 w-4" />
              Reset
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-card-foreground">Auction Mechanism</CardTitle>
          <CardDescription className="text-muted-foreground">Second-price auction with CTR prediction</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="p-4 bg-secondary rounded-lg border border-border">
              <h4 className="text-sm font-semibold text-card-foreground mb-2">Ad Score Calculation</h4>
              <code className="text-xs text-muted-foreground font-mono">
                score = predicted_CTR × bid_value × quality_score
              </code>
            </div>

            <div className="p-4 bg-secondary rounded-lg border border-border">
              <h4 className="text-sm font-semibold text-card-foreground mb-2">Payment Formula</h4>
              <code className="text-xs text-muted-foreground font-mono">
                payment = (second_best_score / winner_CTR) + $0.01
              </code>
            </div>

            <div className="p-4 bg-secondary rounded-lg border border-border">
              <h4 className="text-sm font-semibold text-card-foreground mb-2">Model Details</h4>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• Algorithm: LightGBM with 200 estimators</li>
                <li>• Features: 26 categorical + numerical features</li>
                <li>• Training: 10M rows from Criteo dataset</li>
                <li>• Validation AUC: 0.8247</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
