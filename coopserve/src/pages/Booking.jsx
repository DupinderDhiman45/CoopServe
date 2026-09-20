import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import { workers } from './Workers'

function Booking() {
  const { service, name } = useParams()
  const navigate = useNavigate()

  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [address, setAddress] = useState('')
  const [requirements, setRequirements] = useState('')

  let selectedWorker = null

  if (workers[service]) {
    selectedWorker = workers[service].find(worker => {
      const workerName = worker.name
        .toLowerCase()
        .replace(" ", "-")

      return workerName === name
    })
  }

  if (!selectedWorker) {
    return (
      <div className="booking-page">
        <h1>Worker Not Found</h1>

        <button onClick={() => navigate("/services")}>
          Back to Services
        </button>
      </div>
    )
  }

  function handleBooking() {

    if (!date || !time || !address) {
      alert("Please fill Date, Time and Address")
      return
    }

    navigate("/booking/success", {
      state: {
        service: selectedWorker.job,
        worker: selectedWorker.name,
        price: selectedWorker.price,
        date: date,
        time: time,
        address: address,
        requirements: requirements
      }
    })
  }

  return (
    <div className="booking-page">

      <h1>Book a Service</h1>

      <p>Schedule a service with your selected worker.</p>

      <div className="booking-form">

        <h2>Service Details</h2>

        <label>Service</label>
        <input
          type="text"
          value={selectedWorker.job}
          readOnly
        />

        <label>Worker</label>
        <input
          type="text"
          value={selectedWorker.name}
          readOnly
        />

        <label>Service Charge</label>
        <input
          type="text"
          value={selectedWorker.price}
          readOnly
        />

        <label>Select Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <label>Select Time</label>
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />

        <label>Service Address</label>
        <textarea
          placeholder="Enter your address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        ></textarea>

        <label>Additional Requirements</label>
        <textarea
          placeholder="Describe the problem..."
          value={requirements}
          onChange={(e) => setRequirements(e.target.value)}
        ></textarea>

        <button onClick={handleBooking}>
          Confirm Booking
        </button>

      </div>

    </div>
  )
}

export default Booking
