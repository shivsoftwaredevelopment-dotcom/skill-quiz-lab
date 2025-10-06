import { useState } from 'react';
import { X, User, Shield, Users, Lock, Mail } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type UserRole = 'admin' | 'employee' | 'customer' | null;

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [selectedRole, setSelectedRole] = useState<UserRole>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!isOpen) return null;

  const handleRoleSelect = (role: UserRole) => {
    setSelectedRole(role);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', { role: selectedRole, email, password });
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      onClick={handleBackdropClick}
    >
      <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl max-w-md w-full border border-indigo-500/30 shadow-2xl shadow-indigo-500/20">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors rounded-full hover:bg-slate-700/50"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">
              <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                Welcome Back
              </span>
            </h2>
            <p className="text-gray-400">Select your role to continue</p>
          </div>

          {!selectedRole ? (
            <div className="space-y-4">
              <button
                onClick={() => handleRoleSelect('admin')}
                className="group w-full bg-gradient-to-r from-red-600/20 to-orange-600/20 backdrop-blur-sm rounded-2xl p-6 border border-red-500/30 hover:border-red-500/60 transition-all duration-300 hover:transform hover:scale-105 text-left"
              >
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-orange-600 rounded-xl flex items-center justify-center">
                      <Shield className="w-7 h-7 text-white" />
                    </div>
                    <div className="absolute inset-0 blur-xl bg-red-500/40 -z-10"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Admin Portal</h3>
                    <p className="text-sm text-gray-400">Manage quizzes, users & results</p>
                  </div>
                </div>
              </button>

              <button
                onClick={() => handleRoleSelect('employee')}
                className="group w-full bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-6 border border-indigo-500/30 hover:border-indigo-500/60 transition-all duration-300 hover:transform hover:scale-105 text-left"
              >
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-14 h-14 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
                      <User className="w-7 h-7 text-white" />
                    </div>
                    <div className="absolute inset-0 blur-xl bg-indigo-500/40 -z-10"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Employee Portal</h3>
                    <p className="text-sm text-gray-400">Create & update questions</p>
                  </div>
                </div>
              </button>

              <button
                onClick={() => handleRoleSelect('customer')}
                className="group w-full bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300 hover:transform hover:scale-105 text-left"
              >
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-14 h-14 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-xl flex items-center justify-center">
                      <Users className="w-7 h-7 text-white" />
                    </div>
                    <div className="absolute inset-0 blur-xl bg-cyan-500/40 -z-10"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Player Portal</h3>
                    <p className="text-sm text-gray-400">Play quizzes & view scores</p>
                  </div>
                </div>
              </button>
            </div>
          ) : (
            <div>
              <button
                onClick={() => setSelectedRole(null)}
                className="text-sm text-indigo-400 hover:text-indigo-300 mb-6 flex items-center gap-2"
              >
                ← Back to role selection
              </button>

              <div className="mb-6 text-center">
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-slate-800/50 rounded-full border border-indigo-500/30">
                  {selectedRole === 'admin' && <Shield className="w-5 h-5 text-red-500" />}
                  {selectedRole === 'employee' && <User className="w-5 h-5 text-indigo-500" />}
                  {selectedRole === 'customer' && <Users className="w-5 h-5 text-cyan-500" />}
                  <span className="text-white font-semibold capitalize">{selectedRole} Login</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full pl-12 pr-4 py-3 bg-slate-900/50 border border-indigo-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="w-full pl-12 pr-4 py-3 bg-slate-900/50 border border-indigo-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors"
                      placeholder="••••••••"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 text-gray-400 cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-4 h-4 bg-slate-900/50 border border-indigo-500/30 rounded focus:ring-2 focus:ring-indigo-500"
                    />
                    Remember me
                  </label>
                  <button type="button" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                    Forgot password?
                  </button>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-indigo-500/50 transform hover:scale-105 transition-all duration-300"
                >
                  Sign In
                </button>

                {selectedRole === 'customer' && (
                  <div className="text-center">
                    <p className="text-gray-400 text-sm">
                      Don't have an account?{' '}
                      <button type="button" className="text-indigo-400 hover:text-indigo-300 font-semibold">
                        Sign up free
                      </button>
                    </p>
                  </div>
                )}
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
