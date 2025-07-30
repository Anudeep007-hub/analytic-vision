import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Users, Target, Eye, MousePointer } from "lucide-react";
import { KeyMetricCard } from "@/components/KeyMetricCard";
import { DataTable } from "@/components/DataTable";
import { RevenueLineChart } from "@/components/RevenueLineChart";
import { ConversionsBarChart } from "@/components/ConversionsBarChart";
import { UsersPieChart } from "@/components/UsersPieChart";

const Index = () => {
  return (
    <DashboardLayout
      title="Dashboard Overview"
      subtitle="Welcome back! Here's what's happening with your brand today."
    >
      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
        <KeyMetricCard
          title="Total Reach"
          value="2.4M"
          change="+12.5%"
          icon={Eye}
        />
        
        <KeyMetricCard
          title="Engagement Rate"
          value="4.8%"
          change="+0.8%"
          icon={MousePointer}
        />
        
        <KeyMetricCard
          title="New Followers"
          value="+1,248"
          change="-2.1%"
          icon={Users}
        />
        
        <KeyMetricCard
          title="Conversion Rate"
          value="3.2%"
          change="+0.4%"
          icon={Target}
        />
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
        <div className="xl:col-span-2">
          <RevenueLineChart />
        </div>
        <div>
          <UsersPieChart />
        </div>
        <div className="lg:col-span-2 xl:col-span-3">
          <ConversionsBarChart />
        </div>
      </div>

      {/* Data Table */}
      <div className="mb-8">
        <DataTable />
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <Card className="dashboard-card">
            <CardHeader>
              <CardTitle className="text-h4">Performance Analytics</CardTitle>
              <CardDescription>Your content performance over the last 30 days</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center bg-muted/30 rounded-lg">
                <div className="text-center">
                  <div className="text-chart-1 mb-2">📊</div>
                  <p className="text-muted-foreground">Additional chart visualization area</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="dashboard-card">
            <CardHeader>
              <CardTitle className="text-h4">Active Campaigns</CardTitle>
              <CardDescription>Currently running marketing campaigns</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                <div>
                  <p className="font-medium text-secondary-foreground">Summer Sale 2024</p>
                  <p className="text-sm text-muted-foreground">Social Media Campaign</p>
                </div>
                <Badge variant="secondary" className="bg-success text-success-foreground">Active</Badge>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                <div>
                  <p className="font-medium text-secondary-foreground">Brand Awareness</p>
                  <p className="text-sm text-muted-foreground">Video Campaign</p>
                </div>
                <Badge variant="secondary" className="bg-warning text-warning-foreground">Paused</Badge>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                <div>
                  <p className="font-medium text-secondary-foreground">Product Launch</p>
                  <p className="text-sm text-muted-foreground">Multi-channel</p>
                </div>
                <Badge variant="secondary" className="bg-chart-4 text-white">Scheduled</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Recent Activity */}
      <Card className="dashboard-card">
        <CardHeader>
          <CardTitle className="text-h4">Recent Activity</CardTitle>
          <CardDescription>Latest updates and notifications from your campaigns</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start space-x-3 p-3 hover:bg-secondary rounded-lg transition-colors">
              <div className="w-2 h-2 bg-chart-1 rounded-full mt-2 shrink-0"></div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground">New engagement spike detected</p>
                <p className="text-xs text-muted-foreground">Your latest post is performing 40% above average</p>
                <p className="text-xs text-muted-foreground mt-1">2 minutes ago</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 p-3 hover:bg-secondary rounded-lg transition-colors">
              <div className="w-2 h-2 bg-chart-3 rounded-full mt-2 shrink-0"></div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground">Campaign budget threshold reached</p>
                <p className="text-xs text-muted-foreground">Summer Sale 2024 has used 80% of allocated budget</p>
                <p className="text-xs text-muted-foreground mt-1">15 minutes ago</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 p-3 hover:bg-secondary rounded-lg transition-colors">
              <div className="w-2 h-2 bg-chart-2 rounded-full mt-2 shrink-0"></div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground">Weekly report is ready</p>
                <p className="text-xs text-muted-foreground">Your performance summary for the week ending today</p>
                <p className="text-xs text-muted-foreground mt-1">1 hour ago</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

export default Index;