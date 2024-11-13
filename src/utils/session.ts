export interface UserData {
  username: string;
  email: string;
  [key: string]: unknown;
}

export function getStoredUserData(): UserData | null {
  const storedUserData = sessionStorage.getItem("user-auth");
  return storedUserData ? JSON.parse(storedUserData) : null;
}

export function saveUserDataToSession(userData: UserData): void {
  sessionStorage.setItem("user-auth", JSON.stringify(userData));
  window.dispatchEvent(new Event("sessionStorageUpdated"));
}

export function getUserDataFromSession() {
  if (typeof window !== "undefined" && window.sessionStorage) {
    const userData = sessionStorage.getItem("user-auth");
    return userData ? JSON.parse(userData) : null;
  }
}

export function getSessionData() {
  if (typeof window !== "undefined" && window.sessionStorage) {
    const data = sessionStorage.getItem("cotopia-lite");
    return data ? JSON.parse(data) : {};
  }
  return {};
}