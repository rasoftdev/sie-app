import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const localStorageAdapter = {
    getItem: (key) => {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : null;
    },
    setItem: (key, value) => {
        localStorage.setItem(key, JSON.stringify(value));
    },
};
const useSieStore = create(
    persist(
        (set, get) => ({
            token: null,
            user: null,
            setToken: (token) => set({ token }),
            setUser: (user) => set({ user }),
            isLoggedIn: () => get().token !== null,
        }),
        {
            name: 'sie-app',
            storage: localStorageAdapter,
        },
    ),
)
export default useSieStore