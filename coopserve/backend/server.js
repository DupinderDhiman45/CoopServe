const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const users = [];

// Home
app.get("/", (req, res) => {
    res.send("CoopServe Backend is running!");
});


// REGISTER
app.post("/register", (req, res) => {
    const { name, identifier, password, role } = req.body;

    const existingUser = users.find(
        (user) => user.identifier === identifier
    );

    if (existingUser) {
        return res.status(400).json({
            message: "User already exists"
        });
    }

    const newUser = {
        name,
        identifier,
        password,
        role
    };

    users.push(newUser);

    console.log("Registered user:", newUser);

    res.json({
        message: "Registration successful!"
    });
});


// LOGIN
app.post("/login", (req, res) => {
    const { identifier, password } = req.body;

    const user = users.find(
        (user) =>
            user.identifier === identifier &&
            user.password === password
    );

    if (!user) {
        return res.status(401).json({
            message: "Invalid mobile/email or password"
        });
    }

    console.log("Login user:", user);

    res.json({
        message: "Login successful!",
        user: {
            name: user.name,
            identifier: user.identifier,
            role: user.role
        }
    });
});


app.listen(5000, () => {
    console.log("Server running on port 5000");
});
