import "@/App.css";
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
  SignIn,
  SignUp,
  useUser,
} from "@clerk/clerk-react";
import { Shield, Phone, AlertTriangle, CheckCircle, Menu, X } from "lucide-react";
import { useState } from "react";

// Header Component
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2" data-testid="logo-link">
            <Shield className="h-8 w-8 text-emerald-500" />
            <span className="text-xl font-bold text-white">NoMoreScamCalls</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-slate-300 hover:text-white transition" data-testid="nav-home">Home</Link>
            <SignedIn>
              <Link to="/account" className="text-slate-300 hover:text-white transition" data-testid="nav-account">Account</Link>
              <UserButton afterSignOutUrl="/" data-testid="user-button" />
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal">
                <button className="text-slate-300 hover:text-white transition" data-testid="sign-in-btn">Sign In</button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg transition" data-testid="sign-up-btn">Get Started</button>
              </SignUpButton>
            </SignedOut>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="mobile-menu-btn"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-800">
            <div className="flex flex-col gap-4">
              <Link to="/" className="text-slate-300 hover:text-white transition" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              <SignedIn>
                <Link to="/account" className="text-slate-300 hover:text-white transition" onClick={() => setMobileMenuOpen(false)}>Account</Link>
                <div className="flex items-center gap-2">
                  <UserButton afterSignOutUrl="/" />
                  <span className="text-slate-400 text-sm">Manage Account</span>
                </div>
              </SignedIn>
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="text-slate-300 hover:text-white transition text-left">Sign In</button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg transition w-fit">Get Started</button>
                </SignUpButton>
              </SignedOut>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

// Home Page
const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900" data-testid="home-page">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-8">
            <AlertTriangle className="h-4 w-4 text-emerald-400" />
            <span className="text-emerald-400 text-sm font-medium">Protect Yourself from Phone Scams</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Stop Scam Calls
            <span className="text-emerald-500"> Before They Start</span>
          </h1>
          
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            Advanced AI-powered protection that identifies and blocks fraudulent calls, keeping you and your family safe from phone scammers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <SignedOut>
              <SignUpButton mode="modal">
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition shadow-lg shadow-emerald-500/25" data-testid="hero-signup-btn">
                  Get Protected Now
                </button>
              </SignUpButton>
              <SignInButton mode="modal">
                <button className="border border-slate-600 hover:border-slate-500 text-white px-8 py-4 rounded-xl text-lg font-semibold transition" data-testid="hero-signin-btn">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <Link to="/account">
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition shadow-lg shadow-emerald-500/25" data-testid="hero-account-btn">
                  Go to Dashboard
                </button>
              </Link>
            </SignedIn>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">How We Protect You</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6" data-testid="feature-1">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-emerald-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Real-Time Protection</h3>
              <p className="text-slate-400">AI analyzes incoming calls instantly to detect suspicious patterns and known scam numbers.</p>
            </div>
            
            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6" data-testid="feature-2">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Call Screening</h3>
              <p className="text-slate-400">Screen calls before answering with AI-powered voice analysis and caller verification.</p>
            </div>
            
            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6" data-testid="feature-3">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Community Reports</h3>
              <p className="text-slate-400">Benefit from our community of users who report scam numbers, strengthening protection for everyone.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div data-testid="stat-1">
              <div className="text-4xl font-bold text-emerald-500 mb-2">10M+</div>
              <div className="text-slate-400">Scam Calls Blocked</div>
            </div>
            <div data-testid="stat-2">
              <div className="text-4xl font-bold text-emerald-500 mb-2">500K+</div>
              <div className="text-slate-400">Protected Users</div>
            </div>
            <div data-testid="stat-3">
              <div className="text-4xl font-bold text-emerald-500 mb-2">99.9%</div>
              <div className="text-slate-400">Detection Rate</div>
            </div>
            <div data-testid="stat-4">
              <div className="text-4xl font-bold text-emerald-500 mb-2">24/7</div>
              <div className="text-slate-400">Active Protection</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-emerald-500" />
            <span className="text-white font-semibold">NoMoreScamCalls</span>
          </div>
          <p className="text-slate-500 text-sm">© 2024 NoMoreScamCalls. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

// Account Page
const AccountPage = () => {
  const { user, isLoaded } = useUser();
  
  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-slate-900 pt-24 px-4 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 pt-24 px-4" data-testid="account-page">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Account Dashboard</h1>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Profile Card */}
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6" data-testid="profile-card">
            <h2 className="text-xl font-semibold text-white mb-4">Profile</h2>
            <div className="flex items-center gap-4 mb-4">
              <img 
                src={user?.imageUrl} 
                alt="Profile" 
                className="w-16 h-16 rounded-full"
              />
              <div>
                <p className="text-white font-medium">{user?.fullName || "User"}</p>
                <p className="text-slate-400 text-sm">{user?.primaryEmailAddress?.emailAddress}</p>
              </div>
            </div>
            <UserButton 
              appearance={{
                elements: {
                  rootBox: "w-full",
                  userButtonTrigger: "w-full justify-start"
                }
              }}
            />
          </div>
          
          {/* Protection Status Card */}
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6" data-testid="protection-card">
            <h2 className="text-xl font-semibold text-white mb-4">Protection Status</h2>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-emerald-400 font-medium">Active Protection</span>
            </div>
            <div className="space-y-3 text-slate-400 text-sm">
              <div className="flex justify-between">
                <span>Calls Blocked Today</span>
                <span className="text-white">12</span>
              </div>
              <div className="flex justify-between">
                <span>Calls Blocked This Week</span>
                <span className="text-white">47</span>
              </div>
              <div className="flex justify-between">
                <span>Total Calls Blocked</span>
                <span className="text-white">1,234</span>
              </div>
            </div>
          </div>
          
          {/* Recent Activity Card */}
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 md:col-span-2" data-testid="activity-card">
            <h2 className="text-xl font-semibold text-white mb-4">Recent Activity</h2>
            <div className="space-y-3">
              {[
                { number: "+1 (555) 123-4567", type: "Blocked", time: "2 mins ago" },
                { number: "+1 (555) 987-6543", type: "Screened", time: "15 mins ago" },
                { number: "+1 (555) 456-7890", type: "Blocked", time: "1 hour ago" },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between py-3 border-b border-slate-700 last:border-0">
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${item.type === "Blocked" ? "bg-red-500" : "bg-yellow-500"}`}></div>
                    <span className="text-white">{item.number}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`text-sm ${item.type === "Blocked" ? "text-red-400" : "text-yellow-400"}`}>{item.type}</span>
                    <span className="text-slate-500 text-sm">{item.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Sign In Page
const SignInPage = () => {
  return (
    <div className="min-h-screen bg-slate-900 pt-24 px-4 flex items-center justify-center" data-testid="signin-page">
      <SignIn routing="path" path="/sign-in" signUpUrl="/sign-up" />
    </div>
  );
};

// Sign Up Page
const SignUpPage = () => {
  return (
    <div className="min-h-screen bg-slate-900 pt-24 px-4 flex items-center justify-center" data-testid="signup-page">
      <SignUp routing="path" path="/sign-up" signInUrl="/sign-in" />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in/*" element={<SignInPage />} />
          <Route path="/sign-up/*" element={<SignUpPage />} />
          <Route path="/account" element={
            <SignedIn>
              <AccountPage />
            </SignedIn>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
