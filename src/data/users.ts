import { User } from "@/store/users-store";

const initialUsers: User[] = [
    {
        id: '1',
        name: 'John Doe',
        photo: "/images/user1.png",
        createdAt: "2021-06-01 12:00:00",
        email: "johndoe@gmail.com",
        username: "johndoe",
        password: "john@1234"
    },
    {
        id: '2',
        name: 'Jane Smith',
        photo: "/images/user2.png",
        createdAt: "2021-06-01 12:00:00",
        email: "janesmith@gmail.com",
        username: "janesmith",
        password: "jane@1234"
    }
]

export const initalUsersById = initialUsers.reduce((acc, user) => {
    acc[user.id] = user
    return acc
}, {} as Record<string, User>)

export const initialAllUsersId = initialUsers.map(user => user.id)