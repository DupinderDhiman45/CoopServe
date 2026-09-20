 import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

function CustomerDashboard() {

    const navigate = useNavigate();

    const [emailorMobile, setEmailorMobile] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await fetch("http://localhost:5000/login", {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    identifier: emailorMobile,
                    password: password
                })
            });

            const data = await response.json();

            console.log(data);

            if (!response.ok) {
                alert(data.message);
                return;
            }

            if (data.user.role !== "customer") {
                alert("This account is not a customer account.");
                return;
            }

            alert("Login successful!");

            navigate("/customer-home");

        } catch (error) {

            console.error(error);
            alert("Could not connect to backend.");

        }
    };


    return (
        <div className="customer-login-page">

            <div className="customer-login-card">

                <h1>Customer Login</h1>

                <p>
                    Login to book services from verified workers.
                </p>

                <form onSubmit={handleSubmit}>

                    <label>
                        Mobile Number or Email
                    </label>

                    <input
                        type="text"
                        value={emailorMobile}
                        onChange={(e) =>
                            setEmailorMobile(e.target.value)
                        }
                        placeholder="Enter mobile number or email"
                        required
                    />


                    <label>
                        Password
                    </label>

                    <input
                        type="password"
                        value={password}
                        onChange={(e) =>
                            setPassword(e.target.value)
                        }
                        placeholder="Enter your password"
                        required
                    />


                    <button type="submit">
                        Login
                    </button>

                </form>


                <p>
                    Don't have an account?{" "}
                    <Link to="/register">
                        Register
                    </Link>
                </p>

            </div>

        </div>
    );
}

export default CustomerDashboard;