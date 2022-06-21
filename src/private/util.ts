export function kebabCase(str: string): string {
  if (!str) return "";

  return String(str)
    .replace(/^[^A-Za-z0-9]*|[^A-Za-z0-9]*$/g, "")
    .replace(/([a-z0-9])([A-Z])/g, (_m, a, b) => a + "_" + b.toLowerCase())
    .replace(/[^A-Za-z0-9]+|_+/g, "-")
    .toLowerCase();
}
