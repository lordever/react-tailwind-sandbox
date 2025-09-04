export function isValidEmail(email: string): boolean {
    if (!email) return false;
    const e = email.trim();

    const basicRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return basicRegex.test(e);
}