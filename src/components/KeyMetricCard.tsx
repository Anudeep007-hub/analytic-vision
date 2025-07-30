import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface KeyMetricCardProps {
  title: string;
  value: string;
  change: string;
  icon?: LucideIcon;
  isLoading?: boolean;
}

export function KeyMetricCard({ 
  title, 
  value, 
  change, 
  icon: Icon,
  isLoading = false 
}: KeyMetricCardProps) {
  // Determine change color based on first character
  const getChangeColor = (changeValue: string) => {
    if (changeValue.startsWith('+')) {
      return 'text-success';
    } else if (changeValue.startsWith('-')) {
      return 'text-destructive';
    }
    return 'text-muted-foreground';
  };

  if (isLoading) {
    return (
      <Card className="hover-scale transition-all duration-300 hover:shadow-lg">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-5 w-5 rounded" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-8 w-32" />
            <Skeleton className="h-4 w-16" />
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="hover-scale transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 border-border/50 hover:border-border">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
            {title}
          </h3>
          {Icon && (
            <Icon className="h-5 w-5 text-primary/60" />
          )}
        </div>
        
        <div className="space-y-2">
          <div className="text-3xl font-bold text-foreground">
            {value}
          </div>
          
          <div className={cn(
            "text-sm font-medium transition-colors",
            getChangeColor(change)
          )}>
            {change}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default KeyMetricCard;