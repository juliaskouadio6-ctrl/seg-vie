import React, { useState, useRef, useEffect } from 'react'
import { Search, ChevronDown } from 'lucide-react'
import { NIVEAUX, TYPES } from '../data/courses.js'

function Segment({ id, label, value, placeholder, options, active, onOpen, isFirst, isLast, onSelect }) {
  return (
    <div className={`relative flex-1 ${isFirst ? 'rounded-l-full' : ''} ${isLast ? 'rounded-r-full' : ''}`}>
      <button
        type="button"
        onClick={() => onOpen(active === id ? null : id)}
        className={`flex w-full flex-col items-start px-6 py-3 text-left transition-colors ${
          isFirst ? 'rounded-l-full' : ''
        } ${isLast ? 'rounded-r-full' : ''} ${active === id ? 'bg-white' : 'hover:bg-navy-50/60'}`}
      >
        <span className="text-[11px] font-semibold uppercase tracking-wide text-ink/45">{label}</span>
        <span className={`text-sm ${value ? 'text-ink font-medium' : 'text-ink/40'}`}>
          {value || placeholder}
        </span>
      </button>

      {active === id && (
        <div className="absolute left-2 top-[calc(100%+10px)] z-30 w-56 rounded-2xl border border-line bg-white p-2 shadow-float">
          <button
            onClick={() => onSelect('')}
            className="w-full rounded-lg px-3 py-2 text-left text-sm text-ink/60 hover:bg-paper"
          >
            Tous
          </button>
          {options.map((opt) => (
            <button
              key={opt}
              onClick={() => onSelect(opt)}
              className="w-full rounded-lg px-3 py-2 text-left text-sm text-ink hover:bg-paper"
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default function SearchBar({ filters, setFilters, matieres }) {
  const [active, setActive] = useState(null)
  const wrapRef = useRef(null)

  useEffect(() => {
    function handleClick(e) {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setActive(null)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <div ref={wrapRef} className="mx-auto flex w-full max-w-3xl items-stretch rounded-full border border-line bg-navy-50/50 shadow-float">
      <Segment
        id="niveau"
        label="Niveau"
        placeholder="Choisir un niveau"
        value={filters.niveau}
        options={NIVEAUX}
        active={active}
        onOpen={setActive}
        isFirst
        onSelect={(v) => {
          setFilters((f) => ({ ...f, niveau: v }))
          setActive(null)
        }}
      />
      <div className="my-2.5 w-px bg-line" />
      <Segment
        id="matiere"
        label="Matière"
        placeholder="Toutes les matières"
        value={filters.matiere}
        options={matieres}
        active={active}
        onOpen={setActive}
        onSelect={(v) => {
          setFilters((f) => ({ ...f, matiere: v }))
          setActive(null)
        }}
      />
      <div className="my-2.5 w-px bg-line" />
      <Segment
        id="type"
        label="Type"
        placeholder="Cours, sujets, QCM…"
        value={filters.type}
        options={TYPES}
        active={active}
        onOpen={setActive}
        onSelect={(v) => {
          setFilters((f) => ({ ...f, type: v }))
          setActive(null)
        }}
      />
      <div className="flex items-center pr-2">
        <button
          type="button"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-600 text-white transition-transform hover:scale-105 active:scale-95"
          aria-label="Rechercher"
        >
          <Search size={18} strokeWidth={2.3} />
        </button>
      </div>
    </div>
  )
}
