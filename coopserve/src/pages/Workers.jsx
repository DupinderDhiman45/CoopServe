import { Link } from 'react-router-dom'

function Workers() {
  return (
    <div className="workers-page">

      <h1>Available Workers</h1>

      <p>Verified cooperative workers near you</p>

      <div className="worker-list">

        {/* Worker 1 */}
        <div className="worker-card">
          <div className="worker-icon">👨‍🔧</div>

          <div className="worker-info">
            <h2>Raj Kumar</h2>
            <p>🔧 Plumber</p>
            <p>⭐ 4.8 • 2.1 km away</p>
            <p>🟢 Available</p>
          </div>

          <Link to="/worker/raj">
            <button>View Profile</button>
          </Link>
        </div>

        {/* Worker 2 */}
        <div className="worker-card">
          <div className="worker-icon">👨‍🔧</div>

          <div className="worker-info">
            <h2>Amit Sharma</h2>
            <p>🔧 Plumber</p>
            <p>⭐ 4.7 • 3.4 km away</p>
            <p>🟢 Available</p>
          </div>

          <Link to="/worker/amit">
            <button>View Profile</button>
          </Link>
        </div>

        {/* Worker 3 */}
        <div className="worker-card">
          <div className="worker-icon">👨‍🔧</div>

          <div className="worker-info">
            <h2>Sunil Kumar</h2>
            <p>🔧 Plumber</p>
            <p>⭐ 4.6 • 4.2 km away</p>
            <p>🔴 Busy</p>
          </div>

          <Link to="/worker/sunil">
            <button>View Profile</button>
          </Link>
        </div>

      </div>

    </div>
  )
}

export default Workers