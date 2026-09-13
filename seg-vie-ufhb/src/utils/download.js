// Simule le téléchargement d'un PDF tant que les vrais fichiers ne sont pas
// branchés (Supabase Storage viendra remplacer ceci plus tard).
export function triggerDownload(course, type) {
  const label = type === 'corrige' ? 'Corrigé' : 'Cours'
  const content = `SEG VIE - UFHB\n${label} — ${course.matiere} (${course.niveau} ${course.semestre})\n\nCeci est un fichier de démonstration.\nLe vrai document PDF sera servi depuis le stockage une fois branché.`
  const blob = new Blob([content], { type: 'application/pdf' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `${course.matiere.replace(/\s+/g, '-')}-${label}.pdf`
  document.body.appendChild(a)
  a.click()
  a.remove()
  URL.revokeObjectURL(url)
}
