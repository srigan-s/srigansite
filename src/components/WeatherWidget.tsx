import React, { useState, useEffect } from 'react';
import { Cloud, Sun, CloudRain, SunSnow as Snow, Wind, Thermometer, Droplets } from 'lucide-react';

interface WeatherData {
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  location: string;
  description: string;
}

const WeatherWidget = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1200));
        
        // Mock weather data for Vaughan (in production, you'd use OpenWeatherMap API)
        const conditions = ['sunny', 'cloudy', 'rainy', 'partly-cloudy'];
        const randomCondition = conditions[Math.floor(Math.random() * conditions.length)];
        
        const mockWeather: WeatherData = {
          temperature: Math.floor(Math.random() * 30) + 5, // 5-35°C
          condition: randomCondition,
          humidity: Math.floor(Math.random() * 40) + 40, // 40-80%
          windSpeed: Math.floor(Math.random() * 20) + 5, // 5-25 km/h
          location: "Vaughan, ON",
          description: getWeatherDescription(randomCondition)
        };
        
        setWeather(mockWeather);
        setLoading(false);
      } catch (err) {
        setError('Failed to load weather data');
        setLoading(false);
      }
    };

    fetchWeather();
    
    // Update weather every 10 minutes
    const interval = setInterval(fetchWeather, 600000);
    return () => clearInterval(interval);
  }, []);

  const getWeatherDescription = (condition: string): string => {
    const descriptions = {
      sunny: 'Perfect baseball weather!',
      'partly-cloudy': 'Great day for the game',
      cloudy: 'Overcast but playable',
      rainy: 'Game might be delayed'
    };
    return descriptions[condition as keyof typeof descriptions] || 'Weather update';
  };

  const getWeatherIcon = (condition: string) => {
    const iconProps = { className: "w-6 h-6" };
    
    switch (condition) {
      case 'sunny':
        return <Sun {...iconProps} className="w-6 h-6 text-yellow-400" />;
      case 'partly-cloudy':
        return <Cloud {...iconProps} className="w-6 h-6 text-gray-300" />;
      case 'cloudy':
        return <Cloud {...iconProps} className="w-6 h-6 text-gray-400" />;
      case 'rainy':
        return <CloudRain {...iconProps} className="w-6 h-6 text-blue-400" />;
      case 'snow':
        return <Snow {...iconProps} className="w-6 h-6 text-white" />;
      default:
        return <Sun {...iconProps} className="w-6 h-6 text-yellow-400" />;
    }
  };

  if (loading) {
    return (
      <div className="fixed top-24 left-6 z-40">
        <div className="bg-slate-800/90 backdrop-blur-sm border border-green-500/20 rounded-lg p-4 min-w-[200px]">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-white text-sm font-medium">Loading weather...</span>
          </div>
          <div className="space-y-2">
            <div className="h-3 bg-slate-700 rounded animate-pulse"></div>
            <div className="h-3 bg-slate-700 rounded animate-pulse w-2/3"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !weather) {
    return (
      <div className="fixed top-24 left-6 z-40">
        <div className="bg-slate-800/90 backdrop-blur-sm border border-red-500/20 rounded-lg p-4 min-w-[200px]">
          <div className="flex items-center gap-2 text-red-400">
            <Cloud className="w-4 h-4" />
            <span className="text-sm">Weather unavailable</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed top-24 left-6 z-40">
      <div className="bg-slate-800/90 backdrop-blur-sm border border-green-500/20 rounded-lg p-4 min-w-[220px] shadow-lg">
        {/* Header */}
        <div className="flex items-center gap-2 mb-3">
          {getWeatherIcon(weather.condition)}
          <div>
            <div className="text-white text-sm font-semibold">{weather.location}</div>
            <div className="text-xs text-gray-400">Current Weather</div>
          </div>
        </div>

        {/* Temperature */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Thermometer className="w-4 h-4 text-red-400" />
            <span className="text-2xl font-bold text-white">{weather.temperature}°C</span>
          </div>
          <div className="text-right">
            <div className="text-sm text-green-400 capitalize">{weather.condition.replace('-', ' ')}</div>
          </div>
        </div>

        {/* Weather Details */}
        <div className="grid grid-cols-2 gap-3 mb-3">
          <div className="flex items-center gap-2">
            <Droplets className="w-3 h-3 text-blue-400" />
            <div>
              <div className="text-xs text-gray-400">Humidity</div>
              <div className="text-sm text-white font-medium">{weather.humidity}%</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Wind className="w-3 h-3 text-gray-400" />
            <div>
              <div className="text-xs text-gray-400">Wind</div>
              <div className="text-sm text-white font-medium">{weather.windSpeed} km/h</div>
            </div>
          </div>
        </div>

        {/* Baseball Weather Comment */}
        <div className="pt-2 border-t border-slate-700">
          <div className="text-xs text-green-400 text-center">
            ⚾ {weather.description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;