import { writable } from "svelte/store";

const createTheme = () => {
    const { subscribe, update } = writable(1)

    return {
        subscribe,
        next: () => update(n => {
            if (n === 3) {
                return 1
            } else {
                return n + 1
            }
        })
    }
}

export const theme = createTheme();