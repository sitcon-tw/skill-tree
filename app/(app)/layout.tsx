"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
function BottomBarItem({
  children,
  icon,
  href,
}: {
  children: React.ReactNode;
  icon: string;
  href: string;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      className={`w-24 flex flex-col gap-0.5 items-center justify-center text-primary-200 text-sm ${
        isActive ? `font-bold` : `opacity-50 hover:opacity-75`
      }`}
      href={href}
    >
      <div
        className={`w-full text-center  rounded-full p-0.5 ${
          isActive ? `bg-primary-300 text-primary-950` : ``
        }`}
      >
        <span className={`mdi ${icon} text-2xl`}></span>
      </div>
      {children}
    </Link>
  );
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <head>
        <meta name="theme-color" content="#121f39" />
      </head>
      <div className="flex w-full h-[100svh] items-center justify-center bg-zinc-950">
        <div className="flex w-full max-w-[768px] h-[100svh] max-h-[100svh] flex-col bg-primary-950">
          <div className="w-full h-full overflow-hidden touch-none user-select-none flex items-center justify-center flex-1">
            {children}
          </div>
          <div className="flex gap-4 items-center justify-center p-2 bg-black bg-opacity-20">
            <BottomBarItem icon="mdi-tree" href="/tree">
              技能樹
            </BottomBarItem>
            <BottomBarItem icon="mdi-qrcode-scan" href="/scanner">
              掃描器
            </BottomBarItem>
          </div>
        </div>
      </div>
    </>
  );
}
