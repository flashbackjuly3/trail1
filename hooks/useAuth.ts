import { useState } from 'react';

export function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  // Custom logic here (simulate loading/user)
  return { user, loading };
}