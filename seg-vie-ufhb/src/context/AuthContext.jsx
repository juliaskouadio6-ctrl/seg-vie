import React, { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext(null)
const STORAGE_KEY = 'segvie_user'
const DB_KEY = 'segvie_users_db'

// Petite "base de données" simulée dans localStorage, en attendant Supabase.
function readDb() {
  try {
    return JSON.parse(localStorage.getItem(DB_KEY)) || []
  } catch {
    return []
  }
}
function writeDb(users) {
  localStorage.setItem(DB_KEY, JSON.stringify(users))
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY))
      if (saved) setUser(saved)
    } catch {
      // storage vide ou corrompu, on ignore
    }
    setLoading(false)
  }, [])

  function persist(nextUser) {
    setUser(nextUser)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(nextUser))
  }

  function register({ fullName, email, level, password }) {
    const users = readDb()
    if (users.some((u) => u.email.toLowerCase() === email.toLowerCase())) {
      return { ok: false, error: 'Un compte existe déjà avec cet email.' }
    }
    const newUser = { fullName, email, level, password, provider: 'email' }
    writeDb([...users, newUser])
    persist({ fullName, email, level, provider: 'email' })
    return { ok: true }
  }

  function login({ email, password }) {
    const users = readDb()
    const found = users.find((u) => u.email.toLowerCase() === email.toLowerCase())
    if (!found) return { ok: false, error: "Aucun compte n'est associé à cet email." }
    if (found.password !== password) return { ok: false, error: 'Mot de passe incorrect.' }
    persist({ fullName: found.fullName, email: found.email, level: found.level, provider: 'email' })
    return { ok: true }
  }

  function loginWithGoogle() {
    // Simulation : en attendant l'intégration OAuth réelle avec Supabase.
    const mockUser = {
      fullName: 'Étudiant Google',
      email: 'etudiant.google@gmail.com',
      level: 'L1',
      provider: 'google',
    }
    persist(mockUser)
    return { ok: true }
  }

  function logout() {
    setUser(null)
    localStorage.removeItem(STORAGE_KEY)
  }

  return (
    <AuthContext.Provider value={{ user, loading, register, login, loginWithGoogle, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth doit être utilisé à l\'intérieur de AuthProvider')
  return ctx
}
