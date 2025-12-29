"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search } from "lucide-react"

const advertisersData = [
  {
    id: "ADV-001",
    name: "TechCorp Inc",
    wins: 4280,
    clicks: 158,
    spend: 2847.32,
    budget: 5000,
    ctr: 0.0369,
    status: "active",
  },
  {
    id: "ADV-002",
    name: "MarketPro LLC",
    wins: 3920,
    clicks: 124,
    spend: 2234.18,
    budget: 4500,
    ctr: 0.0316,
    status: "active",
  },
  {
    id: "ADV-003",
    name: "BrandBoost Co",
    wins: 3650,
    clicks: 142,
    spend: 2556.89,
    budget: 4000,
    ctr: 0.0389,
    status: "active",
  },
  {
    id: "ADV-004",
    name: "DigitalEdge",
    wins: 3210,
    clicks: 98,
    spend: 1769.24,
    budget: 3500,
    ctr: 0.0305,
    status: "active",
  },
  {
    id: "ADV-005",
    name: "AdVenture Media",
    wins: 2980,
    clicks: 115,
    spend: 2074.35,
    budget: 3500,
    ctr: 0.0386,
    status: "active",
  },
  {
    id: "ADV-006",
    name: "ClickMasters",
    wins: 2540,
    clicks: 89,
    spend: 1605.47,
    budget: 3000,
    ctr: 0.035,
    status: "low",
  },
  {
    id: "ADV-007",
    name: "WebReach Pro",
    wins: 2180,
    clicks: 76,
    spend: 1371.28,
    budget: 2500,
    ctr: 0.0349,
    status: "low",
  },
  {
    id: "ADV-008",
    name: "ConvertMax",
    wins: 1920,
    clicks: 62,
    spend: 1118.56,
    budget: 2000,
    ctr: 0.0323,
    status: "low",
  },
]

export function AdvertiserTable() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredAdvertisers = advertisersData.filter(
    (adv) =>
      adv.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      adv.id.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-card-foreground">Advertiser Performance</CardTitle>
            <CardDescription className="text-muted-foreground">
              Detailed metrics for all active advertisers
            </CardDescription>
          </div>
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search advertisers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 bg-secondary border-border text-card-foreground"
            />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border border-border">
          <Table>
            <TableHeader>
              <TableRow className="border-border hover:bg-secondary/50">
                <TableHead className="text-muted-foreground">Advertiser ID</TableHead>
                <TableHead className="text-muted-foreground">Name</TableHead>
                <TableHead className="text-right text-muted-foreground">Wins</TableHead>
                <TableHead className="text-right text-muted-foreground">Clicks</TableHead>
                <TableHead className="text-right text-muted-foreground">CTR</TableHead>
                <TableHead className="text-right text-muted-foreground">Spend</TableHead>
                <TableHead className="text-right text-muted-foreground">Budget</TableHead>
                <TableHead className="text-center text-muted-foreground">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredAdvertisers.map((advertiser) => (
                <TableRow key={advertiser.id} className="border-border hover:bg-secondary/50">
                  <TableCell className="font-mono text-xs text-card-foreground">{advertiser.id}</TableCell>
                  <TableCell className="font-medium text-card-foreground">{advertiser.name}</TableCell>
                  <TableCell className="text-right text-card-foreground">{advertiser.wins.toLocaleString()}</TableCell>
                  <TableCell className="text-right text-card-foreground">{advertiser.clicks}</TableCell>
                  <TableCell className="text-right text-card-foreground">
                    {(advertiser.ctr * 100).toFixed(2)}%
                  </TableCell>
                  <TableCell className="text-right text-card-foreground">${advertiser.spend.toFixed(2)}</TableCell>
                  <TableCell className="text-right text-muted-foreground">${advertiser.budget.toFixed(2)}</TableCell>
                  <TableCell className="text-center">
                    <Badge
                      variant={advertiser.status === "active" ? "default" : "secondary"}
                      className={advertiser.status === "active" ? "bg-accent text-accent-foreground" : ""}
                    >
                      {advertiser.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
