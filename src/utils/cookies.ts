import Cookies from "js-cookie";

export function setTokenCookie(token: string) {
  Cookies.set("user-token", token, { sameSite: "Strict" });
}
