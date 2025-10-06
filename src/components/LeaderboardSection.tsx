import { Trophy, Medal, Crown, TrendingUp } from 'lucide-react';

export default function LeaderboardSection() {
  const topPlayers = [
    { rank: 1, name: 'Alex Chen', score: 9850, avatar: '🏆', trend: '+120' },
    { rank: 2, name: 'Sarah Johnson', score: 9720, avatar: '🥈', trend: '+95' },
    { rank: 3, name: 'Michael Park', score: 9580, avatar: '🥉', trend: '+88' },
    { rank: 4, name: 'Emma Wilson', score: 9420, avatar: '🌟', trend: '+76' },
    { rank: 5, name: 'David Kim', score: 9310, avatar: '⭐', trend: '+65' },
  ];

  return (
    <section id="leaderboard" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <Crown className="w-16 h-16 text-yellow-500 mx-auto" />
            <div className="absolute inset-0 blur-2xl bg-yellow-500/50 -z-10"></div>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-500 via-orange-500 to-pink-500 bg-clip-text text-transparent">
              Global Leaderboard
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Compete with the best minds worldwide and claim your spot at the top
          </p>
        </div>

        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-indigo-500/20">
          <div className="space-y-4">
            {topPlayers.map((player, index) => (
              <div
                key={player.rank}
                className={`group relative bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 hover:transform hover:scale-105 ${
                  index === 0
                    ? 'border-yellow-500/50 hover:border-yellow-500 bg-gradient-to-r from-yellow-900/20 to-orange-900/20'
                    : index === 1
                    ? 'border-gray-400/50 hover:border-gray-400 bg-gradient-to-r from-gray-800/20 to-slate-800/20'
                    : index === 2
                    ? 'border-orange-700/50 hover:border-orange-700 bg-gradient-to-r from-orange-900/20 to-red-900/20'
                    : 'border-indigo-500/20 hover:border-indigo-500/50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div
                      className={`w-16 h-16 rounded-xl flex items-center justify-center text-3xl font-bold ${
                        index === 0
                          ? 'bg-gradient-to-br from-yellow-500 to-orange-500'
                          : index === 1
                          ? 'bg-gradient-to-br from-gray-400 to-gray-600'
                          : index === 2
                          ? 'bg-gradient-to-br from-orange-700 to-red-700'
                          : 'bg-gradient-to-br from-indigo-600 to-purple-600'
                      }`}
                    >
                      {index < 3 ? (
                        index === 0 ? (
                          <Crown className="w-8 h-8 text-white" />
                        ) : (
                          <Medal className="w-8 h-8 text-white" />
                        )
                      ) : (
                        <span className="text-white">{player.rank}</span>
                      )}
                    </div>

                    <div>
                      <div className="text-2xl font-bold text-white mb-1">{player.name}</div>
                      <div className="flex items-center gap-2">
                        <Trophy className="w-4 h-4 text-yellow-500" />
                        <span className="text-gray-400">Score: {player.score.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="flex items-center gap-2 text-green-400 font-semibold mb-1">
                      <TrendingUp className="w-5 h-5" />
                      {player.trend}
                    </div>
                    <div className="text-sm text-gray-500">This week</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-indigo-500/50 transform hover:scale-105 transition-all duration-300">
              View Full Leaderboard
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-6 border border-indigo-500/20 text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent mb-2">
              Daily
            </div>
            <div className="text-gray-400">Reset every 24 hours</div>
          </div>

          <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
              Weekly
            </div>
            <div className="text-gray-400">Fresh start Monday</div>
          </div>

          <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-6 border border-pink-500/20 text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent mb-2">
              All-Time
            </div>
            <div className="text-gray-400">Lifetime achievements</div>
          </div>
        </div>
      </div>
    </section>
  );
}
