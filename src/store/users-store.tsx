import { initalUsersById, initialAllUsersId } from "@/data/users";
import { create } from "zustand";
import { createJSONStorage } from "zustand/middleware";
import { persist } from "zustand/middleware";

export type User = {
    id: string;
    username: string;
    email: string;
    password: string;
    firstName?: string;
    lastName?: string;
    name?: string;
    photo?: string;
    createdAt: string;
}

type UsersState = {
    usersById: Record<string, User>
    allUsersId: string[]
}

type UsersAction = {
    addUser: (user: User) => void
    removeUser: (id: string) => void
}

type UsersStore = UsersState & {
    actions: UsersAction
}

const initialState: UsersState = {
    usersById: initalUsersById,
    allUsersId: initialAllUsersId
}

export const useUsersStore = create<UsersStore>()(
    persist(
        (setState) => ({
            ...initialState,
            actions: {
                addUser: (user: User) => {
                    setState((state) => {
                        return {
                            usersById: {
                                ...state.usersById,
                                [user.id]: user
                            },
                            allUsers: [...state.allUsersId, user.id]
                        }
                    })
                },
                removeUser: (id: string) => {
                    setState((state) => {
                        const { [id]: _, ...usersById } = state.usersById
                        return {
                            usersById,
                            allUsers: state.allUsersId.filter((userId) => userId !== id)
                        }
                    })
                }
            }
        }), {
        name: "users-store",
        storage: createJSONStorage(() => localStorage),
        partialize: (state) => {
            const { actions, ...stateWithoutActions } = state
            return stateWithoutActions
        }
    }
    )
)

export const useUsersActions = () => useUsersStore((state) => state.actions)
export const useUser = (id: string) => useUsersStore(state => state.usersById[id])