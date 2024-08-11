import { User } from "@/store/users-store";

const initialUsers: User[] = [
    {
        id: 'user1',
        firstName: 'Marvin',
        lastName: "McKinney",
        name: "Marvin McKinney",
        photo: "/images/user-1.png",
        createdAt: "2021-06-01 12:00:00",
        email: "userone@gmail.com",
        username: "userone",
        password: "Test@1234"
    },
    {
        id: 'user2',
        firstName: 'Theresa',
        lastName: "Webb",
        name: "Theresa Webb",
        photo: "/images/user-2.png",
        createdAt: "2021-06-01 12:00:00",
        email: "usertwo@gmail.com",
        username: "usertwo",
        password: "Test@1234"
    },
    {
        id: 'user3',
        firstName: 'Ankit',
        lastName: "Karn",
        name: "Ankit Karn",
        createdAt: "2021-06-01 12:00:00",
        email: "ankit.karn.ak@gmail.com",
        username: "ankitkarn",
        password: "Test@1234"
    }
]

export const initalUsersById = initialUsers.reduce((acc, user) => {
    acc[user.id] = user
    return acc
}, {} as Record<string, User>)

export const initialAllUsersId = initialUsers.map(user => user.id)