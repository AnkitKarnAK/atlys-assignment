import { User } from "@/store/users-store";

const initialUsers: User[] = [
    {
        id: '1',
        firstName: 'Marvin',
        lastName: "McKinney",
        photo: "/images/user1.png",
        createdAt: "2021-06-01 12:00:00",
        email: "userone@gmail.com",
        username: "userone",
        password: "Test@1234"
    },
    {
        id: '2',
        firstName: 'Theresa',
        lastName: "Webb",
        photo: "/images/user2.png",
        createdAt: "2021-06-01 12:00:00",
        email: "usertwo@gmail.com",
        username: "usertwo",
        password: "Test@1234"
    }
]

export const initalUsersById = initialUsers.reduce((acc, user) => {
    acc[user.id] = user
    return acc
}, {} as Record<string, User>)

export const initialAllUsersId = initialUsers.map(user => user.id)