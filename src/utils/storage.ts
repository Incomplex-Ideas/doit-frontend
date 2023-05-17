// write function to check and write to local storage
export const addLocalStorage = (key: string, value: unknown) => {
  window.localStorage.setItem(key, JSON.stringify(value));
}

// write function to check and read from local storage
export const getLocalStorage = (key: string) => {
  const value = window.localStorage.getItem(key);
  if (value) return JSON.parse(value);
  return null;
}