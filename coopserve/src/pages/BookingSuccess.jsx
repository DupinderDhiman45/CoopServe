import { Link, useLocation } from 'react-router-dom'

function BookingSuccess() {

  const location = useLocation()
  const booking = location.state

  if (!booking) {
    return (
      <div className="booking-success">
        <div className="success-card">

          <h1>Booking Not Found</h1>

          <Link to="/services">
            <button>Back to Services</button>
          </Link>

        </div>
      </div>
    )
  }

  return (
    <div className="booking-success">

      <div className="success-card">

        <div className="success-icon">✅</div>

        <h1>Booking Confirmed!</h1>

        <p>
          Your service request has been successfully submitted.
        </p>

        <div className="booking-summary">

          <p>
            <strong>Service:</strong> {booking.service}
          </p>

          <p>
            <strong>Worker:</strong> {booking.worker}
          </p>

          <p>
            <strong>Service Charge:</strong> {booking.price}
          </p>

          <p>
            <strong>Date:</strong> {booking.date}
          </p>

          <p>
            <strong>Time:</strong> {booking.time}
          </p>

          <p>
            <strong>Address:</strong> {booking.address}
          </p>

          {booking.requirements && (
            <p>
              <strong>Requirements:</strong> {booking.requirements}
            </p>
          )}

          <p>
            <strong>Status:</strong> Confirmed
          </p>

        </div>

        <Link to="/">
          <button>Back to Home</button>
        </Link>

      </div>

    </div>
  )
}

export default BookingSuccess
