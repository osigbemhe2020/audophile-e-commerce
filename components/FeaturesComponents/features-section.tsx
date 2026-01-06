export default function FeaturesSection({ features }: { features: string }) {
  return (
    <div>
      <h2 className="text-2xl font-bold tracking-tight mb-8 uppercase">Features</h2>
      <p className="text-muted-foreground leading-relaxed space-y-6">
        <span className="block">
          {features}
        </span>
      </p>
    </div>
  )
}
