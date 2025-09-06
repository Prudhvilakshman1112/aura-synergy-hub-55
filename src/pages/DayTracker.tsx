import { Layout } from "@/components/Layout";
import { DashboardCard } from "@/components/dashboard/DashboardCard";
import { ContributionTracker } from "@/components/dashboard/ContributionTracker";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Calendar, 
  Target, 
  Trophy, 
  TrendingUp,
  CheckCircle,
  Clock,
  Flame,
  BarChart3
} from "lucide-react";

const DayTracker = () => {
  // Generate calendar data for current month
  const generateCalendarData = () => {
    const daysInMonth = 30;
    const calendar = [];
    for (let i = 1; i <= daysInMonth; i++) {
      const hasActivity = Math.random() > 0.3;
      const intensity = hasActivity ? Math.floor(Math.random() * 4) + 1 : 0;
      calendar.push({
        day: i,
        hasActivity,
        intensity,
        studyTime: hasActivity ? Math.floor(Math.random() * 8) + 1 : 0
      });
    }
    return calendar;
  };

  const calendarData = generateCalendarData();
  const totalStudyDays = calendarData.filter(day => day.hasActivity).length;
  const currentStreak = 7;

  const getIntensityClass = (intensity: number) => {
    switch (intensity) {
      case 0: return "bg-muted/30 hover:bg-muted/50";
      case 1: return "bg-primary/30 hover:bg-primary/40";
      case 2: return "bg-primary/60 hover:bg-primary/70";
      case 3: return "bg-primary/80 hover:bg-primary/90";
      case 4: return "bg-primary hover:bg-primary/90";
      default: return "bg-muted/30";
    }
  };

  // Goal data
  const goals = [
    { name: "Daily Study", target: 30, current: 23, unit: "days", progress: 77 },
    { name: "LeetCode Problems", target: 50, current: 32, unit: "problems", progress: 64 },
    { name: "Contest Participation", target: 8, current: 5, unit: "contests", progress: 63 },
    { name: "Project Completion", target: 3, current: 2, unit: "projects", progress: 67 }
  ];

  return (
    <Layout>
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <div className="flex items-center justify-center space-x-3">
            <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold gradient-text">Day Tracker</h1>
              <p className="text-muted-foreground">Track your daily progress and maintain consistency</p>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <DashboardCard title="Current Streak" className="text-center">
            <div className="space-y-3">
              <Flame className="w-8 h-8 mx-auto text-orange-400" />
              <div className="text-3xl font-bold gradient-text">{currentStreak}</div>
              <div className="text-sm text-muted-foreground">days strong</div>
            </div>
          </DashboardCard>

          <DashboardCard title="This Month" className="text-center">
            <div className="space-y-3">
              <CheckCircle className="w-8 h-8 mx-auto text-green-400" />
              <div className="text-3xl font-bold text-green-400">{totalStudyDays}</div>
              <div className="text-sm text-muted-foreground">active days</div>
            </div>
          </DashboardCard>

          <DashboardCard title="Average Study" className="text-center">
            <div className="space-y-3">
              <Clock className="w-8 h-8 mx-auto text-blue-400" />
              <div className="text-3xl font-bold text-blue-400">4.2h</div>
              <div className="text-sm text-muted-foreground">per day</div>
            </div>
          </DashboardCard>

          <DashboardCard title="Best Streak" className="text-center">
            <div className="space-y-3">
              <Trophy className="w-8 h-8 mx-auto text-yellow-400" />
              <div className="text-3xl font-bold text-yellow-400">21</div>
              <div className="text-sm text-muted-foreground">days record</div>
            </div>
          </DashboardCard>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Calendar View */}
          <div className="lg:col-span-2">
            <DashboardCard title="📅 Activity Calendar" size="lg">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">November 2024</h3>
                  <div className="flex items-center space-x-1 text-green-400">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm">+15% from last month</span>
                  </div>
                </div>
                
                {/* Calendar Grid */}
                <div className="space-y-4">
                  {/* Day labels */}
                  <div className="grid grid-cols-7 gap-2 text-center text-xs text-muted-foreground">
                    <div>S</div><div>M</div><div>T</div><div>W</div><div>T</div><div>F</div><div>S</div>
                  </div>
                  
                  {/* Calendar days */}
                  <div className="grid grid-cols-7 gap-2">
                    {calendarData.map((day, index) => (
                      <div
                        key={index}
                        className={`aspect-square rounded-lg flex items-center justify-center text-xs font-medium cursor-pointer transition-all duration-200 ${getIntensityClass(day.intensity)}`}
                        title={day.hasActivity ? `${day.studyTime}h study time` : 'No activity'}
                      >
                        {day.day}
                      </div>
                    ))}
                  </div>
                  
                  {/* Legend */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>Less</span>
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 rounded-sm bg-muted/30" />
                      <div className="w-3 h-3 rounded-sm bg-primary/30" />
                      <div className="w-3 h-3 rounded-sm bg-primary/60" />
                      <div className="w-3 h-3 rounded-sm bg-primary/80" />
                      <div className="w-3 h-3 rounded-sm bg-primary" />
                    </div>
                    <span>More</span>
                  </div>
                </div>
                
                <Button className="w-full bg-gradient-primary hover:opacity-90">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Mark Today Complete
                </Button>
              </div>
            </DashboardCard>
          </div>

          {/* Coding Contributions */}
          <ContributionTracker />
        </div>

        {/* Goal Tracker */}
        <DashboardCard title="🎯 Monthly Goal Tracker" size="lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {goals.map((goal) => (
              <div key={goal.name} className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Target className="w-4 h-4 text-primary" />
                  <span className="font-medium">{goal.name}</span>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{goal.current} {goal.unit}</span>
                    <span className="text-muted-foreground">{goal.target} {goal.unit}</span>
                  </div>
                  <Progress value={goal.progress} className="h-2" />
                  <div className="text-xs text-muted-foreground">
                    {goal.progress}% complete
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">
                    {Math.round((goal.current / goal.target) * 100)}%
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 flex space-x-4">
            <Button variant="outline" className="flex-1">
              <BarChart3 className="w-4 h-4 mr-2" />
              View Analytics
            </Button>
            <Button className="flex-1 bg-gradient-primary hover:opacity-90">
              <Target className="w-4 h-4 mr-2" />
              Set New Goals
            </Button>
          </div>
        </DashboardCard>
      </div>
    </Layout>
  );
};

export default DayTracker;