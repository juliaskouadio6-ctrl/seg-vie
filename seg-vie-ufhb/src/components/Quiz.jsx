import React, { useState } from 'react'
import { CheckCircle2, XCircle } from 'lucide-react'

export default function Quiz({ questions }) {
  const [answers, setAnswers] = useState({})

  function select(qIndex, optIndex) {
    if (answers[qIndex] !== undefined) return
    setAnswers((a) => ({ ...a, [qIndex]: optIndex }))
  }

  return (
    <div className="flex flex-col gap-5">
      {questions.map((q, qIndex) => {
        const answered = answers[qIndex]
        return (
          <div key={qIndex} className="rounded-xl2 border border-line bg-white p-5">
            <p className="text-sm font-semibold text-ink">
              {qIndex + 1}. {q.question}
            </p>
            <div className="mt-3 flex flex-col gap-2">
              {q.options.map((opt, optIndex) => {
                const isCorrect = optIndex === q.correct
                const isChosen = answered === optIndex
                let style = 'border-line text-ink/70 hover:border-navy-400/40'
                if (answered !== undefined) {
                  if (isCorrect) style = 'border-emerald-400 bg-emerald-50 text-emerald-700'
                  else if (isChosen) style = 'border-red-300 bg-red-50 text-red-600'
                  else style = 'border-line text-ink/40'
                }
                return (
                  <button
                    key={optIndex}
                    onClick={() => select(qIndex, optIndex)}
                    className={`flex items-center justify-between rounded-xl border px-4 py-2.5 text-left text-sm transition-colors ${style}`}
                  >
                    {opt}
                    {answered !== undefined && isCorrect && <CheckCircle2 size={16} />}
                    {answered !== undefined && isChosen && !isCorrect && <XCircle size={16} />}
                  </button>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}
