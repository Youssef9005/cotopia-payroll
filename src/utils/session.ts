import { UserData } from "../types/session";

export function getStoredUserData(): UserData | null {
  if (typeof window !== "undefined" && window.sessionStorage) {
    const storedUserData = localStorage.getItem("user-auth");
    return storedUserData ? JSON.parse(storedUserData) : null;
  }
  return null;
}

export function saveUserDataToSession(userData: UserData): void {
  if (typeof window !== "undefined" && window.sessionStorage) {
    localStorage.setItem("user-auth", JSON.stringify(userData));
    window.dispatchEvent(new Event("sessionStorageUpdated"));
  }
}

export function getSessionData() {
  if (typeof window !== "undefined" && window.sessionStorage) {
    const data = localStorage.getItem("user-auth");
    return data ? JSON.parse(data) : {};
  }
  return {};
}

export function getUserDataFromSession() {
  if (typeof window !== "undefined" && window.sessionStorage) {
    const userData = localStorage.getItem("user-auth");
    return userData ? JSON.parse(userData) : null;
  }
}
