interface SectionLabelProps {
  elevation: string
  title: string
  light?: boolean
}

export function SectionLabel({ elevation, title, light = false }: SectionLabelProps) {
  return (
    <p className={`text-xs font-mono uppercase tracking-widest mb-4 ${
      light ? 'text-neutral-500' : 'text-neutral-400'
    }`}>
      Elevation {elevation} — {title}
    </p>
  )
}
