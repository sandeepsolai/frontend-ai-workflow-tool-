import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Brain, Mail, Lock, ArrowRight, Sparkles, Cpu, Shield, Zap } from 'lucide-react';

export function TrycomLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-white via-blue-50 to-slate-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_24%,rgba(0,128,238,0.05)_25%,rgba(0,128,238,0.05)_26%,transparent_27%,transparent_74%,rgba(0,128,238,0.05)_75%,rgba(0,128,238,0.05)_76%,transparent_77%,transparent)] bg-[length:20px_20px]"></div>
      </div>
      
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center relative z-10">
        
        {/* Left Side - Branding & Features */}
        <div className="space-y-8 text-center lg:text-left">
          {/* Logo & Company Name */}
          <div className="space-y-4">
            <div className="flex items-center justify-center lg:justify-start space-x-3">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0080ee] to-[#0066cc] rounded-2xl flex items-center justify-center shadow-lg">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <Sparkles className="w-3 h-3 text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-4xl font-bold text-[#0080ee] tracking-tight">
                  Trycom AI
                </h1>
                <div className="h-1 w-20 bg-gradient-to-r from-[#0080ee] to-transparent rounded-full"></div>
              </div>
            </div>
            
            {/* Tagline */}
            <p className="text-xl text-slate-600 font-medium max-w-md mx-auto lg:mx-0">
              Intelligent AI Solutions for Modern Business
            </p>
            <p className="text-[#0080ee]/70 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Transform your business with cutting-edge AI technology. Automate workflows, 
              gain intelligent insights, and accelerate decision-making with our comprehensive AI platform.
            </p>
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto lg:mx-0">
            <div className="text-center lg:text-left space-y-2">
              <div className="w-12 h-12 bg-[#0080ee]/10 rounded-xl flex items-center justify-center mx-auto lg:mx-0">
                <Zap className="w-6 h-6 text-[#0080ee]" />
              </div>
              <h3 className="font-semibold text-[#0080ee]">Lightning Fast AI</h3>
              <p className="text-sm text-[#0080ee]/70">Process complex data in milliseconds</p>
            </div>
            
            <div className="text-center lg:text-left space-y-2">
              <div className="w-12 h-12 bg-[#0080ee]/10 rounded-xl flex items-center justify-center mx-auto lg:mx-0">
                <Shield className="w-6 h-6 text-[#0080ee]" />
              </div>
              <h3 className="font-semibold text-[#0080ee]">Enterprise Security</h3>
              <p className="text-sm text-[#0080ee]/70">Bank-level encryption & privacy</p>
            </div>
            
            <div className="text-center lg:text-left space-y-2">
              <div className="w-12 h-12 bg-[#0080ee]/10 rounded-xl flex items-center justify-center mx-auto lg:mx-0">
                <Cpu className="w-6 h-6 text-[#0080ee]" />
              </div>
              <h3 className="font-semibold text-[#0080ee]">Smart Automation</h3>
              <p className="text-sm text-[#0080ee]/70">Intelligent workflow optimization</p>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center justify-center lg:justify-start space-x-6 text-sm text-[#0080ee]/60">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-[#0080ee] rounded-full"></div>
              <span>99.9% Uptime</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-[#0080ee] rounded-full"></div>
              <span>ISO 27001 Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-[#0080ee] rounded-full"></div>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="flex justify-center lg:justify-end">
          <Card className="w-full max-w-md shadow-2xl border border-[#0080ee]/10 bg-white/95 backdrop-blur-sm">
            <CardHeader className="space-y-6 pb-8">
              <div className="text-center space-y-2">
                <h2 className="text-2xl font-bold text-[#0080ee]">Welcome Back</h2>
                <p className="text-[#0080ee]/70">Sign in to access your AI workspace</p>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <form onSubmit={handleLogin} className="space-y-5">
                {/* Email Field */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-[#0080ee]">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#0080ee]/50" />
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-[#0080ee]/20 rounded-xl focus:ring-2 focus:ring-[#0080ee] focus:border-[#0080ee] transition-all duration-200 bg-white text-[#0080ee] placeholder-[#0080ee]/50"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div className="space-y-2">
                  <label htmlFor="password" className="text-sm font-medium text-[#0080ee]">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#0080ee]/50" />
                    <input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-[#0080ee]/20 rounded-xl focus:ring-2 focus:ring-[#0080ee] focus:border-[#0080ee] transition-all duration-200 bg-white text-[#0080ee] placeholder-[#0080ee]/50"
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 text-[#0080ee] border-[#0080ee]/30 rounded focus:ring-[#0080ee]" />
                    <span className="text-[#0080ee]/70">Remember me</span>
                  </label>
                  <button type="button" className="text-[#0080ee] hover:text-[#0080ee]/80 font-medium transition-colors">
                    Forgot password?
                  </button>
                </div>

                {/* Login Button */}
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#0080ee] hover:bg-[#0080ee]/90 text-white font-semibold py-3 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  {isLoading ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Signing in...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-2">
                      <span>Sign In</span>
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  )}
                </Button>
              </form>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-[#0080ee]/20"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-[#0080ee]/60">or continue with</span>
                </div>
              </div>

              {/* Social Login Options */}
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="py-3 border-[#0080ee]/20 hover:bg-[#0080ee]/5 text-[#0080ee]">
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Google
                </Button>
                <Button variant="outline" className="py-3 border-[#0080ee]/20 hover:bg-[#0080ee]/5 text-[#0080ee]">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.024-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.221.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                  </svg>
                  Microsoft
                </Button>
              </div>

              {/* Sign Up Link */}
              <div className="text-center text-sm text-[#0080ee]/70">
                Don't have an account?{' '}
                <button className="text-[#0080ee] hover:text-[#0080ee]/80 font-semibold transition-colors">
                  Sign up for free
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}