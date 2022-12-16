import ExpiryMap from "expiry-map";
import { KEY_ACCESS_TOKEN, UNAUTHORIZED_ERROR } from "../consts";

export const cache = new ExpiryMap(10 * 1000);

export async function getAccessToken(): Promise<string> {
  console.debug("Retrieving access token...");

  if (cache.get(KEY_ACCESS_TOKEN)) {
    return cache.get(KEY_ACCESS_TOKEN);
  }
  const resp = await fetch("https://chat.openai.com/api/auth/session")
    .then((r) => r.json())
    .catch(() => ({}));

  if (!resp.accessToken) {
    throw new Error(UNAUTHORIZED_ERROR);
  }

  cache.set(KEY_ACCESS_TOKEN, resp.accessToken);

  return resp.accessToken;
}
