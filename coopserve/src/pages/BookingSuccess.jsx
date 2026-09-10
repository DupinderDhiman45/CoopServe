import { Link } from 'react-router-dom'

function BookingSuccess() {
  return (
    <div className="booking-success">

      <div className="success-card">

        <div className="success-icon">✅</div>

        <h1>Booking Confirmed!</h1>

        <p>
          Your service request has been successfully submitted.
        </p>

        <div className="booking-summary">
          <p><strong>Service:</strong> Plumbing</p>
          <p><strong>Worker:</strong> Raj Kumar</p>
          <p><strong>Status:</strong> Confirmed</p>
        </div>

        <Link to="/booking/success">
          <button>Back to Home</button>
        </Link>

      </div>

    </div>
  )
}

export default BookingSuccess