/**
 * Utility function to merge CSS class names
 * Filters out empty strings and undefined values
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}
