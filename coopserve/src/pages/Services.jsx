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
          <img src="services1.jpeg" alt="Plumbing" />
          <h2>Plumbing</h2>
          <p>Pipe repair, fittings and maintenance</p>
            <Link to="/workers/plumbing">
    <button>Find Workers</button>
  </Link>
        </div>

        <div className="service-card">
          <img src="services2.jpeg" alt="Electrical" />
          <h2>Electrical</h2>
          <p>Electrical repair and installation</p>
            <Link to="/workers/electrical">
    <button>Find Workers</button>
  </Link>
        </div>

        <div className="service-card">
          <img src="services3.jpeg" alt="Carpentry" />
          <h2>Carpentry</h2>
          <p>Furniture repair and woodwork</p>
            <Link to="/workers/carpentry">
    <button>Find Workers</button>
  </Link>
        </div>

        <div className="service-card">
          <img src="services4.jpeg" alt="Cleaning" />
          <h2>Cleaning</h2>
          <p>Home and workplace cleaning</p>
            <Link to="/workers/cleaning">
    <button>Find Workers</button>
  </Link>
        </div>
                <div className="service-card">
          <img src="services5.jpeg" alt="Painting" />
          <h2>Painting</h2>
          <p>Wall painting, touch-ups and home painting</p>
            <Link to="/workers/painting">
    <button>Find Workers</button>
  </Link>
        </div>

        <div className="service-card">
          <img src="services6.jpeg" alt="Appliance Repair" />
          <h2>Appliance Repair</h2>
          <p>Repair and maintenance of home appliances</p>
            <Link to="/workers/appliance">
    <button>Find Workers</button>
  </Link>
        </div>

        <div className="service-card">
          <img src="services7.jpeg" alt="Construction & Masonry" />
          <h2>Construction & Masonry</h2>
          <p>Small construction, brickwork and repair services</p>
          <Link to="/workers/construction">
            <button>Find Workers</button>
          </Link>
        </div>

        <div className="service-card">
          <img src="services8.jpeg" alt="Welding & Metal Work" />
          <h2>Welding & Metal Work</h2>
          <p>Gate, grill and other metal repair services</p>
          <Link to="/workers/welding">
            <button>Find Workers</button>
          </Link>
        </div>

        <div className="service-card">
          <img src="services9.jpeg" alt="Vehicle Repair" />
          <h2>Automotive</h2>
          <p>Basic vehicle servicing</p>
          <Link to="/workers/vehicle">
            <button>Find Workers</button>
          </Link>
        </div>

        <div className="service-card">
          <img src="services10.jpeg" alt="Gardening & Landscaping" />
          <h2> Landscaping</h2>
          <p>Garden maintenance, trimming and planting</p>
          <Link to="/workers/gardening">
            <button>Find Workers</button>
          </Link>
        </div>

        <div className="service-card">
          <img src="services11.jpeg" alt="Moving & Loading" />
          <h2>Logistics</h2>
          <p>Shifting, loading and unloading assistance</p>
          <Link to="/workers/moving">
            <button>Find Workers</button>
          </Link>
        </div>

        <div className="service-card">
          <img src="services12.jpeg" alt="Tailoring & Alteration" />
          <h2>Tailoring </h2>
          <p>Stitching, clothing alterations and custom work</p>
          <Link to="/workers/tailoring">
            <button>Find Workers</button>
          </Link>
        </div>

      </div>

    </div>
  )
}

export default Services