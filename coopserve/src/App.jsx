import './App.css'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Services from './pages/Services'
import Workers from './pages/Workers'
import { workers } from './pages/Workers'
import WorkerProfile from './pages/WorkerProfile'
import Booking from './pages/Booking'
import BookingSuccess from './pages/BookingSuccess'
import Login from './pages/Login'
import WorkerDashboard from './pages/WorkerDashboard'
import CustomerDashboard from './pages/CustomerDashboard'
import Register from './pages/Register'
import CustomerHome from './pages/CustomerHome'
import WorkerHome from './pages/WorkerHome'


function Home() {

  const [search, setSearch] = useState("")
  const navigate = useNavigate()

  // SLIDESHOW IMAGES
  const images = [
    "/home1.jpeg",
    "/home2.jpeg",
    "/home3.jpeg",
    "/home4.jpeg"
  ]

  // CURRENT IMAGE
  const [currentImage, setCurrentImage] = useState(0)

  // CHANGE IMAGE EVERY 4 SECONDS
  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentImage((previousImage) => {
        return (previousImage + 1) % images.length
      })

    }, 5000)

    return () => clearInterval(interval)

  }, [])


  function handleSearch() {

    const searchText = search.toLowerCase().trim()

    if (searchText === "") {
      return
    }

    for (const service in workers) {

      const selectedWorkers = workers[service]

      for (const worker of selectedWorkers) {

        if (worker.name.toLowerCase().includes(searchText)) {

          const workerName = worker.name
            .toLowerCase()
            .replaceAll(" ", "-")

          navigate(`/worker/${workerName}`)
          return
        }

        if (worker.specialization.toLowerCase().includes(searchText)) {

          navigate(`/workers/${service}`)
          return
        }

      }
    }

    alert("No matching service or worker found")
  }


  return (
    <>

      {/* HERO SECTION */}

      <section className="hero">

  <h1>
    Trusted Services. Powered by Cooperatives.
  </h1>

  <p>
    Find verified workers for your everyday service needs.
  </p>

  <div className="slideshow">
    <img
      src={images[currentImage]}
      alt="CoopServe services"
    />
  </div>

  <div className="home-search">

    <input
      type="text"
      placeholder="Search service, skill or worker..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />

    <button onClick={handleSearch}>
      Search
    </button>

  </div>

</section>

      {/* SERVICES */}

      <section className="services-section">

        <h2>Available Services</h2>

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

          <div className="service-card">
            🎨
            <h3>Painting</h3>
          </div>

          <div className="service-card">
            🔧
            <h3>Appliance Repair</h3>
          </div>

          <div className="service-card">
            🧱
            <h3>Construction & Masonry</h3>
          </div>

          <div className="service-card">
            ⚒️
            <h3>Welding & Metal Work</h3>
          </div>

          <div className="service-card">
            🚗
            <h3>Vehicle Repair</h3>
          </div>

          <div className="service-card">
            🌱
            <h3>Gardening & Landscaping</h3>
          </div>

          <div className="service-card">
            📦
            <h3>Moving & Loading</h3>
          </div>

          <div className="service-card">
            🧵
            <h3>Tailoring & Alteration</h3>
          </div>

        </div>

      </section>


      {/* WHY COOPSERVE */}

      <section className="why-section">

        <h2>Why CoopServe?</h2>

        <div className="features">

          <div>
            ✓
            <h3>Verified Workers</h3>
            <p>
              Connect with trusted cooperative workers.
            </p>
          </div>

          <div>
            ✓
            <h3>Smart Matching</h3>
            <p>
              Find workers based on skill and location.
            </p>
          </div>

          <div>
            ✓
            <h3>Transparent Pricing</h3>
            <p>
              Know the service cost before booking.
            </p>
          </div>

        </div>

      </section>

    </>
  )
}


function App() {

  return (

    <div className="app">

      {/* NAVBAR */}

      <nav className="navbar">

        <h2>COOPSERVE</h2>

        <div className="nav-links">

          <Link to="/">Home</Link>

          <Link to="/services">Services</Link>

          <Link to="/login">Login</Link>

        </div>

      </nav>


      {/* ROUTES */}

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/services" element={<Services />} />

        <Route
          path="/workers/:service"
          element={<Workers />}
        />

        <Route
          path="/worker/:name"
          element={<WorkerProfile />}
        />

        <Route
          path="/booking/:service/:name"
          element={<Booking />}
        />

        <Route
          path="/booking/success"
          element={<BookingSuccess />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/worker"
          element={<WorkerDashboard />}
        />

        <Route
          path="/customer"
          element={<CustomerDashboard />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/customer-home"
          element={<CustomerHome />}
        />

        <Route
          path="/worker-home"
          element={<WorkerHome />}
        />

      </Routes>

    </div>

  )
}

export default App
