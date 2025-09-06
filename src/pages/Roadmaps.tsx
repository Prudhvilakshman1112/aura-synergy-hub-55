import { Layout } from "@/components/Layout";
import { DashboardCard } from "@/components/dashboard/DashboardCard";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Map, 
  Code, 
  CheckCircle, 
  Circle, 
  Star,
  Clock,
  Trophy,
  Target
} from "lucide-react";

const Roadmaps = () => {
  const roadmaps = [
    {
      title: "Full-Stack Developer",
      progress: 65,
      current: true,
      modules: 12,
      completed: 8,
      color: "career"
    },
    {
      title: "Data Scientist", 
      progress: 0,
      current: false,
      modules: 15,
      completed: 0,
      color: "mental"
    },
    {
      title: "UI/UX Designer",
      progress: 0, 
      current: false,
      modules: 10,
      completed: 0,
      color: "physical"
    }
  ];

  const currentModules = [
    {
      title: "Advanced React Patterns",
      description: "Learn compound components, render props, and hooks patterns",
      completed: true,
      tasks: 8,
      completedTasks: 8,
      timeEstimate: "3 hours"
    },
    {
      title: "Node.js & Express Mastery", 
      description: "Build scalable backend APIs with authentication",
      completed: true,
      tasks: 12,
      completedTasks: 12,
      timeEstimate: "5 hours"
    },
    {
      title: "Database Design & SQL",
      description: "Master PostgreSQL and database optimization",
      completed: false,
      tasks: 10,
      completedTasks: 6,
      timeEstimate: "4 hours"
    },
    {
      title: "System Design Fundamentals",
      description: "Learn scalability, caching, and architecture patterns",
      completed: false,
      tasks: 15,
      completedTasks: 0,
      timeEstimate: "6 hours"
    }
  ];

  return (
    <Layout>
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <div className="flex items-center justify-center space-x-3">
            <div className="w-16 h-16 rounded-2xl bg-gradient-career flex items-center justify-center">
              <Map className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold gradient-career">Career Roadmaps</h1>
              <p className="text-muted-foreground">Your personalized learning journey to success</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Available Roadmaps */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">Available Paths</h2>
            
            {roadmaps.map((roadmap, i) => (
              <DashboardCard 
                key={i}
                title={roadmap.title} 
                variant={roadmap.current ? "career" : "default"}
                className={roadmap.current ? "ring-2 ring-career/50" : ""}
              >
                <div className="space-y-4">
                  {roadmap.current && (
                    <Badge className="bg-gradient-career text-white">
                      <Star className="w-3 h-3 mr-1" />
                      Active
                    </Badge>
                  )}
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span className="font-medium">{roadmap.completed}/{roadmap.modules} modules</span>
                    </div>
                    <Progress value={roadmap.progress} className="h-2" />
                  </div>

                  <Button 
                    variant={roadmap.current ? "secondary" : "outline"} 
                    size="sm" 
                    className="w-full"
                  >
                    {roadmap.current ? "Continue" : "Start Journey"}
                  </Button>
                </div>
              </DashboardCard>
            ))}
          </div>

          {/* Current Roadmap Progress */}
          <div className="lg:col-span-2">
            <DashboardCard title="Full-Stack Developer Journey" variant="career" size="lg">
              <div className="space-y-6">
                {/* Progress Overview */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center glass p-4 rounded-xl">
                    <div className="text-2xl font-bold gradient-career">65%</div>
                    <div className="text-sm text-muted-foreground">Complete</div>
                  </div>
                  <div className="text-center glass p-4 rounded-xl">
                    <div className="text-2xl font-bold gradient-career">8/12</div>
                    <div className="text-sm text-muted-foreground">Modules</div>
                  </div>
                  <div className="text-center glass p-4 rounded-xl">
                    <div className="text-2xl font-bold gradient-career">42h</div>
                    <div className="text-sm text-muted-foreground">Time Invested</div>
                  </div>
                </div>

                {/* Module Timeline */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center space-x-2">
                    <Target className="w-5 h-5 text-career" />
                    <span>Learning Modules</span>
                  </h3>
                  
                  <div className="space-y-4">
                    {currentModules.map((module, i) => (
                      <div 
                        key={i}
                        className={`glass p-6 rounded-xl border transition-all duration-300 ${
                          module.completed 
                            ? 'border-career/30 bg-career/5' 
                            : module.completedTasks > 0 
                              ? 'border-career/20 bg-career/5' 
                              : 'border-border/50'
                        }`}
                      >
                        <div className="flex items-start space-x-4">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center mt-1 ${
                            module.completed 
                              ? 'bg-gradient-career' 
                              : module.completedTasks > 0 
                                ? 'bg-career/20' 
                                : 'bg-muted/30'
                          }`}>
                            {module.completed ? (
                              <CheckCircle className="w-4 h-4 text-white" />
                            ) : (
                              <Circle className="w-4 h-4 text-muted-foreground" />
                            )}
                          </div>
                          
                          <div className="flex-1 space-y-3">
                            <div>
                              <h4 className="text-lg font-semibold text-foreground">
                                {module.title}
                              </h4>
                              <p className="text-sm text-muted-foreground">
                                {module.description}
                              </p>
                            </div>
                            
                            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                              <div className="flex items-center space-x-1">
                                <CheckCircle className="w-4 h-4" />
                                <span>{module.completedTasks}/{module.tasks} tasks</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Clock className="w-4 h-4" />
                                <span>{module.timeEstimate}</span>
                              </div>
                            </div>

                            {!module.completed && (
                              <div className="space-y-2">
                                <Progress 
                                  value={(module.completedTasks / module.tasks) * 100} 
                                  className="h-2" 
                                />
                                <div className="flex space-x-2">
                                  <Button 
                                    size="sm" 
                                    className="bg-gradient-career hover:opacity-90"
                                  >
                                    {module.completedTasks > 0 ? 'Continue' : 'Start Module'}
                                  </Button>
                                  <Button variant="outline" size="sm">
                                    View Details
                                  </Button>
                                </div>
                              </div>
                            )}
                            
                            {module.completed && (
                              <div className="flex items-center space-x-2">
                                <Trophy className="w-4 h-4 text-career" />
                                <span className="text-sm font-medium text-career">
                                  Module Completed!
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </DashboardCard>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Roadmaps;