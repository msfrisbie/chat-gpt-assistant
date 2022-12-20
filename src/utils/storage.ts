export async function chromeSet(key: string, value: any) {
  return chrome.storage.local.set({ [key]: value });
}

export async function chromeGet(key: string): Promise<any> {
  const result = await chrome.storage.local.get(key);

  return result[key];
}
