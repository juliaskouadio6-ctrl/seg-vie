import React, { useState } from 'react'
import { X, GraduationCap } from 'lucide-react'
import { useAuth } from '../context/AuthContext.jsx'

const GoogleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 48 48">
    <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.1 8 3l5.7-5.7C34.6 6.1 29.6 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.7-.4-3.5z" />
    <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.6 15.9 18.9 13 24 13c3.1 0 5.8 1.1 8 3l5.7-5.7C34.6 6.1 29.6 4 24 4c-7.7 0-14.3 4.4-17.7 10.7z" />
    <path fill="#4CAF50" d="M24 44c5.5 0 10.4-1.9 14.3-5.1l-6.6-5.6c-2.1 1.5-4.8 2.7-7.7 2.7-5.3 0-9.7-3.3-11.3-8l-6.6 5.1C9.6 39.5 16.2 44 24 44z" />
    <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.3-4.3 5.7l6.6 5.6C41.5 36 44 30.5 44 24c0-1.3-.1-2.7-.4-3.5z" />
  </svg>
)

export default function LoginModal({ onClose, onSuccess }) {
  const { register, login, loginWithGoogle } = useAuth()
  const [tab, setTab] = useState('signup')
  const [error, setError] = useState('')
  const [form, setForm] = useState({ fullName: '', email: '', level: 'L1', password: '' })
  const [loginForm, setLoginForm] = useState({ email: '', password: '' })

  function handleSignup(e) {
    e.preventDefault()
    setError('')
    if (!form.fullName || !form.email || !form.password) {
      setError('Merci de remplir tous les champs.')
      return
    }
    const res = register(form)
    if (!res.ok) return setError(res.error)
    onSuccess()
  }

  function handleLogin(e) {
    e.preventDefault()
    setError('')
    const res = login(loginForm)
    if (!res.ok) return setError(res.error)
    onSuccess()
  }

  function handleGoogle() {
    loginWithGoogle()
    onSuccess()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-navy-900/40 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-md rounded-2xl border border-line bg-white p-7 shadow-float">
        <button
          onClick={onClose}
          aria-label="Fermer"
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-ink/40 hover:bg-paper hover:text-ink"
        >
          <X size={18} />
        </button>

        <div className="mb-5 flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy-600 text-white">
            <GraduationCap size={18} />
          </span>
          <span className="text-sm font-semibold text-navy-500">SEG VIE — UFHB</span>
        </div>

        <h2 className="text-xl font-semibold tracking-tight text-ink">
          Connecte-toi pour télécharger gratuitement
        </h2>
        <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
          Crée ton compte étudiant SEG en 10 secondes pour accéder à tous les fichiers.
        </p>

        <div className="mt-6 flex rounded-full bg-paper p-1">
          <button
            onClick={() => setTab('signup')}
            className={`flex-1 rounded-full py-2 text-sm font-semibold transition-colors ${
              tab === 'signup' ? 'bg-white text-ink shadow-sm' : 'text-ink/50'
            }`}
          >
            S'inscrire
          </button>
          <button
            onClick={() => setTab('login')}
            className={`flex-1 rounded-full py-2 text-sm font-semibold transition-colors ${
              tab === 'login' ? 'bg-white text-ink shadow-sm' : 'text-ink/50'
            }`}
          >
            Se connecter
          </button>
        </div>

        {error && (
          <div className="mt-4 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">{error}</div>
        )}

        {tab === 'signup' ? (
          <form onSubmit={handleSignup} className="mt-5 flex flex-col gap-3">
            <input
              type="text"
              placeholder="Nom complet"
              value={form.fullName}
              onChange={(e) => setForm({ ...form, fullName: e.target.value })}
              className="rounded-xl border border-line px-4 py-2.5 text-sm text-ink outline-none focus:border-navy-400"
            />
            <input
              type="email"
              placeholder="Email étudiant"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="rounded-xl border border-line px-4 py-2.5 text-sm text-ink outline-none focus:border-navy-400"
            />
            <select
              value={form.level}
              onChange={(e) => setForm({ ...form, level: e.target.value })}
              className="rounded-xl border border-line px-4 py-2.5 text-sm text-ink outline-none focus:border-navy-400"
            >
              <option value="L1">Niveau L1</option>
              <option value="L2">Niveau L2</option>
              <option value="L3">Niveau L3</option>
            </select>
            <input
              type="password"
              placeholder="Mot de passe"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="rounded-xl border border-line px-4 py-2.5 text-sm text-ink outline-none focus:border-navy-400"
            />
            <button
              type="submit"
              className="mt-1 rounded-full bg-navy-600 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02] active:scale-95"
            >
              Créer mon compte et télécharger
            </button>
          </form>
        ) : (
          <form onSubmit={handleLogin} className="mt-5 flex flex-col gap-3">
            <input
              type="email"
              placeholder="Email étudiant"
              value={loginForm.email}
              onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
              className="rounded-xl border border-line px-4 py-2.5 text-sm text-ink outline-none focus:border-navy-400"
            />
            <input
              type="password"
              placeholder="Mot de passe"
              value={loginForm.password}
              onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
              className="rounded-xl border border-line px-4 py-2.5 text-sm text-ink outline-none focus:border-navy-400"
            />
            <button
              type="submit"
              className="mt-1 rounded-full bg-navy-600 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02] active:scale-95"
            >
              Se connecter et télécharger
            </button>
          </form>
        )}

        <div className="my-5 flex items-center gap-3">
          <div className="h-px flex-1 bg-line" />
          <span className="text-xs text-ink/40">ou</span>
          <div className="h-px flex-1 bg-line" />
        </div>

        <button
          onClick={handleGoogle}
          className="flex w-full items-center justify-center gap-2.5 rounded-full border border-line py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-paper"
        >
          <GoogleIcon /> Continuer avec Google
        </button>
      </div>
    </div>
  )
}
