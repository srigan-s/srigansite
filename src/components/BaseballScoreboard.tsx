import React, { useState, useEffect } from 'react';
import { Trophy, Calendar, Clock, MapPin } from 'lucide-react';

interface GameData {
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  inning: string;
  status: string;
  date: string;
}

const BaseballScoreboard = () => {
  const [gameData, setGameData] = useState<GameData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulated Blue Jays game data (in a real app, you'd use MLB API)
    const fetchGameData = async () => {
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock data - in production, you'd fetch from MLB API
        const mockData: GameData = {
          homeTeam: "TOR",
          awayTeam: "NYY",
          homeScore: 7,
          awayScore: 4,
          inning: "9th",
          status: "Final",
          date: new Date().toLocaleDateString()
        };
        
        setGameData(mockData);
        setLoading(false);
      } catch (err) {
        setError('Failed to load game data');
        setLoading(false);
      }
    };

    fetchGameData();
  }, []);

  if (loading) {
    return (
      <div className="fixed top-24 right-6 z-40">
        <div className="bg-slate-800/90 backdrop-blur-sm border border-blue-500/20 rounded-lg p-4 min-w-[200px]">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
            <span className="text-white text-sm font-medium">Loading...</span>
          </div>
          <div className="space-y-2">
            <div className="h-3 bg-slate-700 rounded animate-pulse"></div>
            <div className="h-3 bg-slate-700 rounded animate-pulse w-3/4"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !gameData) {
    return (
      <div className="fixed top-24 right-6 z-40">
        <div className="bg-slate-800/90 backdrop-blur-sm border border-red-500/20 rounded-lg p-4 min-w-[200px]">
          <div className="flex items-center gap-2 text-red-400">
            <Trophy className="w-4 h-4" />
            <span className="text-sm">Game data unavailable</span>
          </div>
        </div>
      </div>
    );
  }

  const isBlueJaysHome = gameData.homeTeam === "TOR";
  const blueJaysScore = isBlueJaysHome ? gameData.homeScore : gameData.awayScore;
  const opponentScore = isBlueJaysHome ? gameData.awayScore : gameData.homeScore;
  const opponent = isBlueJaysHome ? gameData.awayTeam : gameData.homeTeam;

  return (
    <div className="fixed top-24 right-6 z-40">
      <div className="bg-slate-800/90 backdrop-blur-sm border border-blue-500/20 rounded-lg p-4 min-w-[220px] shadow-lg">
        {/* Header */}
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">TOR</span>
          </div>
          <span className="text-white text-sm font-semibold">Blue Jays</span>
          <div className={`ml-auto px-2 py-1 rounded text-xs font-medium ${
            gameData.status === 'Final' ? 'bg-green-500/20 text-green-400' :
            gameData.status === 'Live' ? 'bg-red-500/20 text-red-400' :
            'bg-yellow-500/20 text-yellow-400'
          }`}>
            {gameData.status}
          </div>
        </div>

        {/* Score */}
        <div className="flex items-center justify-between mb-3">
          <div className="text-center">
            <div className="text-xs text-gray-400 mb-1">TOR</div>
            <div className={`text-2xl font-bold ${blueJaysScore > opponentScore ? 'text-blue-400' : 'text-white'}`}>
              {blueJaysScore}
            </div>
          </div>
          
          <div className="text-gray-400 text-sm">vs</div>
          
          <div className="text-center">
            <div className="text-xs text-gray-400 mb-1">{opponent}</div>
            <div className={`text-2xl font-bold ${opponentScore > blueJaysScore ? 'text-red-400' : 'text-white'}`}>
              {opponentScore}
            </div>
          </div>
        </div>

        {/* Game Info */}
        <div className="space-y-1 text-xs text-gray-400">
          <div className="flex items-center gap-2">
            <Clock className="w-3 h-3" />
            <span>{gameData.inning}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-3 h-3" />
            <span>{gameData.date}</span>
          </div>
        </div>

        {/* Win/Loss Indicator */}
        {gameData.status === 'Final' && (
          <div className="mt-3 pt-2 border-t border-slate-700">
            <div className={`text-center text-sm font-medium ${
              blueJaysScore > opponentScore ? 'text-green-400' : 'text-red-400'
            }`}>
              {blueJaysScore > opponentScore ? '🎉 Blue Jays Win!' : '😔 Blue Jays Lose'}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BaseballScoreboard;