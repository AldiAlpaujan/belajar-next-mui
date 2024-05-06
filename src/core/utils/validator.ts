export function emailValidator(input: string): boolean {
  const emailPattren: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattren.test(input);
}