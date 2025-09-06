import { NavLink, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Map, 
  Brain, 
  Heart, 
  Calendar, 
  Settings
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navigationItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/" },
  { icon: Map, label: "Roadmaps", path: "/roadmaps" },
  { icon: Brain, label: "Mental Coach", path: "/mental" },
  { icon: Heart, label: "Physical Coach", path: "/physical" },
  { icon: Calendar, label: "Day Tracker", path: "/tracker" },
];

export const TopNavbar = () => {
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <span className="text-2xl font-bold gradient-text">Aura</span>
          </div>

          {/* Navigation */}
          <nav className="flex items-center space-x-1">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "flex items-center px-4 py-2 rounded-lg transition-all duration-200",
                    "hover:bg-white/10",
                    isActive && "bg-gradient-primary shadow-glow"
                  )}
                >
                  <Icon className={cn(
                    "w-4 h-4 mr-2",
                    isActive ? "text-white" : "text-muted-foreground"
                  )} />
                  <span className={cn(
                    "font-medium text-sm",
                    isActive ? "text-white" : "text-muted-foreground"
                  )}>
                    {item.label}
                  </span>
                </NavLink>
              );
            })}
          </nav>

          {/* User Profile & Settings */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <NavLink to="/settings">
                <Settings className="w-4 h-4" />
              </NavLink>
            </Button>
            
            <div className="flex items-center space-x-2 px-3 py-1 rounded-lg glass">
              <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
                <span className="text-white font-semibold text-sm">JS</span>
              </div>
              <div className="text-sm">
                <div className="font-medium text-foreground">John Student</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};