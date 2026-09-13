import React from 'react'
import { ArrowLeft, Download, FileCheck2, Lock } from 'lucide-react'
import Quiz from '../components/Quiz.jsx'

export default function CoursePage({ course, onBack, onRequestDownload, isLocked }) {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <button
        onClick={onBack}
        className="mb-8 flex items-center gap-1.5 text-sm font-medium text-ink/60 hover:text-ink"
      >
        <ArrowLeft size={15} /> Retour à la banque de cours
      </button>

      <span className="rounded-full bg-navy-50 px-3 py-1 text-xs font-semibold text-navy-500">
        {course.niveau} · {course.semestre}
      </span>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight text-ink">{course.matiere}</h1>
      <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-ink/60">{course.description}</p>

      <div className="mt-7 flex flex-wrap items-center gap-3">
        <button
          onClick={() => onRequestDownload(course, 'pdf')}
          className="flex items-center gap-2 rounded-full bg-navy-600 px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02] active:scale-95"
        >
          <Download size={15} /> Télécharger le PDF du cours
        </button>
        <button
          onClick={() => onRequestDownload(course, 'corrige')}
          className="flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-ink/70 transition-colors hover:border-navy-400/40 hover:text-ink"
        >
          <FileCheck2 size={15} /> Voir le corrigé des sujets
        </button>
        {isLocked && (
          <span className="flex items-center gap-1.5 text-xs text-ink/40">
            <Lock size={12} /> Accès gratuit après inscription
          </span>
        )}
      </div>

      <div className="mt-12">
        <h2 className="text-lg font-semibold tracking-tight text-ink">QCM d'entraînement</h2>
        <p className="mt-1 text-sm text-ink/50">
          Teste-toi librement, sans inscription — les corrections détaillées PDF restent réservées aux membres.
        </p>
        <div className="mt-5">
          <Quiz questions={course.qcm} />
        </div>
      </div>
    </div>
  )
}
