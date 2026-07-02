const ACCESS_TOKEN_KEY = "accessToken";

export function getAccessToken() {
  const token = localStorage.getItem(ACCESS_TOKEN_KEY);
  console.log(token);
  return localStorage.getItem(ACCESS_TOKEN_KEY);
}

export function setAccessToken(token) {
  localStorage.setItem(ACCESS_TOKEN_KEY, token);
}

export function removeAccessToken() {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
}
