
export function LoginPage() {
  const handleLogin = () => {
    // Redirect the user to the backend Google OAuth route
<<<<<<< HEAD
    window.location.href = 'http://frontend-ai-workflow-tool.vercel.app/api/auth/google';
=======
    window.location.href = 'https://backend-ai-workflow-tool.onrender.com/api/auth/google';
>>>>>>> 6b5fd374cea74043a56b80805dc9b479d31e698b
  };

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">AI Email Workflow Tool</h1>
      <p className="mb-6 text-muted-foreground">Login to continue</p>
      <button 
        onClick={handleLogin}
        className="bg-primary text-primary-foreground font-semibold py-2 px-4 rounded-lg hover:bg-primary/90"
      >
        Sign In with Google
      </button>
    </div>
  );
}
