import logo from '../assets/logo.jpg';

export function LoginPage() {
  const handleLogin = () => {
    window.location.href = 'https://backend-ai-workflow-tool.onrender.com/api/auth/google';
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
      <div className="text-center max-w-md w-full">
        {/* Logo integrated with header */}
        <div className="flex items-center justify-center mb-6">
          <img 
            src={logo} 
            alt="Trycom AI Logo" 
            className="w-12 h-12 mr-3 object-contain" 
          />
          <h1 className="text-3xl font-bold" style={{ color: '#0080ee' }}>
            Trycom AI
          </h1>
        </div>
        
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          AI Powered Email Workflow Manager
        </h2>
        
        <p className="mb-8 text-gray-600">
          Streamline your email management with AI-powered prioritization, 
          smart replies, and meeting scheduling.
        </p>
        
        <button 
          onClick={handleLogin}
          className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 rounded-lg py-3 px-4 font-medium text-gray-700 hover:bg-gray-50 transition-colors shadow-sm"
        >
          <img 
            src="https://developers.google.com/identity/images/g-logo.png" 
            alt="Google logo" 
            className="w-5 h-5"
          />
          Sign in with Google
        </button>
      </div>
    </div>
  );
}