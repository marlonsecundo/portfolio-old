export function getContrastColor(hexColor: string): string {
  // Remove the '#' if present
  const hex = hexColor.replace(/^#/, "");

  // Convert the hex color to RGB
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  // Calculate luminance using the relative luminance formula
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  // Choose white or black based on luminance
  const contrastColor = luminance > 0.5 ? "#000000" : "#ffffff";

  return contrastColor;
}
