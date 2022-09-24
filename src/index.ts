import axios from "axios"

type User = {
    firstName: string
    lastName: string
}

const validateGuard = (y: any): y is User => {
    return "firstName" in (y) && typeof y.firstName === "string"
        && "lastName" in (y)
}
const validate = (x: unknown): User | undefined => {
    if (validateGuard(x))
        return x
    return undefined
}

const getUser = async (userId: string): Promise<User | undefined> => {
    try {
        const { data, status } = await axios.get(`http://localhost:3100/api/users/${userId}`)
        if (status >= 300) return undefined
        return validate(data)
    } catch {
        return undefined
    }
}

const main = async () => {
    const user = await getUser("1")

    if (user) console.log(`HI ${user.firstName.toUpperCase()}!!!`)
    else console.log("NO USER FOUND")
}

main()
    .then(() => process.exit(0))
    .catch((e) => {
        console.log("ERROR", e)
        process.exit(1)
    })
