const TOKEN_KEY = "jwt";

export const authStorage = {
    getToken: (): string | null => localStorage.getItem(TOKEN_KEY),

    setToken: (token: string) => {
        localStorage.setItem(TOKEN_KEY, token);
    },

    removeToken: () => {
        localStorage.removeItem(TOKEN_KEY);
    }
}