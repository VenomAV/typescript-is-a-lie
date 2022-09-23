// Use this file only as a guide for first steps using routes. Delete it when you have added your own route files.
// For a detailed explanation regarding each routes property, visit:
// https://mocks-server.org/docs/usage/routes

// users data
const USERS = [
    {
        id: 1,
        firstName: "John",
        lastName: "Doe",
    },
    {
        id: 2,
        firstName: "Jane",
        lastName: "Doe",
    },
    {
        id: 42,
        firstName: "Andrea",
        lastName: "Vallotti",
    },
]

const ALL_USERS = [
    ...USERS,
    {
        id: 3,
        firstName: "Tommy",
        firstName: "Filfiger",
    },
    {
        id: 4,
        firstName: "Timmy",
        firstName: "Dumb",
    },
]

module.exports = [
    {
        id: "get-users", // route id
        url: "/api/users", // url in express format
        method: "GET", // HTTP method
        variants: [
            {
                id: "success", // variant id
                type: "json", // variant handler id
                options: {
                    status: 200, // status to send
                    body: USERS, // body to send
                },
            },
            {
                id: "all", // variant id
                type: "json", // variant handler id
                options: {
                    status: 200, // status to send
                    body: ALL_USERS, // body to send
                },
            },
            {
                id: "error", // variant id
                type: "json", // variant handler id
                options: {
                    status: 400, // status to send
                    // body to send
                    body: {
                        message: "Error",
                    },
                },
            },
        ],
    },
    {
        id: "get-user", // route id
        url: "/api/users/:id", // url in express format
        method: "GET", // HTTP method
        variants: [
            {
                id: "success", // variant id
                type: "json", // variant handler id
                options: {
                    status: 200, // status to send
                    body: USERS[0], // body to send
                },
            },
            {
                id: "id-3", // variant id
                type: "json", // variant handler id
                options: {
                    status: 200, // status to send
                    body: ALL_USERS[2], // body to send
                },
            },
            {
                id: "real", // variant id
                type: "middleware", // variant handler id
                options: {
                    // Express middleware to execute
                    middleware: (req, res) => {
                        const userId = req.params.id
                        const user = USERS.find((userData) => userData.id === Number(userId))
                        if (user) {
                            res.status(200)
                            res.send(user)
                        } else {
                            res.status(404)
                            res.send({
                                message: "User not found",
                            })
                        }
                    },
                },
            },
        ],
    },
]
