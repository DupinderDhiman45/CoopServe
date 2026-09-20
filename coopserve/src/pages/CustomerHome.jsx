import { Link, useNavigate } from "react-router-dom";

function CustomerHome() {
    const navigate = useNavigate();

    const previousServices = [
        {
            service: "Plumbing",
            worker: "Raj Kumar",
            date: "12 Sept 2026",
            status: "Completed"
        },
        {
            service: "Electrical Repair",
            worker: "Amit Kumar",
            date: "05 Sept 2026",
            status: "Completed"
        },
        {
            service: "Cleaning",
            worker: "Sunita Devi",
            date: "28 Aug 2026",
            status: "Completed"
        }
    ];

    const handleLogout = () => {
        navigate("/login");
    };

    return (
        <div className="customer-home">

            {/* NAVBAR */}
            <nav className="account-navbar">
                <div className="logo">COOPSERVE</div>

                <div className="nav-links">
                    <Link to="/services">Services</Link>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            </nav>

            {/* WELCOME */}
            <section className="customer-welcome">
                <h1>Welcome back, Customer 👋</h1>
                <p>
                    Find trusted cooperative workers for your everyday needs.
                </p>
            </section>

            {/* QUICK ACTION */}
            <section className="quick-action">
                <div>
                    <h2>Need a service?</h2>
                    <p>Book a verified worker for your next service.</p>
                </div>

                <Link to="/services" className="book-service-btn">
                    Book New Service
                </Link>
            </section>

            {/* PREVIOUS SERVICES */}
            <section className="previous-services">
                <div className="section-heading">
                    <h2>Previous Services</h2>
                    <span>{previousServices.length} Services</span>
                </div>

                <div className="service-history">

                    {previousServices.map((item, index) => (
                        <div className="history-card" key={index}>

                            <div className="history-icon">
                                🔧
                            </div>

                            <div className="history-info">
                                <h3>{item.service}</h3>

                                <p>
                                    Worker: <strong>{item.worker}</strong>
                                </p>

                                <p>{item.date}</p>
                            </div>

                            <div className="service-status">
                                {item.status}
                            </div>

                        </div>
                    ))}

                </div>
            </section>

        </div>
    );
}

export default CustomerHome;