import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/*"
              element={
                <ProtectedRoute>
                  <Navbar />
                  <main>
                    <Routes>
                      <Route path="/" element={<Navigate to="/home" replace />} />
                      <Route path="/home" element={<HomePage />} />
                      <Route path="/iphone" element={<ProductPage category="iPhone" />} />
                      <Route path="/ipad" element={<ProductPage category="iPad" />} />
                      <Route path="/watch" element={<ProductPage category="Watch" />} />
                      <Route path="/tv" element={<ProductPage category="TV" />} />
                      <Route path="/airpods" element={<ProductPage category="AirPods" />} />
                      <Route path="/mac" element={<ProductPage category="Mac" />} />
                    </Routes>
                  </main>
                  <Footer />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;