const users = [
    { firstName: "Reimu", lastName: "Hakurei" },
    { firstName: "Marisa", lastName: "Kirisame" },
    { firstName: "Sanae", lastName: "Kochiya" },
    { firstName: "Sakuya", lastName: "Izayoi" },
    { firstName: "Momiji", lastName: "Inubashiri" }
];

module.exports = (app) => {

    // Read all
    app.get("/api/users", (req, res) => {
        // ES7 syntax
        res.json({
            users: users,
            status: "ok, fine"
        })
    })

    // Read one
    app.get("/api/users/:idx", (req, res) => {
        const { idx } = req.params;
        res.json(users[idx]);
    })

    // Create
    app.post("/api/users", (req, res) => {
        users.push(req.body);
        res.json({
            status: "ok, fine!!!",
            created: req.body
        })
    })

    // Update
    app.put("/api/users/:idx", (req, res) => {
        const { idx } = req.params;
        users[idx] = req.body;
        res.json({
            status: "ok",
            updated: req.body
        })
    })

    // Delete
    app.delete("/api/users/:id", (req, res) => {
        const { id } = req.params;
        users.splice(id, 1);
        res.json({ status: "ok, fine!!!" })
    })
}