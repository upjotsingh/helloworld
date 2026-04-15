type AnyObject = Record<string, any>;

/**
 * Recursively generates a nested object with dot-notated keys.
 * Example:
 * { home: { title: "..." } } => { home: { title: "home.title" } }
 */
export function generateKeyObject<T extends AnyObject>(
  obj: T,
  prefix = ''
): T {
  const result: any = {};
  for (const key in obj) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      result[key] = generateKeyObject(obj[key], fullKey);
    } else {
      result[key] = fullKey;
    }
  }
  return result;
}
