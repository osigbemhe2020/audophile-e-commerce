import { useState } from "react";
import { Check } from "lucide-react";

interface OrderItem {
  id: string;
  name: string;
  shortName: string;
  price: number;
  quantity: number;
  image: string;
}

interface ThankYouModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: OrderItem[];
  grandTotal: number;
}

const ThankYouModal = ({ isOpen, onClose, items, grandTotal }: ThankYouModalProps) => {
  const [showAllItems, setShowAllItems] = useState(false);

  if (!isOpen) return null;

  const displayedItems = showAllItems ? items : items.slice(0, 1);
  const remainingCount = items.length - 1;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 z-40 bg-black/40" 
        onClick={onClose} 
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-6 pointer-events-none">
        <div className="bg-white rounded-lg p-8 md:p-12 max-w-lg w-full pointer-events-auto animate-in fade-in zoom-in-95 duration-200">
          {/* Checkmark Icon */}
          <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-8">
            <Check className="w-8 h-8 text-white" strokeWidth={3} />
          </div>

          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-foreground uppercase tracking-wide leading-tight mb-4">
            Thank you<br />for your order
          </h2>

          {/* Subtitle */}
          <p className="text-muted-foreground text-sm mb-8">
            You will receive an email confirmation shortly.
          </p>

          {/* Order Summary */}
          <div className="flex flex-col md:flex-row rounded-lg overflow-hidden mb-8">
            {/* Items List */}
            <div className="bg-secondary flex-1 p-6">
              {displayedItems.map((item, index) => (
                <div 
                  key={item.id} 
                  className={`flex items-center gap-4 ${index !== displayedItems.length - 1 ? 'mb-4' : ''}`}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <p className="font-bold text-foreground text-sm">{item.shortName}</p>
                    <p className="text-muted-foreground text-sm">$ {item.price.toLocaleString()}</p>
                  </div>
                  <span className="text-muted-foreground font-bold text-sm">
                    x{item.quantity}
                  </span>
                </div>
              ))}

              {/* View more/less toggle */}
              {items.length > 1 && (
                <>
                  <div className="border-t border-border mt-4 pt-3">
                    <button
                      onClick={() => setShowAllItems(!showAllItems)}
                      className="w-full text-center text-muted-foreground text-xs font-bold tracking-tight hover:text-foreground transition-colors"
                    >
                      {showAllItems ? 'View less' : `and ${remainingCount} other item(s)`}
                    </button>
                  </div>
                </>
              )}
            </div>

            {/* Grand Total */}
            <div className="bg-foreground p-6 flex flex-col justify-center md:w-44">
              <p className="text-muted uppercase text-xs tracking-wider mb-2">
                Grand Total
              </p>
              <p className="text-white font-bold text-lg">
                $ {grandTotal.toLocaleString()}
              </p>
            </div>
          </div>

          {/* Back to Home Button */}
          <button 
            onClick={onClose}
            className="btn-primary w-full"
          >
            Back to Home
          </button>
        </div>
      </div>
    </>
  );
};

export default ThankYouModal;
