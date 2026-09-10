import { Link } from 'react-router-dom'

function WorkerProfile() {
  return (
    <div className="worker-profile">

      <h1>Raj Kumar</h1>

      <p>🔧 Professional Plumber</p>

      <p>⭐ 4.8 Rating</p>

      <p>📍 2.1 km away</p>

      <p>🟢 Available</p>

      <hr />

      <h2>About Worker</h2>

      <p>
        Experienced cooperative worker providing reliable
        plumbing repair and maintenance services.
      </p>

      <h2>Skills</h2>

      <ul>
        <li>Pipe Repair</li>
        <li>Water Tap Installation</li>
        <li>Leakage Repair</li>
        <li>Bathroom Fittings</li>
      </ul>

      <h2>Service Charge</h2>

      <p>Starting from ₹300</p>

      <Link to="/booking">
        <button>Book Service</button>
      </Link>

    </div>
  )
}

export default WorkerProfile