function BottomBarItem({
  children,
  icon,
}: {
  children: React.ReactNode;
  icon: string;
}) {
  return (
    <div className="w-24 flex flex-col gap-0.5 items-center justify-center text-primary-200 font-bold text-sm">
      <div className="w-full text-center bg-primary-300 text-primary-950 rounded-full p-0.5">
        <span className={`mdi ${icon} text-2xl`}></span>
      </div>
      {children}
    </div>
  );
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full h-[100svh] items-center justify-center bg-zinc-950">
      <div className="flex w-full max-w-[768px] h-[100svh] max-h-[100svh] flex-col bg-primary-950">
        <div className="w-full h-full overflow-hidden touch-none user-select-none flex items-center justify-center flex-1">
          {children}
        </div>
        <div className="flex gap-4 items-center justify-center p-2 bg-black bg-opacity-20">
          <BottomBarItem icon="mdi-tree">技能樹</BottomBarItem>
          <BottomBarItem icon="mdi-qrcode-scan">掃描器</BottomBarItem>
        </div>
      </div>
    </div>
  );
}
