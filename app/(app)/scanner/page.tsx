"use client";
import { QrScanner } from "@yudiel/react-qr-scanner";
import { useEffect, useState } from "react";
export default function Scanner() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  function handleScan(result: string | null) {
    console.log(result);
    let matched = result?.match(/\?id=(.+)&/);
    if (matched) {
      let id = matched[1];
      alert(`id: ${id}`);
    }
  }
  return mounted ? (
    <QrScanner
      onDecode={(result) => handleScan(result)}
      onError={(error) => console.log(error?.message)}
    />
  ) : (
    <p>loading...</p>
  );
}
