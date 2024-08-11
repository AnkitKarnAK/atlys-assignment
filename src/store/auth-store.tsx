import { create } from "zustand"
import { User, useUsersStore, } from "./users-store"

type CreateUser = {
    email: string
    username: string
    password: string
}

type AuthState = {
    user: User | null
    isLoggedIn: boolean
}

type AuthAction = {
    login: (emailOrUsername: string, password: string) => boolean
    logout: () => void
    createUser: (user: CreateUser) => void
}

type AuthStore = AuthState & {
    actions: AuthAction
}

const initialState: AuthState = {
    user: null,
    isLoggedIn: false
}

const useAuthStore = create<AuthStore>((setState) => {

    // const { users } = useUsers()
    // const { addUser } = useUsersActions()

    const users = useUsersStore.getState().allUsersId.map((id) => useUsersStore.getState().usersById[id])
    const addUser = useUsersStore.getState().actions.addUser


    return {
        ...initialState,
        actions: {
            login: (emailOrUsername: string, password: string) => {
                const user = users.find(
                    (user) =>
                        (user.email === emailOrUsername || user.username === emailOrUsername) &&
                        user.password === password
                );

                setState(() => {
                    if (user) {
                        return {
                            user,
                            isLoggedIn: true,
                        };
                    } else {
                        return {
                            user: null,
                            isLoggedIn: false,
                        };
                    }
                });
                return !!user;
            },
            logout: () => {
                setState(() => ({
                    user: null,
                    isLoggedIn: false
                }))
            },
            createUser: (user: CreateUser) => {
                const newUser: User = {
                    ...user,
                    id: Math.random().toString(36).substring(2, 9),
                    createdAt: new Date().toISOString(),
                }


                addUser(newUser)
            }
        }
    }
})

export const useAuthUser = () => useAuthStore((state) => state.user)
export const useIsLoggedIn = () => useAuthStore((state) => state.isLoggedIn)
export const useAuthActions = () => useAuthStore((state) => state.actions)
