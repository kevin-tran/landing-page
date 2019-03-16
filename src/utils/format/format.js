export function FormatHistoryPath(path) {
  if (path === "/") return null;

  return path.match(/([^\/]+)/g);
}
