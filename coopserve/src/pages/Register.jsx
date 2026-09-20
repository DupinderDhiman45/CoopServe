import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [identifier, setIdentifier] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("customer");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:5000/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    identifier,
                    password,
                    role
                })
            });

            const data = await response.json();

            console.log(data);

            if (response.ok) {
                alert("Registration successful! Now you can login.");
                navigate("/login");
            } else {
                alert(data.message);
            }

        } catch (error) {
            console.error("Registration error:", error);
            alert("Could not connect to backend.");
        }
    };

    return (
        <div className="register-page">

            <div className="register-card">

                <h1>Create Your Account</h1>

                <p>
                    Join CoopServe and access trusted cooperative services.
                </p>

                <form onSubmit={handleSubmit}>

                    {/* Name */}
                    <label>Full Name</label>

                    <input
                        type="text"
                        placeholder="Enter your full name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />

                    {/* Mobile / Email */}
                    <label>Mobile Number or Email</label>

                    <input
                        type="text"
                        placeholder="Enter mobile number or email"
                        value={identifier}
                        onChange={(e) => setIdentifier(e.target.value)}
                        required
                    />

                    {/* Password */}
                    <label>Password</label>

                    <input
                        type="password"
                        placeholder="Create a password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    {/* Role */}
                    <label>Account Type</label>

                    <select
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                    >
                        <option value="customer">Customer</option>
                        <option value="worker">Worker</option>
                    </select>

                    {/* Register button */}
                    <button type="submit">
                        Register
                    </button>

                </form>

                <p>
                    Already have an account?{" "}
                    <Link to="/login">
                        Login
                    </Link>
                </p>

            </div>

        </div>
    );
}

