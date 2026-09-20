
import { Link, useNavigate } from "react-router-dom";

function WorkerHome() {
    const navigate = useNavigate();

    const serviceRequests = [
        {
            customer: "Rahul Sharma",
            service: "Plumbing",
            date: "14 Sept 2026",
            time: "10:00 AM",
            location: "Kurukshetra"
        },
        {
            customer: "Aman Kumar",
            service: "Pipe Repair",
            date: "15 Sept 2026",
            time: "02:00 PM",
            location: "Pipli"
        }
    ];

    const handleLogout = () => {
        navigate("/login");
    };

    return (
        <div className="worker-home">

            {/* NAVBAR */}
            <nav className="account-navbar">
                <div className="logo">COOPSERVE</div>

                <div className="nav-links">
                    <Link to="/services">Services</Link>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            </nav>

            {/* WELCOME */}
            <section className="worker-welcome">
                <h1>Welcome back, Raj Kumar 👋</h1>

                <p>
                    Manage your services, bookings and worker profile.
                </p>
            </section>

            {/* PROFILE */}
            <section className="worker-profile-card">

                <div className="worker-avatar">
                    RK
                </div>

                <div className="worker-profile-info">
                    <h2>Raj Kumar</h2>

                    <p className="worker-job">
                        🔧 Plumber
                    </p>

                    <p>
                        ⭐ 4.8 Rating &nbsp; • &nbsp;
                        📍 2.1 km away
                    </p>

                    <span className="verified-badge">
                        ✓ Verified Worker
                    </span>
                </div>

                <button className="edit-profile-btn">
                    Edit Profile
                </button>

            </section>

            {/* STATS */}
            <section className="worker-stats">

                <div className="stat-card">
                    <h2>48</h2>
                    <p>Completed Jobs</p>
                </div>

                <div className="stat-card">
                    <h2>4.8 ⭐</h2>
                    <p>Rating</p>
                </div>

                <div className="stat-card">
                    <h2>12</h2>
                    <p>This Month</p>
                </div>

            </section>

            {/* REQUESTS */}
            <section className="service-requests">

                <div className="section-heading">
                    <h2>Service Requests</h2>
                    <span>{serviceRequests.length} New</span>
                </div>

                <div className="request-list">

                    {serviceRequests.map((request, index) => (
                        <div className="request-card" key={index}>

                            <div className="request-info">

                                <h3>{request.service}</h3>

                                <p>
                                    Customer: <strong>
                                        {request.customer}
                                    </strong>
                                </p>

                                <p>
                                    📅 {request.date}
                                    &nbsp;&nbsp;
                                    🕐 {request.time}
                                </p>

                                <p>
                                    📍 {request.location}
                                </p>

                            </div>

                            <div className="request-actions">
                                <button className="accept-btn">
                                    Accept
                                </button>

                                <button className="reject-btn">
                                    Reject
                                </button>
                            </div>

                        </div>
                    ))}

                </div>

            </section>

        </div>
    );
}

export default WorkerHome;