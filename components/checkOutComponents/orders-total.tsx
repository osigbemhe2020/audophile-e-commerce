interface OrderTotalsProps {
  subtotal: number
  shipping: number
  vat: number
  grandTotal: number
}

export default function OrderTotals({ subtotal, shipping, vat, grandTotal }: OrderTotalsProps) {
  return (
    <div className="space-y-4 border-t border-gray-200 pt-6">
      <div className="flex justify-between items-center">
        <span className="text-gray-600 text-sm">TOTAL</span>
        <span className="font-bold text-gray-900">$ {subtotal.toLocaleString()}</span>
      </div>

      <div className="flex justify-between items-center">
        <span className="text-gray-600 text-sm">SHIPPING</span>
        <span className="font-bold text-gray-900">$ {(shipping / 100).toFixed(2)}</span>
      </div>

      <div className="flex justify-between items-center">
        <span className="text-gray-600 text-sm">VAT (INCLUDED)</span>
        <span className="font-bold text-gray-900">$ {vat.toLocaleString()}</span>
      </div>

      <div className="flex justify-between items-center border-t border-gray-200 pt-4 mt-4">
        <span className="text-gray-600 text-sm">GRAND TOTAL</span>
        <span className="font-bold text-[var(--main-orange)] text-lg">$ {grandTotal.toLocaleString()}</span>
      </div>
    </div>
  )
}
