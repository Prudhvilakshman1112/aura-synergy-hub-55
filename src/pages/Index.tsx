import { Layout } from "@/components/Layout";
import { DashboardCard } from "@/components/dashboard/DashboardCard";
import { ProgressRing } from "@/components/dashboard/ProgressRing";
import { StreakReminder } from "@/components/dashboard/StreakReminder";
import { SessionCard } from "@/components/dashboard/SessionCard";
import { ContributionTracker } from "@/components/dashboard/ContributionTracker";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Trophy, 
  Target, 
  Code, 
  Linkedin, 
  TrendingUp,
  Zap,
  Calendar,
  MessageCircle,
  Brain
} from "lucide-react";

const Index = () => {
  return (
    <Layout>
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in mb-8">
          <h1 className="text-4xl font-bold gradient-text">
            Welcome back, John! 
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your holistic success dashboard is ready. Let's continue building your future today.
          </p>
        </div>

        {/* Streak Reminder - Top Priority */}
        <div className="mb-8">
          <StreakReminder />
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          
          {/* Overall Aura Progress - Redesigned */}
          <DashboardCard title="🌟 Overall Aura Score" className="text-center">
            <div className="space-y-6">
              <div className="relative">
                <ProgressRing progress={78} variant="mental" label="Overall" size={120} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text">78%</div>
                    <div className="text-xs text-muted-foreground">Aura Score</div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-3">
                <div className="glass p-3 rounded-xl">
                  <ProgressRing progress={85} variant="career" size={50} />
                  <div className="text-xs mt-2 gradient-career font-medium">Career</div>
                  <div className="text-lg font-bold text-career">85%</div>
                </div>
                <div className="glass p-3 rounded-xl">
                  <ProgressRing progress={72} variant="mental" size={50} />
                  <div className="text-xs mt-2 gradient-mental font-medium">Mental</div>
                  <div className="text-lg font-bold text-mental">72%</div>
                </div>
                <div className="glass p-3 rounded-xl">
                  <ProgressRing progress={68} variant="physical" size={50} />
                  <div className="text-xs mt-2 gradient-physical font-medium">Physical</div>
                  <div className="text-lg font-bold text-physical">68%</div>
                </div>
              </div>
            </div>
          </DashboardCard>

          {/* Quick Actions */}
          <DashboardCard title="⚡ Quick Actions" className="text-center">
            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" className="h-16 flex-col space-y-2 hover:bg-mental/10">
                <Brain className="w-5 h-5" />
                <span className="text-xs">Mental Check-in</span>
              </Button>
              <Button variant="outline" className="h-16 flex-col space-y-2 hover:bg-career/10">
                <Target className="w-5 h-5" />
                <span className="text-xs">Set Goal</span>
              </Button>
              <Button variant="outline" className="h-16 flex-col space-y-2 hover:bg-career/10">
                <Code className="w-5 h-5" />
                <span className="text-xs">Practice Code</span>
              </Button>
              <Button variant="outline" className="h-16 flex-col space-y-2 hover:bg-physical/10">
                <Calendar className="w-5 h-5" />
                <span className="text-xs">Schedule Study</span>
              </Button>
            </div>
          </DashboardCard>

          {/* Contribution Tracker */}
          <ContributionTracker />

        </div>

        {/* Session Card - Full Width */}
        <div className="mb-8">
          <SessionCard />
        </div>


        {/* LinkedIn Profile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <DashboardCard title="LinkedIn Profile" variant="career">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Linkedin className="w-5 h-5 text-[#0077B5]" />
                <span className="font-medium">Profile Strength</span>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Completeness</span>
                  <span className="text-sm font-medium">87%</span>
                </div>
                <div className="w-full bg-muted/30 rounded-full h-2">
                  <div className="bg-gradient-career h-2 rounded-full w-[87%] transition-all duration-1000" />
                </div>
              </div>
              
              <div className="text-sm text-muted-foreground">
                Add 2 more projects to reach 95%
              </div>
              
              <Button variant="outline" size="sm" className="w-full border-career/30 hover:bg-career/10">
                Update Profile
              </Button>
            </div>
          </DashboardCard>

          {/* Wellness Quick View */}
          <DashboardCard title="Wellness Status" variant="physical">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto bg-gradient-mental rounded-full flex items-center justify-center mb-2">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-sm font-medium">Mental</div>
                  <div className="text-xs text-green-400">Positive</div>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto bg-gradient-physical rounded-full flex items-center justify-center mb-2">
                    <Trophy className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-sm font-medium">Physical</div>
                  <div className="text-xs text-green-400">Active</div>
                </div>
              </div>
              
              <Button variant="outline" size="sm" className="w-full border-physical/30 hover:bg-physical/10">
                Talk to Coach
              </Button>
            </div>
          </DashboardCard>
        </div>
      </div>
    </Layout>
  );
};

export default Index;