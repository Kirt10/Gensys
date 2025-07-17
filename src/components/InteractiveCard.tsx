
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface InteractiveCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: "lift" | "glow" | "tilt";
}

export function InteractiveCard({ 
  children, 
  className,
  hoverEffect = "lift" 
}: InteractiveCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const effectClasses = {
    lift: "hover:-translate-y-2 hover:shadow-xl",
    glow: "hover:shadow-2xl hover:shadow-blue-500/25",
    tilt: "hover:rotate-1 hover:scale-105"
  };

  return (
    <Card
      className={cn(
        "transition-all duration-300 cursor-pointer group",
        effectClasses[hoverEffect],
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="relative overflow-hidden">
        {children}
        {/* Animated background effect - positioned behind content and non-interactive */}
        <div 
          className={cn(
            "absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 transition-opacity duration-300 pointer-events-none -z-10",
            isHovered && "opacity-100"
          )}
        />
      </CardContent>
    </Card>
  );
}
