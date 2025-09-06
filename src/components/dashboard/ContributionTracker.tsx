import { DashboardCard } from "./DashboardCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, TrendingUp, Target, Code } from "lucide-react";

export const ContributionTracker = () => {
  // Mock data for contributions
  const platforms = [
    { name: "LeetCode", solved: 245, rating: 1650, color: "bg-orange-500" },
    { name: "CodeChef", solved: 89, rating: 1847, color: "bg-yellow-500" },
    { name: "Codeforces", solved: 156, rating: 1423, color: "bg-blue-500" }
  ];

  const monthlyGoal = 50;
  const currentSolved = 32;

  // Generate contribution graph data (7x7 grid for 7 weeks)
  const generateContributions = () => {
    const contributions = [];
    for (let week = 0; week < 7; week++) {
      const weekContributions = [];
      for (let day = 0; day < 7; day++) {
        const intensity = Math.floor(Math.random() * 4); // 0-3 intensity levels
        weekContributions.push(intensity);
      }
      contributions.push(weekContributions);
    }
    return contributions;
  };

  const contributions = generateContributions();

  const getIntensityClass = (intensity: number) => {
    switch (intensity) {
      case 0: return "bg-muted/30";
      case 1: return "bg-primary/30";
      case 2: return "bg-primary/60";
      case 3: return "bg-primary";
      default: return "bg-muted/30";
    }
  };

  return (
    <DashboardCard title="📊 Coding Contributions" variant="career">
      <div className="space-y-6">
        {/* Platform Stats */}
        <div className="space-y-3">
          {platforms.map((platform) => (
            <div key={platform.name} className="flex items-center justify-between p-3 glass rounded-xl">
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${platform.color}`} />
                <span className="font-medium">{platform.name}</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <div className="text-sm font-bold">{platform.solved}</div>
                  <div className="text-xs text-muted-foreground">solved</div>
                </div>
                <Badge variant="secondary" className="bg-career/10 text-career">
                  {platform.rating}
                </Badge>
              </div>
            </div>
          ))}
        </div>

        {/* Monthly Goal */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Target className="w-4 h-4 text-career" />
              <span className="font-medium">Monthly Goal</span>
            </div>
            <span className="text-sm font-bold">{currentSolved}/{monthlyGoal}</span>
          </div>
          <div className="w-full bg-muted/30 rounded-full h-2">
            <div 
              className="bg-gradient-career h-2 rounded-full transition-all duration-1000"
              style={{ width: `${(currentSolved / monthlyGoal) * 100}%` }}
            />
          </div>
          <div className="flex items-center space-x-1 text-green-400">
            <TrendingUp className="w-3 h-3" />
            <span className="text-xs">+12 this week</span>
          </div>
        </div>

        {/* Contribution Graph */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4" />
            <span className="text-sm font-medium">Daily Contributions</span>
          </div>
          
          <div className="grid grid-cols-7 gap-1">
            {contributions.flat().map((intensity, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-sm ${getIntensityClass(intensity)}`}
                title={`${intensity} contributions`}
              />
            ))}
          </div>
          
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>Less</span>
            <div className="flex space-x-1">
              <div className="w-2 h-2 rounded-sm bg-muted/30" />
              <div className="w-2 h-2 rounded-sm bg-primary/30" />
              <div className="w-2 h-2 rounded-sm bg-primary/60" />
              <div className="w-2 h-2 rounded-sm bg-primary" />
            </div>
            <span>More</span>
          </div>
        </div>

        <Button variant="outline" size="sm" className="w-full border-career/30">
          <Code className="w-4 h-4 mr-2" />
          Update Progress
        </Button>
      </div>
    </DashboardCard>
  );
};