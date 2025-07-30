import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from '@/components/ui/chart';
import { Skeleton } from '@/components/ui/skeleton';

const chartData = [
  { ageGroup: '18-24', users: 1250, fill: 'hsl(var(--chart-1))' },
  { ageGroup: '25-34', users: 2340, fill: 'hsl(var(--chart-2))' },
  { ageGroup: '35-44', users: 1890, fill: 'hsl(var(--chart-3))' },
  { ageGroup: '45-54', users: 1420, fill: 'hsl(var(--chart-4))' },
  { ageGroup: '55+', users: 980, fill: 'hsl(var(--chart-5))' },
];

const chartConfig = {
  users: {
    label: 'Users',
  },
  '18-24': {
    label: '18-24',
    color: 'hsl(var(--chart-1))',
  },
  '25-34': {
    label: '25-34',
    color: 'hsl(var(--chart-2))',
  },
  '35-44': {
    label: '35-44',
    color: 'hsl(var(--chart-3))',
  },
  '45-54': {
    label: '45-54',
    color: 'hsl(var(--chart-4))',
  },
  '55+': {
    label: '55+',
    color: 'hsl(var(--chart-5))',
  },
} satisfies ChartConfig;

export function UsersPieChart() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const totalUsers = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.users, 0);
  }, []);

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <Skeleton className="h-6 w-36" />
          <Skeleton className="h-4 w-44" />
        </CardHeader>
        <CardContent className="flex-1 pb-0">
          <div className="flex items-center justify-center">
            <Skeleton className="h-[250px] w-[250px] rounded-full" />
          </div>
          <div className="flex justify-center mt-4 space-x-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} className="h-4 w-16" />
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>User Demographics</CardTitle>
        <CardDescription>Distribution by age group</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={
                  <ChartTooltipContent 
                    formatter={(value, name) => [
                      `${value.toLocaleString()} users (${((value as number / totalUsers) * 100).toFixed(1)}%)`,
                      name
                    ]}
                  />
                }
              />
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                innerRadius={40}
                fill="#8884d8"
                dataKey="users"
                stroke="hsl(var(--background))"
                strokeWidth={2}
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
              <Legend 
                verticalAlign="bottom" 
                height={36}
                formatter={(value) => (
                  <span style={{ color: 'hsl(var(--foreground))' }}>{value}</span>
                )}
              />
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export default UsersPieChart;