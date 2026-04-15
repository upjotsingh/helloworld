import { STORAGE_KEYS } from "./constants";

const isBrowser = typeof window !== "undefined";

export const setItem = async (key: string, value: string): Promise<boolean> => {
  try {
    if (!isBrowser) return false;

    localStorage.setItem(key, value);
    return true;
  } catch (error) {
    console.warn(`Storage: Failed to set item for key "${key}"`, error);
    return false;
  }
};

export const getItem = async (key: string): Promise<string | null> => {
  try {
    if (!isBrowser) return null;

    return localStorage.getItem(key);
  } catch (error) {
    console.warn(`Storage: Failed to get item for key "${key}"`, error);
    return null;
  }
};

export const removeItem = async (key: string): Promise<boolean> => {
  try {
    if (!isBrowser) return false;

    localStorage.removeItem(key);
    return true;
  } catch (error) {
    console.warn(`Storage: Failed to remove item for key "${key}"`, error);
    return false;
  }
};

export const removeAll = async (): Promise<boolean> => {
  try {
    if (!isBrowser) return false;

    Object.values(STORAGE_KEYS).forEach((key) => {
      localStorage.removeItem(key);
    });

    return true;
  } catch (error) {
    console.warn(`Storage: Failed to remove all items`, error);
    return false;
  }
};
