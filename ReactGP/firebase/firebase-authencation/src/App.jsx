import Login from './components/Login'
import Signup from './components/Signup'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
      {/* Header */}
      <div className="navbar bg-base-100 shadow-lg">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">🔐 AuthApp</a>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7"></path>
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Help</a></li>
              <li><a>About</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to <span className="text-primary">AuthApp</span>
          </h1>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">
            Experience seamless authentication with our modern platform. 
            Sign in to your existing account or create a new one to get started.
          </p>
        </div>

        {/* Forms Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <Login />
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <Signup />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer footer-center p-4 bg-base-300 text-base-content mt-auto">
        <aside>
          <p>© 2025 AuthApp - Built with React, Vite, Tailwind CSS & DaisyUI</p>
        </aside>
      </footer>
    </div>
  )
}

export default App
