// app/test-add-products.tsx
"use client";
import { useEffect } from "react";
import { db, storage } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export default function AddSampleProducts() {
  useEffect(() => {
    const uploadProduct = async (fileName: string, title: string, price: number, description: string) => {
      const response = await fetch(`/images/${fileName}`);
      const blob = await response.blob();

      const storageRef = ref(storage, `/images/${fileName}`);
      await uploadBytes(storageRef, blob);

      const imageUrl = await getDownloadURL(storageRef);

      await addDoc(collection(db, "products"), {
        title,
        price,
        description,
        category: "Dry Fruits",
        imageUrl,
      });
    };

    const runUpload = async () => {
      await uploadProduct("Almonds.jpg", "Almonds", 599, "Premium Kashmiri almonds rich in nutrients.");
      await uploadProduct("walnuts.jpg", "Walnuts", 699, "Organic Kashmiri walnuts with hard shell and soft core.");
      alert("Sample products added with Firebase Storage images.");
    };

    runUpload();
  }, []);

  return <p className="text-center p-6">Uploading images & adding products...</p>;
}
