import { Layout } from "@/components/Layout";
import { DashboardCard } from "@/components/dashboard/DashboardCard";
import { PhysicalMetrics } from "@/components/dashboard/PhysicalMetrics";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Heart, 
  Apple, 
  Dumbbell, 
  Droplets,
  Clock,
  Camera,
  Calendar,
  MessageCircle
} from "lucide-react";

const PhysicalCoach = () => {
  return (
    <Layout>
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <div className="flex items-center justify-center space-x-3">
            <div className="w-16 h-16 rounded-2xl bg-gradient-physical flex items-center justify-center">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold gradient-physical">Physical Wellness Coach</h1>
              <p className="text-muted-foreground">Complete physical health management for optimal performance</p>
            </div>
          </div>
        </div>

        {/* Three Main Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Food Analysis Section */}
          <DashboardCard title="🍎 Food Analysis" variant="physical">
            <div className="space-y-4">
              <div className="text-center">
                <Camera className="w-12 h-12 mx-auto mb-3 text-physical" />
                <h3 className="font-bold text-lg mb-2">Snap & Analyze</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Upload a photo of your food to get instant nutritional analysis
                </p>
              </div>
              
              <div className="border-2 border-dashed border-physical/30 rounded-xl p-6 text-center hover:border-physical/50 transition-colors cursor-pointer">
                <Camera className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">Click to upload food image</p>
              </div>
              
              <Button className="w-full bg-gradient-physical hover:opacity-90">
                <Camera className="w-4 h-4 mr-2" />
                Analyze Food
              </Button>
            </div>
          </DashboardCard>

          {/* Diet Planner Section */}
          <DashboardCard title="🥗 Diet Planner" variant="physical">
            <div className="space-y-4">
              <div className="text-center">
                <Apple className="w-12 h-12 mx-auto mb-3 text-physical" />
                <h3 className="font-bold text-lg mb-2">Smart Meal Planning</h3>
              </div>
              
              <div className="space-y-3">
                <div>
                  <label className="text-sm font-medium">Daily Calorie Goal</label>
                  <Input type="number" placeholder="2000" className="mt-1" />
                </div>
              </div>
              
              <Button variant="outline" className="w-full border-physical/30">
                Generate New Plan
              </Button>
            </div>
          </DashboardCard>

          {/* Exercise Planner Section */}
          <DashboardCard title="💪 Exercise Planner" variant="physical">
            <div className="space-y-4">
              <div className="text-center">
                <Dumbbell className="w-12 h-12 mx-auto mb-3 text-physical" />
                <h3 className="font-bold text-lg mb-2">Workout Scheduler</h3>
              </div>
              
              <Button className="w-full bg-gradient-physical hover:opacity-90">
                <Dumbbell className="w-4 h-4 mr-2" />
                Start Workout
              </Button>
            </div>
          </DashboardCard>
        </div>

        {/* Physical Metrics Section */}
        <div className="mb-8">
          <PhysicalMetrics />
        </div>

        {/* Health Query & Tracking Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Health Query Section */}
          <DashboardCard title="💬 Health Query Assistant" variant="physical" size="lg">
            <div className="space-y-4">
              <div className="text-center mb-4">
                <MessageCircle className="w-10 h-10 mx-auto mb-2 text-physical" />
                <h3 className="font-bold text-lg">Ask Your Health Questions</h3>
              </div>
              
              <Textarea 
                placeholder="Ask me anything about nutrition, exercise, sleep, or general health..."
                className="min-h-[100px]"
              />
              <Button className="w-full bg-gradient-physical hover:opacity-90">
                Get Health Advice
              </Button>
            </div>
          </DashboardCard>

          {/* Daily Health Metrics */}
          <DashboardCard title="📊 Daily Health Tracking" variant="physical">
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="glass p-3 rounded-xl">
                  <Droplets className="w-6 h-6 mx-auto mb-2 text-blue-400" />
                  <div className="text-lg font-bold text-physical">1.8L</div>
                  <div className="text-xs text-muted-foreground">Water Today</div>
                  <Progress value={72} className="h-1 mt-2" />
                </div>
                <div className="glass p-3 rounded-xl">
                  <Clock className="w-6 h-6 mx-auto mb-2 text-green-400" />
                  <div className="text-lg font-bold text-physical">7.2h</div>
                  <div className="text-xs text-muted-foreground">Sleep</div>
                  <Progress value={90} className="h-1 mt-2" />
                </div>
              </div>
              
              <Button variant="outline" size="sm" className="w-full border-physical/30">
                <Calendar className="w-4 h-4 mr-2" />
                View Health Calendar
              </Button>
            </div>
          </DashboardCard>
        </div>
      </div>
    </Layout>
  );
};

export default PhysicalCoach;