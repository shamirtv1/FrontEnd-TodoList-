
const ACCESS_TOKEN_KEY = 'access_token';
const REFRESH_TOKEN_KEY = 'refresh_token';

const isLocalStorageAvailable = typeof window !== "undefined" && window.localStorage;

//ACCESS TOKEN
export const setAccessToken = (accessToken: string) => {
    localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
}

export const getAccessToken = () => {
    const storedValue = isLocalStorageAvailable ? localStorage.getItem(ACCESS_TOKEN_KEY) : null;
    return storedValue
}

export const removeAccessToken = () => {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
}

//REFRESH TOKEN
export const setRefreshToken = (refreshToken: string) => {
    localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
}

export const removeRefreshToken = () => {
    localStorage.removeItem(REFRESH_TOKEN_KEY);
}

export const getRefreshToken = () => {
    const storedValue = isLocalStorageAvailable ? localStorage.getItem(REFRESH_TOKEN_KEY) : null;
    return storedValue
}

export const thereIsToken = () => (getAccessToken() !== null) ? true : false;