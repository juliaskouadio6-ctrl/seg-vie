import React from 'react'
import { Lock, Download, FileCheck2, ArrowUpRight } from 'lucide-react'

export default function CourseCard({ course, onOpen, onRequestDownload, isLocked }) {
  return (
    <div className="group flex flex-col rounded-xl2 border border-line bg-white p-6 shadow-card transition-shadow hover:shadow-float">
      <div className="mb-4 flex items-start justify-between">
        <span className="rounded-full bg-navy-50 px-3 py-1 text-xs font-semibold text-navy-500">
          {course.niveau} · {course.semestre}
        </span>
        {isLocked && (
          <span title="Accès gratuit après inscription" className="text-ink/30">
            <Lock size={15} />
          </span>
        )}
      </div>

      <h3 className="text-lg font-semibold tracking-tight text-ink">{course.matiere}</h3>
      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ink/60">{course.description}</p>

      <button
        onClick={() => onOpen(course)}
        className="mt-4 flex items-center gap-1 text-sm font-medium text-navy-500 hover:text-navy-600"
      >
        Voir la fiche complète <ArrowUpRight size={14} />
      </button>

      <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-line pt-5">
        <button
          onClick={() => onRequestDownload(course, 'pdf')}
          className="flex items-center gap-1.5 rounded-full bg-navy-600 px-4 py-2 text-xs font-semibold text-white transition-transform hover:scale-[1.03] active:scale-95"
        >
          <Download size={13} /> Télécharger le PDF
        </button>
        <button
          onClick={() => onRequestDownload(course, 'corrige')}
          className="flex items-center gap-1.5 rounded-full border border-line px-4 py-2 text-xs font-semibold text-ink/70 transition-colors hover:border-navy-400/40 hover:text-ink"
        >
          <FileCheck2 size={13} /> Voir le corrigé
        </button>
      </div>
      {isLocked && (
        <p className="mt-2.5 text-[11px] text-ink/40">Accès gratuit après inscription</p>
      )}
    </div>
  )
}
