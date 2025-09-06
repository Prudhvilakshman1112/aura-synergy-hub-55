import { Layout } from "@/components/Layout";
import { DashboardCard } from "@/components/dashboard/DashboardCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Brain, 
  MessageCircle, 
  Lightbulb, 
  Heart,
  Send,
  Sparkles
} from "lucide-react";

const MentalCoach = () => {
  const suggestedQuestions = [
    "Feeling nervous about the interview?",
    "How to deal with coding competition stress?",
    "Tips for managing study burnout?",
    "Building confidence before presentations?"
  ];

  return (
    <Layout>
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <div className="flex items-center justify-center space-x-3">
            <div className="w-16 h-16 rounded-2xl bg-gradient-mental flex items-center justify-center">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold gradient-mental">Mental Wellness Coach</h1>
              <p className="text-muted-foreground">Your empathetic AI companion for mental well-being</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Chat Interface */}
          <div className="lg:col-span-3">
            <DashboardCard title="Chat with your Mental Coach" variant="mental" size="lg">
              <div className="space-y-6">
                {/* Chat Messages */}
                <div className="h-96 space-y-4 overflow-y-auto">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-mental flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                    <div className="glass p-4 rounded-xl max-w-md">
                      <p className="text-foreground">
                        Hello John! I noticed you have a coding contest coming up in 3 hours. 
                        How are you feeling about it? I'm here to help you prepare mentally.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Suggested Questions */}
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-muted-foreground">Suggested questions:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {suggestedQuestions.map((question, i) => (
                      <Button
                        key={i}
                        variant="outline"
                        size="sm"
                        className="justify-start text-left h-auto p-3 border-mental/20 hover:bg-mental/10"
                      >
                        {question}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Input */}
                <div className="flex space-x-2">
                  <Input 
                    placeholder="Share what's on your mind..."
                    className="flex-1 bg-muted/30 border-mental/20"
                  />
                  <Button size="icon" className="bg-gradient-mental hover:opacity-90">
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </DashboardCard>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Mood Tracker */}
            <DashboardCard title="Mood Check" variant="mental">
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl mb-2">😊</div>
                  <div className="text-sm text-muted-foreground">Current mood</div>
                </div>
                
                <div className="grid grid-cols-5 gap-2">
                  {['😢', '😔', '😐', '😊', '😄'].map((emoji, i) => (
                    <button
                      key={i}
                      className="p-2 rounded-lg hover:bg-mental/10 transition-colors"
                    >
                      <span className="text-xl">{emoji}</span>
                    </button>
                  ))}
                </div>
              </div>
            </DashboardCard>

            {/* Quick Tips */}
            <DashboardCard title="Today's Tip" variant="mental">
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Lightbulb className="w-5 h-5 text-mental" />
                  <span className="font-medium">Mindful Breathing</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Try the 4-7-8 technique: Inhale for 4, hold for 7, exhale for 8. 
                  Perfect before your coding contest!
                </p>
                <Button variant="outline" size="sm" className="w-full border-mental/30">
                  Start Exercise
                </Button>
              </div>
            </DashboardCard>

            {/* Recent Sessions */}
            <DashboardCard title="Recent Sessions" variant="mental">
              <div className="space-y-3">
                {[
                  { date: "Today", topic: "Contest Anxiety", duration: "15m" },
                  { date: "Yesterday", topic: "Study Motivation", duration: "22m" },
                  { date: "2 days ago", topic: "Sleep Schedule", duration: "18m" }
                ].map((session, i) => (
                  <div key={i} className="flex justify-between items-center p-2 rounded-lg hover:bg-mental/10">
                    <div>
                      <div className="text-sm font-medium">{session.topic}</div>
                      <div className="text-xs text-muted-foreground">{session.date}</div>
                    </div>
                    <div className="text-xs text-mental">{session.duration}</div>
                  </div>
                ))}
              </div>
            </DashboardCard>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MentalCoach;