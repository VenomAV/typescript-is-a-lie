import axios from "axios"

type User = {
    firstName: string
    lastName: string
}

const validate = (x: unknown): User | undefined => {
    const y: any = x
    if ("firstName" in (y) && typeof y.firstName === "string"
        && "lastName" in (y))
        return x as any
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
