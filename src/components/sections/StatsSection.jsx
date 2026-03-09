import { useEffect, useState } from 'react'
import AnimatedSection from '../ui/AnimatedSection'
import GlassCard from '../ui/GlassCard'

const stats = [
  { value: 15, suffix: '+', label: 'Years Experience' },
  { value: 1500, suffix: '+', label: 'Clients' },
  { value: 2500, suffix: '+', label: 'Projects' },
  { value: 150, suffix: '+', label: 'Developers' },
]

function Counter({ value, suffix }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let current = 0
    const step = Math.ceil(value / 45)
    const id = setInterval(() => {
      current += step
      if (current >= value) {
        current = value
        clearInterval(id)
      }
      setCount(current)
    }, 28)

    return () => clearInterval(id)
  }, [value])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

export default function StatsSection() {
  return (
    <AnimatedSection className="section-space bg-secondary text-white">
      <div className="container-shell grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <GlassCard key={stat.label} className="border-white/20 bg-white/10 text-center text-white">
            <div className="font-display text-4xl font-bold">
              <Counter value={stat.value} suffix={stat.suffix} />
            </div>
            <p className="mt-2 text-sm text-white/80">{stat.label}</p>
          </GlassCard>
        ))}
      </div>
    </AnimatedSection>
  )
}
