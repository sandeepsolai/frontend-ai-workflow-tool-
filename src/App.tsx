import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TrycomLoginPage } from './pages/LoginPage';
import { TrycomDashboardPage } from './pages/DashboardPage';

function App() {
  return (
    <BrowserRouter>
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Routes>
          <Route path="/" element={<TrycomLoginPage />} />
          <Route path="/dashboard" element={<TrycomDashboardPage />} />
          <Route path="/login" element={<TrycomLoginPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
