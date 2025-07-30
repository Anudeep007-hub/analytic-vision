import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Users, Target, Eye, MousePointer } from "lucide-react";

const Index = () => {
  return (
    <DashboardLayout
      title="Dashboard Overview"
      subtitle="Welcome back! Here's what's happening with your brand today."
    >
      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
        <Card className="dashboard-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Reach</CardTitle>
            <Eye className="h-4 w-4 text-chart-1" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">2.4M</div>
            <div className="flex items-center space-x-1 text-sm">
              <TrendingUp className="h-3 w-3 text-success" />
              <span className="text-success font-medium">+12.5%</span>
              <span className="text-muted-foreground">from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card className="dashboard-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Engagement Rate</CardTitle>
            <MousePointer className="h-4 w-4 text-chart-2" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">4.8%</div>
            <div className="flex items-center space-x-1 text-sm">
              <TrendingUp className="h-3 w-3 text-success" />
              <span className="text-success font-medium">+0.8%</span>
              <span className="text-muted-foreground">from last week</span>
            </div>
          </CardContent>
        </Card>

        <Card className="dashboard-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">New Followers</CardTitle>
            <Users className="h-4 w-4 text-chart-3" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">+1,248</div>
            <div className="flex items-center space-x-1 text-sm">
              <TrendingDown className="h-3 w-3 text-destructive" />
              <span className="text-destructive font-medium">-2.1%</span>
              <span className="text-muted-foreground">from last week</span>
            </div>
          </CardContent>
        </Card>

        <Card className="dashboard-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Conversion Rate</CardTitle>
            <Target className="h-4 w-4 text-chart-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">3.2%</div>
            <div className="flex items-center space-x-1 text-sm">
              <TrendingUp className="h-3 w-3 text-success" />
              <span className="text-success font-medium">+0.4%</span>
              <span className="text-muted-foreground">from last month</span>
            </div>
          </CardContent>
        </Card>
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
              <div className="h-64 flex items-center justify-center bg-gray-50 dark:bg-gray-900 rounded-lg">
                <div className="text-center">
                  <div className="text-chart-1 mb-2">📊</div>
                  <p className="text-muted-foreground">Chart visualization will be implemented here</p>
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
