import { useState } from "react";
import { 
  Menu, 
  X, 
  BarChart3, 
  TrendingUp, 
  Users, 
  Settings, 
  Home,
  PieChart,
  Activity,
  Target,
  Calendar,
  Bell
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavigationItem {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
}

const navigationItems: NavigationItem[] = [
  { label: "Dashboard", href: "/", icon: Home },
  { label: "Analytics", href: "/analytics", icon: BarChart3 },
  { label: "Performance", href: "/performance", icon: TrendingUp },
  { label: "Audience", href: "/audience", icon: Users },
  { label: "Reports", href: "/reports", icon: PieChart },
  { label: "Campaigns", href: "/campaigns", icon: Target },
  { label: "Real-time", href: "/realtime", icon: Activity, badge: "Live" },
  { label: "Schedule", href: "/schedule", icon: Calendar },
  { label: "Settings", href: "/settings", icon: Settings },
];

interface DashboardLayoutProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
}

export function DashboardLayout({ children, title, subtitle }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-gray-900/50 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex flex-col bg-card border-r border-border shadow-lg transition-all duration-300 ease-in-out",
          sidebarOpen ? "translate-x-0" : "-translate-x-full",
          sidebarCollapsed ? "lg:w-16" : "lg:w-64",
          "lg:translate-x-0 w-64"
        )}
      >
        {/* Sidebar Header */}
        <header className="flex items-center justify-between p-4 border-b border-border bg-card">
          {!sidebarCollapsed && (
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <h1 className="text-lg font-semibold text-card-foreground">ADmyBRAND</h1>
                <p className="text-xs text-muted-foreground">Insights</p>
              </div>
            </div>
          )}
          
          {/* Desktop collapse button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="hidden lg:flex ml-auto"
          >
            <Menu className="w-4 h-4" />
          </Button>

          {/* Mobile close button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden ml-auto"
          >
            <X className="w-4 h-4" />
          </Button>
        </header>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200",
                  "hover:bg-secondary hover:text-secondary-foreground",
                  "text-muted-foreground hover:text-foreground",
                  "group relative",
                  window.location.pathname === item.href && "bg-primary text-primary-foreground hover:bg-primary/90"
                )}
              >
                <Icon className="w-5 h-5 shrink-0" />
                {!sidebarCollapsed && (
                  <>
                    <span className="flex-1">{item.label}</span>
                    {item.badge && (
                      <span className="px-2 py-0.5 text-xs font-medium bg-accent text-accent-foreground rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </>
                )}
                
                {/* Tooltip for collapsed state */}
                {sidebarCollapsed && (
                  <div className="absolute left-full ml-2 px-3 py-1.5 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50">
                    <span className="text-sm font-medium">{item.label}</span>
                    {item.badge && (
                      <span className="ml-2 px-2 py-0.5 text-xs font-medium bg-accent text-accent-foreground rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </div>
                )}
              </a>
            );
          })}
        </nav>

        {/* Sidebar Footer */}
        <footer className="p-4 border-t border-border">
          {!sidebarCollapsed ? (
            <div className="flex items-center space-x-3 p-3 rounded-lg bg-secondary">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-primary-foreground">JD</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-secondary-foreground truncate">John Doe</p>
                <p className="text-xs text-muted-foreground truncate">john@example.com</p>
              </div>
            </div>
          ) : (
            <div className="flex justify-center">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-primary-foreground">JD</span>
              </div>
            </div>
          )}
        </footer>
      </aside>

      {/* Main Content */}
      <div className={cn(
        "transition-all duration-300 ease-in-out",
        sidebarCollapsed ? "lg:ml-16" : "lg:ml-64"
      )}>
        {/* Top Header */}
        <header className="sticky top-0 z-30 bg-background/80 backdrop-blur-sm border-b border-border">
          <div className="flex items-center justify-between px-4 lg:px-6 h-16">
            <div className="flex items-center space-x-4">
              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden"
              >
                <Menu className="w-5 h-5" />
              </Button>

              {/* Page title */}
              <div className="flex flex-col">
                {title && (
                  <h1 className="text-xl font-semibold text-foreground">{title}</h1>
                )}
                {subtitle && (
                  <p className="text-sm text-muted-foreground">{subtitle}</p>
                )}
              </div>
            </div>

            {/* Header actions */}
            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-destructive rounded-full flex items-center justify-center">
                  <span className="w-1.5 h-1.5 bg-destructive-foreground rounded-full"></span>
                </span>
              </Button>
              
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-primary-foreground">JD</span>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-4 lg:p-6">
          <div className="animate-fade-in">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}