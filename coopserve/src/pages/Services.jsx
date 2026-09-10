import { Link } from 'react-router-dom'
function Services() {
  return (
    <div className="services-page">

      <h1>Choose a Service</h1>

      <p>
        Select the service you need
      </p>

      <div className="service-list">

        <div className="service-card">
          <span>🔧</span>
          <h2>Plumbing</h2>
          <p>Pipe repair, fittings and maintenance</p>
            <Link to="/workers">
    <button>Find Workers</button>
  </Link>
        </div>

        <div className="service-card">
          <span>⚡</span>
          <h2>Electrical</h2>
          <p>Electrical repair and installation</p>
            <Link to="/workers">
    <button>Find Workers</button>
  </Link>
        </div>

        <div className="service-card">
          <span>🪚</span>
          <h2>Carpentry</h2>
          <p>Furniture repair and woodwork</p>
            <Link to="/workers">
    <button>Find Workers</button>
  </Link>
        </div>

        <div className="service-card">
          <span>🧹</span>
          <h2>Cleaning</h2>
          <p>Home and workplace cleaning</p>
            <Link to="/workers">
    <button>Find Workers</button>
  </Link>
        </div>

      </div>

    </div>
  )
}

export default Services