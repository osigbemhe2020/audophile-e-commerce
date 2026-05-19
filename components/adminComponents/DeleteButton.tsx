"use client"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function DeleteButton({ productId }: { productId: string }) {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this product?")) return;

    setIsDeleting(true);
    try {
      await fetch(`/api/admin/products/${productId}`, {
        method: "DELETE",
      });
      router.refresh(); // ✅ refresh the page to show updated list
    } catch (error) {
      console.error("Error deleting product:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <button
      onClick={handleDelete}
      disabled={isDeleting}
      className="text-red-500 hover:underline text-sm disabled:opacity-50"
    >
      {isDeleting ? "Deleting..." : "Delete"}
    </button>
  );
}