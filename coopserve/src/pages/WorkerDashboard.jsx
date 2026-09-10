
function WorkerDashboard() {
  return (
    <div className="worker-dashboard">

      <h1>Welcome, Raj 👋</h1>
      <p>Worker Dashboard</p>

      <div className="dashboard-stats">

        <div>
          <h2>42</h2>
          <p>Completed Jobs</p>
        </div>

        <div>
          <h2>4.8 ⭐</h2>
          <p>Rating</p>
        </div>

        <div>
          <h2>₹12,500</h2>
          <p>This Month</p>
        </div>

      </div>

      <h2>Service Requests</h2>

      <div className="request-card">
        <h3>Pipe Leakage Repair</h3>
        <p>Customer: Rahul Sharma</p>
        <p>📍 Kurukshetra</p>
        <p>💰 ₹300</p>

        <button>Accept</button>
        <button>Reject</button>
      </div>

    </div>
  )
}

export default WorkerDashboard