"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Download } from "lucide-react";
import { attendanceData, classes } from "@/lib/data";

export default function ReportPage() {
  return (
    <div className="min-h-screen bg-background p-4">
      <header className="mb-6 flex items-center justify-between">
        <h1 className="font-headline text-2xl font-bold">Reports & Analytics</h1>
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Download PDF
        </Button>
      </header>

      <main className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Monthly Attendance Overview</CardTitle>
            <CardDescription>Overall attendance percentage for the last 6 months.</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={attendanceData}>
                <XAxis
                  dataKey="name"
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `${value}%`}
                />
                <Tooltip
                    contentStyle={{
                        backgroundColor: 'hsl(var(--background))',
                        borderColor: 'hsl(var(--border))'
                    }}
                />
                <Bar dataKey="attendance" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle>Per-Class Statistics</CardTitle>
                <CardDescription>A summary of attendance for each class.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {classes.map(c => (
                        <div key={c.id} className="flex items-center justify-between rounded-lg border p-3">
                            <div>
                                <p className="font-semibold">{c.name}</p>
                                <p className="text-sm text-muted-foreground">{c.studentCount} Students</p>
                            </div>
                            <div className="text-right">
                                <p className="font-bold text-lg text-primary">{(90 + Math.random() * 10).toFixed(1)}%</p>
                                <p className="text-xs text-muted-foreground">Avg. Attendance</p>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>

      </main>
    </div>
  );
}
