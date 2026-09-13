import React, { useState } from 'react'
import Header from './components/Header.jsx'
import LoginModal from './components/LoginModal.jsx'
import Home from './pages/Home.jsx'
import CoursePage from './pages/CoursePage.jsx'
import { useAuth } from './context/AuthContext.jsx'
import { triggerDownload } from './utils/download.js'

export default function App() {
  const { user } = useAuth()
  const [view, setView] = useState('home') // 'home' | 'course'
  const [activeCourse, setActiveCourse] = useState(null)
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [pendingDownload, setPendingDownload] = useState(null) // { course, type }

  function goHome() {
    setView('home')
    setActiveCourse(null)
  }

  function openCourse(course) {
    setActiveCourse(course)
    setView('course')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Coeur du blocage : appelé par "Télécharger le PDF" / "Voir le corrigé".
  function handleRequestDownload(course, type) {
    if (!user) {
      setPendingDownload({ course, type })
      setShowAuthModal(true)
      return
    }
    triggerDownload(course, type)
  }

  // Appelé par la modale après inscription/connexion réussie.
  function handleAuthSuccess() {
    setShowAuthModal(false)
    if (pendingDownload) {
      // Le téléchargement se lance automatiquement juste après la connexion.
      triggerDownload(pendingDownload.course, pendingDownload.type)
      setPendingDownload(null)
    }
  }

  return (
    <div className="min-h-screen bg-paper">
      <Header onLogoClick={goHome} onOpenAuth={() => setShowAuthModal(true)} />

      {view === 'home' && (
        <Home onOpenCourse={openCourse} onRequestDownload={handleRequestDownload} isLocked={!user} />
      )}

      {view === 'course' && activeCourse && (
        <CoursePage
          course={activeCourse}
          onBack={goHome}
          onRequestDownload={handleRequestDownload}
          isLocked={!user}
        />
      )}

      <footer className="border-t border-line py-8 text-center text-xs text-ink/40">
        SEG VIE — UFHB · Fait par et pour les étudiants en Sciences Économiques et de Gestion
      </footer>

      {showAuthModal && (
        <LoginModal
          onClose={() => {
            setShowAuthModal(false)
            setPendingDownload(null)
          }}
          onSuccess={handleAuthSuccess}
        />
      )}
    </div>
  )
}
