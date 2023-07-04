"use client";
import { QrScanner } from "@yudiel/react-qr-scanner";
import { useEffect, useState } from "react";
import { useLocalStorage } from "usehooks-ts";
import Leaf from "@/assets/leaf.json";
export default function Scanner() {
  const [mounted, setMounted] = useState(false);
  const [unlocked, setUnlocked] = useLocalStorage<string[]>("unlocked", []);
  useEffect(() => setMounted(true), []);
  function handleScan(result: string | null) {
    console.log(result);
    let matched = result?.match(/\?id=(.+)&/);
    if (matched) {
      let id = matched[1];
      let leaf = Leaf.find((leaf) => leaf.uuid === id);
      if (!leaf) return alert(`找不到節點！`);
      if (unlocked.includes(id))
        return alert(`「${leaf?.name}」已經被解鎖過了！`);
      else {
        setUnlocked([...unlocked, id]);
        alert(`「${leaf?.name}」解鎖成功！`);
      }
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
