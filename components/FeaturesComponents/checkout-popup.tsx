import { Check } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface OrderConfirmationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  productImage?: string;
  productName?: string;
  productPrice?: string;
  quantity?: number;
  otherItemsCount?: number;
  grandTotal?: string;
  onBackToHome?: () => void;
}

const OrderConfirmationDialog = ({
  open,
  onOpenChange,
  productImage = "/placeholder.svg",
  productName = "XX99 MK II",
  productPrice = "$2,999",
  quantity = 1,
  otherItemsCount = 2,
  grandTotal = "$5,446",
  onBackToHome,
}: OrderConfirmationDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md p-8">
        <DialogHeader className="space-y-6">
          <div className="w-16 h-16 rounded-full bg-[#D87D4A] flex items-center justify-center">
            <Check className="w-8 h-8 text-white" strokeWidth={3} />
          </div>
          <div className="space-y-4 text-left">
            <DialogTitle className="text-2xl font-bold leading-tight tracking-wide">
              THANK YOU
              <br />
              FOR YOUR ORDER
            </DialogTitle>
            <p className="text-muted-foreground text-sm">
              You will receive an email confirmation shortly.
            </p>
          </div>
        </DialogHeader>

        <div className="mt-6 rounded-lg overflow-hidden">
          <div className="grid grid-cols-[1fr_auto]">
            {/* Product Summary */}
            <div className="bg-muted p-6 space-y-4">
              <div className="flex items-center gap-4">
                <img
                  src={productImage}
                  alt={productName}
                  className="w-12 h-12 rounded object-cover"
                />
                <div className="flex-1">
                  <p className="font-bold text-sm">{productName}</p>
                  <p className="text-sm text-muted-foreground">{productPrice}</p>
                </div>
                <p className="text-sm text-muted-foreground font-bold">
                  x{quantity}
                </p>
              </div>
              {otherItemsCount > 0 && (
                <div className="pt-3 border-t border-border">
                  <p className="text-xs text-muted-foreground text-center">
                    and {otherItemsCount} other item(s)
                  </p>
                </div>
              )}
            </div>

            {/* Grand Total */}
            <div className="bg-black text-white p-6 flex flex-col justify-center min-w-[180px]">
              <p className="text-muted-foreground text-xs mb-2 opacity-50">
                GRAND TOTAL
              </p>
              <p className="text-lg font-bold">{grandTotal}</p>
            </div>
          </div>
        </div>

        <Button
          onClick={onBackToHome}
          className="w-full mt-6 bg-[#D87D4A] hover:bg-[#D87D4A]/90 text-white h-12 text-sm font-bold tracking-wider"
        >
          BACK TO HOME
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default OrderConfirmationDialog;
