/**
 * Generates a random email address for testing
 * @param domain - Domain to use (default: 'test.com')
 * @returns Random email address
 */
export function generateRandomEmail(domain: string = 'test.com'): string {
  const timestamp = Date.now();
  const randomString = Math.random().toString(36).substring(2, 8);
  return `test_${timestamp}_${randomString}@${domain}`;
}

/**
 * Generates a random string of specified length
 * @param length - Length of the string to generate
 * @returns Random string
 */
export function generateRandomString(length: number = 8): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

/**
 * Waits for a specified amount of time
 * @param ms - Milliseconds to wait
 */
export function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Formats date to string in YYYY-MM-DD format
 * @param date - Date to format
 * @returns Formatted date string
 */
export function formatDate(date: Date = new Date()): string {
  return date.toISOString().split('T')[0]!;
}

/**
 * Generates test data for user registration
 * @returns Object with user registration data
 */
export function generateUserData() {
  const firstName = generateRandomString(6);
  const lastName = generateRandomString(8);
  const email = generateRandomEmail();
  const password = generateRandomString(10);
  
  return {
    name: `${firstName} ${lastName}`,
    firstName,
    lastName,
    email,
    password,
    company: `${generateRandomString(8)} Corp`,
    address: `${Math.floor(Math.random() * 9999)} Test Street`,
    city: 'Test City',
    state: 'Test State',
    zipcode: Math.floor(Math.random() * 99999).toString().padStart(5, '0'),
    mobileNumber: `+1${Math.floor(Math.random() * 9000000000) + 1000000000}`
  };
}