import { useState, useEffect } from 'react';
import { MessageSquare, Settings, LogOut, Eye, Trash2, Save } from 'lucide-react';
import { supabase, ContactMessage, SiteSetting } from '../lib/supabase';

interface AdminDashboardProps {
  onLogout: () => void;
}

export default function AdminDashboard({ onLogout }: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState<'messages' | 'settings'>('messages');
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [settings, setSettings] = useState<SiteSetting[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    if (activeTab === 'messages') {
      fetchMessages();
    } else {
      fetchSettings();
    }
  }, [activeTab]);

  const fetchMessages = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('contact_messages')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setMessages(data || []);
    } catch (error) {
      console.error('Error fetching messages:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchSettings = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('site_settings')
        .select('*')
        .order('category', { ascending: true });

      if (error) throw error;
      setSettings(data || []);
    } catch (error) {
      console.error('Error fetching settings:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const markAsRead = async (id: string) => {
    try {
      const { error } = await supabase
        .from('contact_messages')
        .update({ read: true })
        .eq('id', id);

      if (error) throw error;
      fetchMessages();
    } catch (error) {
      console.error('Error marking message as read:', error);
    }
  };

  const deleteMessage = async (id: string) => {
    if (!confirm('Are you sure you want to delete this message?')) return;

    try {
      const { error } = await supabase
        .from('contact_messages')
        .delete()
        .eq('id', id);

      if (error) throw error;
      fetchMessages();
    } catch (error) {
      console.error('Error deleting message:', error);
    }
  };

  const updateSetting = (id: string, value: string) => {
    setSettings(settings.map(s => s.id === id ? { ...s, value } : s));
  };

  const saveSettings = async () => {
    setIsSaving(true);
    setSuccessMessage('');

    try {
      for (const setting of settings) {
        const { error } = await supabase
          .from('site_settings')
          .update({ value: setting.value, updated_at: new Date().toISOString() })
          .eq('id', setting.id);

        if (error) throw error;
      }

      setSuccessMessage('Settings saved successfully!');
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (error) {
      console.error('Error saving settings:', error);
      alert('Failed to save settings');
    } finally {
      setIsSaving(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    onLogout();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      <nav className="bg-slate-900/95 backdrop-blur-lg border-b border-indigo-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
              Admin Dashboard
            </h1>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 bg-red-600/20 text-red-400 rounded-lg hover:bg-red-600/30 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setActiveTab('messages')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
              activeTab === 'messages'
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                : 'bg-slate-800/50 text-gray-400 hover:text-white'
            }`}
          >
            <MessageSquare className="w-5 h-5" />
            Messages
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
              activeTab === 'settings'
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                : 'bg-slate-800/50 text-gray-400 hover:text-white'
            }`}
          >
            <Settings className="w-5 h-5" />
            Settings
          </button>
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : activeTab === 'messages' ? (
          <div className="space-y-4">
            {messages.length === 0 ? (
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-12 border border-indigo-500/20 text-center">
                <MessageSquare className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <p className="text-gray-400 text-lg">No messages yet</p>
              </div>
            ) : (
              messages.map((message) => (
                <div
                  key={message.id}
                  className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border transition-all ${
                    message.read ? 'border-slate-700/50' : 'border-indigo-500/50'
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-white">{message.name}</h3>
                        {!message.read && (
                          <span className="px-2 py-1 bg-indigo-600 text-white text-xs rounded-full">
                            New
                          </span>
                        )}
                      </div>
                      <p className="text-indigo-400 text-sm">{message.email}</p>
                      <p className="text-gray-500 text-sm mt-1">
                        {new Date(message.created_at).toLocaleString()}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      {!message.read && (
                        <button
                          onClick={() => markAsRead(message.id)}
                          className="p-2 bg-indigo-600/20 text-indigo-400 rounded-lg hover:bg-indigo-600/30 transition-colors"
                          title="Mark as read"
                        >
                          <Eye className="w-5 h-5" />
                        </button>
                      )}
                      <button
                        onClick={() => deleteMessage(message.id)}
                        className="p-2 bg-red-600/20 text-red-400 rounded-lg hover:bg-red-600/30 transition-colors"
                        title="Delete"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  <div className="bg-slate-900/50 rounded-xl p-4">
                    <p className="text-gray-300 whitespace-pre-wrap">{message.message}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        ) : (
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-indigo-500/20">
            <h2 className="text-2xl font-bold text-white mb-6">Site Settings</h2>

            {successMessage && (
              <div className="mb-6 bg-green-500/10 border border-green-500/50 rounded-xl p-4">
                <p className="text-green-400">{successMessage}</p>
              </div>
            )}

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Contact Information</h3>
                <div className="space-y-4">
                  {settings
                    .filter((s) => s.category === 'contact')
                    .map((setting) => (
                      <div key={setting.id}>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          {setting.key.replace(/_/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
                        </label>
                        <input
                          type="text"
                          value={setting.value}
                          onChange={(e) => updateSetting(setting.id, e.target.value)}
                          className="w-full px-4 py-3 bg-slate-900/50 border border-indigo-500/30 rounded-xl text-white focus:outline-none focus:border-indigo-500 transition-colors"
                        />
                      </div>
                    ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Social Media Links</h3>
                <div className="space-y-4">
                  {settings
                    .filter((s) => s.category === 'social')
                    .map((setting) => (
                      <div key={setting.id}>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          {setting.key.replace(/_/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
                        </label>
                        <input
                          type="text"
                          value={setting.value}
                          onChange={(e) => updateSetting(setting.id, e.target.value)}
                          className="w-full px-4 py-3 bg-slate-900/50 border border-indigo-500/30 rounded-xl text-white focus:outline-none focus:border-indigo-500 transition-colors"
                          placeholder="https://..."
                        />
                      </div>
                    ))}
                </div>
              </div>

              <button
                onClick={saveSettings}
                disabled={isSaving}
                className="w-full px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-indigo-500/50 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3"
              >
                {isSaving ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Saving...
                  </>
                ) : (
                  <>
                    <Save className="w-5 h-5" />
                    Save Changes
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
