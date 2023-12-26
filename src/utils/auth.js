import Cookies from "universal-cookie";

const cookies = new Cookies();

export function setToken(accessToken) {
  setStorageToken(accessToken);
  setCookieToken(accessToken);
}

export function setStorageToken(accessToken) {
  localStorage.setItem("token", accessToken);
}

export function setCookieToken(accessToken) {
  cookies.set("token", accessToken, { path: "/" });
}