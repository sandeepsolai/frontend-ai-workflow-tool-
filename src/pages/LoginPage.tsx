    // src/pages/LoginPage.tsx
export function LoginPage() {
  const handleLogin = () => {
    // Redirect the user to the backend Google OAuth route
    window.location.href = 'http://localhost:5000/api/auth/google';
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