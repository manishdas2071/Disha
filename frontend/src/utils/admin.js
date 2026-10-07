const ADMIN_EMAILS = (import.meta.env.VITE_ADMIN_EMAILS || '')
  .split(',')
  .map((e) => e.trim().toLowerCase())
  .filter(Boolean);

// Only real, verified Firebase accounts can be admins.
// The "Demo/Guest" user has no uid, so it can never be an admin.
export function isAdminUser(user) {
  if (!user || !user.uid || !user.email || !user.emailVerified) return false;
  return ADMIN_EMAILS.includes(user.email.toLowerCase());
}