type Props = {
  items: string[];
};

export default function InTheBoxSection({ items }: Props) {

  return (
    <div>
      <h2 className="text-2xl font-bold tracking-tight mb-8 uppercase">In The Box</h2>
      <ul className="space-y-4">
        {items.map((item, index) => (
          <li key={index} className="flex gap-6 text-muted-foreground">
            <span className="text-orange-500 font-semibold flex-shrink-0">1x</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
