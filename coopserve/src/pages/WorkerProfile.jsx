import { Link, useParams } from 'react-router-dom'
import { workers } from './Workers'

function WorkerProfile() {

  const { name } = useParams()

  let selectedWorker = null
  let selectedService = null

   Object.entries(workers).forEach(([service, serviceWorkers]) => {

    serviceWorkers.forEach(worker => {

      const workerName = worker.name
        .toLowerCase()
        .replace(" ", "-")

      if (workerName === name) {
        selectedWorker = worker
        selectedService = service
      }

    })

  })

  // If worker doesn't exist
  if (!selectedWorker) {
    return (
      <div className="worker-profile">

        <h1>Worker Not Found</h1>

        <Link to="/services">
          <button>Back to Services</button>
        </Link>

      </div>
    )
  }

  return (
    <div className="worker-profile">

      <h1>{selectedWorker.name}</h1>

      <p>🔧 {selectedWorker.job}</p>

      <p>🛠️ {selectedWorker.specialization}</p>

      <p>⭐ {selectedWorker.rating} Rating</p>

      <p>📍 {selectedWorker.distance} away</p>

      <p>
        {selectedWorker.status === "Available"
          ? "🟢 Available"
          : "🔴 Busy"}
      </p>

      <p>💼 {selectedWorker.experience} Experience</p>



      <hr />

      <h2>About Worker</h2>

      <p>
        Experienced cooperative worker providing reliable
        and professional {selectedWorker.job.toLowerCase()} services.
      </p>

      <h2>Specialization</h2>

      <p>{selectedWorker.specialization}</p>

      <h2>Service Charge</h2>
      
      <p>{selectedWorker.price}</p>

      {selectedWorker.status === "Available" ? (
  <Link to={`/booking/${selectedService}/${name}`}>
    <button>Book Service</button>
  </Link>
) : (
  <button disabled>
    Worker Busy
  </button>
)}

      
      
    </div>
  )
}

export default WorkerProfile
