import { useState } from 'react';

export function useAuth() {
  // Simulate a logged-in user for dev/testing
  const [user] = useState({ name: "Test User" });
  const [loading] = useState(false);
  return { user, loading };
}
