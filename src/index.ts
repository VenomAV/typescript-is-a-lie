import axios from "axios"
import * as t from "io-ts"
import * as F from "fp-ts/function"
import * as E from "fp-ts/Either"
import {TypeOf} from "io-ts";

const User = t.interface({
    firstName: t.string,
    lastName: t.string
})
type User = TypeOf<typeof User>

const getUser = async (userId: string): Promise<User | undefined> => {
    try {
        const { data, status } = await axios.get(`http://localhost:3100/api/users/${userId}`)
        if (status >= 300) return undefined
        const ret = F.pipe(
            //
            User.decode(data),
            E.getOrElseW(() => undefined));
        return ret
        // return validate(data)
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
