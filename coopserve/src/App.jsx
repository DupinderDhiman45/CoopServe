import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Services from './pages/Services'
import Workers from './pages/Workers'
import WorkerProfile from './pages/WorkerProfile'
import Booking from './pages/Booking'
import BookingSuccess from './pages/BookingSuccess'
import Login from './pages/Login'
import WorkerDashboard from './pages/WorkerDashboard'

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <h1>Trusted Services. Powered by Cooperatives.</h1>

        <p>
          Find verified workers for your everyday service needs.
        </p>
      </section>

      {/* Services */}
      <section className="services-section">
        <h2>Popular Services</h2>

        <div className="services">

          <div className="service-card">
            🔧
            <h3>Plumbing</h3>
          </div>

          <div className="service-card">
            ⚡
            <h3>Electrical</h3>
          </div>

          <div className="service-card">
            🪚
            <h3>Carpentry</h3>
          </div>

          <div className="service-card">
            🧹
            <h3>Cleaning</h3>
          </div>

        </div>
      </section>

      {/* Why CoopServe */}
      <section className="why-section">
        <h2>Why CoopServe?</h2>

        <div className="features">

          <div>
            ✓
            <h3>Verified Workers</h3>
            <p>Connect with trusted cooperative workers.</p>
          </div>

          <div>
            ✓
            <h3>Smart Matching</h3>
            <p>Find workers based on skill and location.</p>
          </div>

          <div>
            ✓
            <h3>Transparent Pricing</h3>
            <p>Know the service cost before booking.</p>
          </div>

        </div>
      </section>
    </>
  )
}

function App() {
  return (
    <div className="app">

      {/* Navbar */}
      <nav className="navbar">
        <h2>COOPSERVE</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/login">Login</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/workers" element={<Workers />} />
        <Route path="/worker/:name" element={<WorkerProfile />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/booking/success" element={<BookingSuccess />} />
        <Route path="/login" element={<Login />} />
        <Route path="/worker-dashboard" element={<WorkerDashboard />} />
      </Routes>

    </div>
  )
}

export default App
