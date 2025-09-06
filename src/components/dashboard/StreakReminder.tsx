import { DashboardCard } from "./DashboardCard";
import { Button } from "@/components/ui/button";
import { Flame, Target, Trophy } from "lucide-react";

export const StreakReminder = () => {
  const currentStreak = 7;
  const maxStreak = 21;
  const nextMilestone = 10;

  return (
    <DashboardCard title="🔥 Streak Reminder" variant="mental" className="relative overflow-hidden">
      <div className="space-y-4">
        <div className="text-center">
          <div className="text-4xl font-bold gradient-text mb-2">{currentStreak} Days</div>
          <p className="text-muted-foreground">Keep your momentum going!</p>
        </div>

        <div className="flex items-center justify-center space-x-6">
          <div className="text-center">
            <Flame className="w-6 h-6 mx-auto mb-1 text-orange-400" />
            <div className="text-sm font-medium">Current</div>
            <div className="text-lg font-bold text-orange-400">{currentStreak}</div>
          </div>
          
          <div className="text-center">
            <Target className="w-6 h-6 mx-auto mb-1 text-blue-400" />
            <div className="text-sm font-medium">Next Goal</div>
            <div className="text-lg font-bold text-blue-400">{nextMilestone}</div>
          </div>
          
          <div className="text-center">
            <Trophy className="w-6 h-6 mx-auto mb-1 text-yellow-400" />
            <div className="text-sm font-medium">Best</div>
            <div className="text-lg font-bold text-yellow-400">{maxStreak}</div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Progress to next milestone</span>
            <span>{currentStreak}/{nextMilestone}</span>
          </div>
          <div className="w-full bg-muted/30 rounded-full h-2">
            <div 
              className="bg-gradient-primary h-2 rounded-full transition-all duration-1000"
              style={{ width: `${(currentStreak / nextMilestone) * 100}%` }}
            />
          </div>
        </div>

        <Button className="w-full bg-gradient-primary hover:opacity-90">
          Continue Today's Session
        </Button>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-primary opacity-10 rounded-full blur-xl animate-pulse-glow" />
    </DashboardCard>
  );
};