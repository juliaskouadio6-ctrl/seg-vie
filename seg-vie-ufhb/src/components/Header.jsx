import React, { useState, useRef, useEffect } from 'react'
import { GraduationCap, ChevronDown, LogOut } from 'lucide-react'
import { useAuth } from '../context/AuthContext.jsx'

function initials(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join('')
}

export default function Header({ onLogoClick, onOpenAuth }) {
  const { user, logout } = useAuth()
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    function handleClick(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) setMenuOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const firstName = user?.fullName?.split(' ')[0]

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-paper/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <button
          onClick={onLogoClick}
          className="flex items-center gap-2.5 text-ink"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy-600 text-white">
            <GraduationCap size={18} strokeWidth={2.2} />
          </span>
          <span className="text-[15px] font-semibold tracking-tight">
            SEG VIE <span className="text-navy-500">— UFHB</span>
          </span>
        </button>

        <nav className="hidden items-center gap-8 text-sm font-medium text-ink/70 md:flex">
          <button onClick={onLogoClick} className="transition-colors hover:text-ink">
            Banque de cours
          </button>
          <a href="#comment-ca-marche" className="transition-colors hover:text-ink">
            Comment ça marche
          </a>
        </nav>

        {!user ? (
          <button
            onClick={onOpenAuth}
            className="rounded-full bg-navy-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            Se connecter
          </button>
        ) : (
          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="flex items-center gap-2 rounded-full border border-line bg-white py-1.5 pl-1.5 pr-3 text-sm font-medium text-ink shadow-sm transition-colors hover:border-navy-400/40"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold-400 text-xs font-bold text-navy-900">
                {initials(user.fullName)}
              </span>
              {firstName}
              <ChevronDown size={14} className="text-ink/50" />
            </button>
            {menuOpen && (
              <div className="absolute right-0 top-[calc(100%+8px)] w-48 rounded-xl2 border border-line bg-white p-1.5 shadow-float">
                <div className="px-3 py-2 text-xs text-ink/50">{user.email}</div>
                <button
                  onClick={() => {
                    logout()
                    setMenuOpen(false)
                  }}
                  className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm text-ink/80 hover:bg-paper"
                >
                  <LogOut size={15} /> Se déconnecter
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  )
}
