import axios from "axios"

type User = {
    firstName: string
    lastName: string
}

const getUser = async (userId: string): Promise<User | undefined> => {
    const { data, status } = await axios.get(`http://localhost/user/${userId}`)
    if (status >= 300) return undefined
    return data
}

const main = async () => {
    const user = await getUser("666")

    console.log(user?.firstName.toUpperCase() || "NO USER FOUND")
}

main()
    .then(() => process.exit(0))
    .catch((e) => {
        console.log("ERROR", e)
        process.exit(1)
    })
