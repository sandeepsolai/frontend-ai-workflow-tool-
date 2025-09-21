import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Brain, 
  Search, 
  Bell, 
  Settings, 
  LogOut, 
  BarChart3, 
  Users, 
  Zap, 
  TrendingUp, 
  Activity, 
  FileText, 
  Calendar,
  Plus,
  ChevronDown,
  Sparkles,
  Target,
  Clock,
  CheckCircle,
  Cpu,
  Database,
  Shield
} from 'lucide-react';

export function TrycomDashboardPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const handleLogout = () => {
    navigate('/login');
  };

  const stats = [
    { label: 'AI Models Active', value: '12', change: '+2', icon: Brain, color: 'text-[#0080ee]' },
    { label: 'Tasks Processed', value: '2,847', change: '+15%', icon: Activity, color: 'text-[#0080ee]' },
    { label: 'Team Members', value: '24', change: '+3', icon: Users, color: 'text-[#0080ee]' },
    { label: 'Success Rate', value: '98.2%', change: '+0.5%', icon: Target, color: 'text-[#0080ee]' },
  ];

  const recentActivities = [
    { id: 1, action: 'Model Training Completed', model: 'Customer Sentiment Analysis', time: '2 minutes ago', status: 'success' },
    { id: 2, action: 'New Dataset Uploaded', model: 'Sales Forecasting', time: '15 minutes ago', status: 'processing' },
    { id: 3, action: 'API Integration Updated', model: 'Text Classification', time: '1 hour ago', status: 'success' },
    { id: 4, action: 'Performance Report Generated', model: 'Image Recognition', time: '2 hours ago', status: 'success' },
  ];

  const quickActions = [
    { label: 'Train New Model', icon: Brain, description: 'Create and train AI models' },
    { label: 'Upload Dataset', icon: Database, description: 'Import training data' },
    { label: 'View Analytics', icon: BarChart3, description: 'Performance insights' },
    { label: 'Team Settings', icon: Settings, description: 'Manage workspace' },
  ];

  const navigationItems = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'models', label: 'AI Models', icon: Brain },
    { id: 'datasets', label: 'Datasets', icon: Database },
    { id: 'analytics', label: 'Analytics', icon: TrendingUp },
    { id: 'team', label: 'Team', icon: Users },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-slate-100">
      {/* Header */}
      <header className="bg-white border-b border-[#0080ee]/10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo and Company Name */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-[#0080ee] to-[#0066cc] rounded-xl flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <Sparkles className="w-2 h-2 text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-[#0080ee] tracking-tight">Trycom AI</h1>
                <div className="h-0.5 w-16 bg-gradient-to-r from-[#0080ee] to-transparent rounded-full"></div>
              </div>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-lg mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#0080ee]/50" />
                <input
                  type="text"
                  placeholder="Search models, datasets, analytics..."
                  className="w-full pl-10 pr-4 py-2 border border-[#0080ee]/20 rounded-lg focus:ring-2 focus:ring-[#0080ee] focus:border-[#0080ee] transition-all duration-200 bg-white text-[#0080ee] placeholder-[#0080ee]/50"
                />
              </div>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="text-[#0080ee] hover:bg-[#0080ee]/10">
                <Bell className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-[#0080ee] hover:bg-[#0080ee]/10">
                <Settings className="w-5 h-5" />
              </Button>
              <Separator orientation="vertical" className="h-6" />
              <div className="flex items-center space-x-3">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-[#0080ee] text-white">JD</AvatarFallback>
                </Avatar>
                <div className="hidden md:block">
                  <p className="text-sm font-medium text-[#0080ee]">John Doe</p>
                  <p className="text-xs text-[#0080ee]/70">AI Engineer</p>
                </div>
                <Button variant="ghost" size="icon" onClick={handleLogout} className="text-[#0080ee] hover:bg-[#0080ee]/10">
                  <LogOut className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar Navigation */}
          <aside className="w-64 shrink-0">
            <Card className="bg-white/80 backdrop-blur-sm border-[#0080ee]/10">
              <CardContent className="p-4">
                <nav className="space-y-2">
                  {navigationItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-all duration-200 ${
                        activeTab === item.id
                          ? 'bg-[#0080ee] text-white shadow-md'
                          : 'text-[#0080ee] hover:bg-[#0080ee]/10'
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                    </button>
                  ))}
                </nav>
              </CardContent>
            </Card>
          </aside>

          {/* Main Content */}
          <main className="flex-1 space-y-8">
            {/* Welcome Section */}
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-[#0080ee]">Welcome back, John!</h2>
              <p className="text-[#0080ee]/70">Here's what's happening with your AI workspace today.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-white/80 backdrop-blur-sm border-[#0080ee]/10 hover:shadow-lg transition-all duration-200">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-[#0080ee]/70">{stat.label}</p>
                        <p className="text-2xl font-bold text-[#0080ee]">{stat.value}</p>
                        <p className="text-sm text-[#0080ee]/60 flex items-center mt-1">
                          <TrendingUp className="w-4 h-4 mr-1" />
                          {stat.change}
                        </p>
                      </div>
                      <div className="p-3 bg-[#0080ee]/10 rounded-xl">
                        <stat.icon className={`w-6 h-6 ${stat.color}`} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Actions */}
            <Card className="bg-white/80 backdrop-blur-sm border-[#0080ee]/10">
              <CardHeader>
                <CardTitle className="text-[#0080ee] flex items-center">
                  <Zap className="w-5 h-5 mr-2" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {quickActions.map((action, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="h-auto p-4 flex flex-col items-center space-y-2 border-[#0080ee]/20 hover:bg-[#0080ee]/5 hover:border-[#0080ee] text-[#0080ee] transition-all duration-200"
                    >
                      <action.icon className="w-8 h-8" />
                      <div className="text-center">
                        <p className="font-semibold">{action.label}</p>
                        <p className="text-xs text-[#0080ee]/70">{action.description}</p>
                      </div>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="bg-white/80 backdrop-blur-sm border-[#0080ee]/10">
                <CardHeader>
                  <CardTitle className="text-[#0080ee] flex items-center">
                    <Activity className="w-5 h-5 mr-2" />
                    Recent Activity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivities.map((activity) => (
                      <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-[#0080ee]/5 transition-colors">
                        <div className={`p-2 rounded-full ${
                          activity.status === 'success' ? 'bg-green-100' : 'bg-yellow-100'
                        }`}>
                          {activity.status === 'success' ? (
                            <CheckCircle className="w-4 h-4 text-green-600" />
                          ) : (
                            <Clock className="w-4 h-4 text-yellow-600" />
                          )}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-[#0080ee]">{activity.action}</p>
                          <p className="text-sm text-[#0080ee]/70">{activity.model}</p>
                          <p className="text-xs text-[#0080ee]/50">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Performance Overview */}
              <Card className="bg-white/80 backdrop-blur-sm border-[#0080ee]/10">
                <CardHeader>
                  <CardTitle className="text-[#0080ee] flex items-center">
                    <BarChart3 className="w-5 h-5 mr-2" />
                    Performance Overview
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-[#0080ee]">Model Accuracy</span>
                        <span className="text-sm text-[#0080ee]/70">94.2%</span>
                      </div>
                      <div className="w-full bg-[#0080ee]/10 rounded-full h-2">
                        <div className="bg-[#0080ee] h-2 rounded-full" style={{ width: '94.2%' }}></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-[#0080ee]">Processing Speed</span>
                        <span className="text-sm text-[#0080ee]/70">87.5%</span>
                      </div>
                      <div className="w-full bg-[#0080ee]/10 rounded-full h-2">
                        <div className="bg-[#0080ee] h-2 rounded-full" style={{ width: '87.5%' }}></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-[#0080ee]">Resource Usage</span>
                        <span className="text-sm text-[#0080ee]/70">72.1%</span>
                      </div>
                      <div className="w-full bg-[#0080ee]/10 rounded-full h-2">
                        <div className="bg-[#0080ee] h-2 rounded-full" style={{ width: '72.1%' }}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}