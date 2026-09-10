import { Link } from 'react-router-dom'
function Booking() {
  return (
    <div className="booking-page">

      <h1>Book a Service</h1>

      <p>Schedule a service with your selected worker.</p>

      <div className="booking-form">

        <h2>Service Details</h2>

        <label>Service</label>
        <input type="text" value="Plumbing" readOnly />

        <label>Worker</label>
        <input type="text" value="Raj Kumar" readOnly />

        <label>Select Date</label>
        <input type="date" />

        <label>Select Time</label>
        <input type="time" />

        <label>Service Address</label>
        <textarea
          placeholder="Enter your address"
        ></textarea>

        <label>Additional Requirements</label>
        <textarea
          placeholder="Describe the problem..."
        ></textarea>

        <button>Confirm Booking</button>

      </div>

    </div>
  )
}

export default Booking