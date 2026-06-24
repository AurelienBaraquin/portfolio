"use client";
import { useState, useEffect } from "react";
import { MapPin } from "lucide-react";

export function TimeLocation() {
  const [time, setTime] = useState("");

  useEffect(() => {
    // Fonction qui met à jour l'heure de Marseille (Paris)
    const updateTime = () => {
      const parisTime = new Date().toLocaleTimeString("fr-FR", {
        timeZone: "Europe/Paris",
        hour: "2-digit",
        minute: "2-digit",
      });
      setTime(parisTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000 * 60); // Update chaque minute
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col justify-between h-full">
      <div className="flex items-start justify-between">
        <span className="p-2 rounded-full bg-primary/10 text-primary">
            <MapPin size={20} />
        </span>
        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            Localisation
        </span>
      </div>
      
      <div className="space-y-1">
        <h4 className="text-4xl font-bold font-mono tracking-tighter">
            {time}
        </h4>
        <p className="text-muted-foreground text-sm font-medium">
        Marseille, France 🇫🇷
        </p>
      </div>
    </div>
  );
}