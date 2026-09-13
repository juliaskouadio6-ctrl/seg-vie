import React, { useMemo, useState } from 'react'
import SearchBar from '../components/SearchBar.jsx'
import CourseCard from '../components/CourseCard.jsx'
import { courses } from '../data/courses.js'

export default function Home({ onOpenCourse, onRequestDownload, isLocked }) {
  const [filters, setFilters] = useState({ niveau: '', matiere: '', type: '' })

  const matieres = useMemo(() => [...new Set(courses.map((c) => c.matiere))], [])

  const filtered = useMemo(() => {
    return courses.filter((c) => {
      if (filters.niveau && c.niveau !== filters.niveau) return false
      if (filters.matiere && c.matiere !== filters.matiere) return false
      return true
    })
  }, [filters])

  return (
    <>
      <section className="mx-auto max-w-4xl px-6 pb-14 pt-16 text-center sm:pt-24">
        <span className="inline-block rounded-full bg-navy-50 px-3.5 py-1 text-xs font-semibold text-navy-500">
          UFHB · Sciences Économiques et de Gestion
        </span>
        <h1 className="mx-auto mt-5 max-w-2xl text-4xl font-semibold leading-[1.15] tracking-tight text-ink sm:text-5xl">
          Toute ta vie académique SEG, réunie au même endroit
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-ink/55">
          Cours, anciens sujets, corrigés et QCM d'entraînement pour la Licence SEG, classés par niveau et par matière.
        </p>

        <div className="mt-10">
          <SearchBar filters={filters} setFilters={setFilters} matieres={matieres} />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="mb-6 flex items-baseline justify-between">
          <h2 className="text-lg font-semibold tracking-tight text-ink">
            {filtered.length} matière{filtered.length > 1 ? 's' : ''} disponible{filtered.length > 1 ? 's' : ''}
          </h2>
        </div>

        {filtered.length === 0 ? (
          <div className="rounded-xl2 border border-dashed border-line py-16 text-center text-sm text-ink/50">
            Aucune matière ne correspond à ta recherche pour le moment.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                onOpen={onOpenCourse}
                onRequestDownload={onRequestDownload}
                isLocked={isLocked}
              />
            ))}
          </div>
        )}
      </section>
    </>
  )
}
