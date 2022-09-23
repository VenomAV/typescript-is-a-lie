import axios from "axios"

type User = {
    firstName: string
    lastName: string
}

const getUser = async (userId: string): Promise<User | undefined> => {
    try {
        const { data, status } = await axios.get(`http://localhost:3100/api/users/${userId}`)
        if (status >= 300) return undefined
        return data
    } catch {
        return undefined
    }
}

const main = async () => {
    const user = await getUser("42")

    if (user) console.log(`HI ${user?.firstName.toUpperCase()}!!!`)
    else console.log("NO USER FOUND")
}

main()
    .then(() => process.exit(0))
    .catch((e) => {
        console.log("ERROR", e)
        process.exit(1)
    })
