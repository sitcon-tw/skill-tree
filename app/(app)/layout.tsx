export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full h-[100svh] items-center justify-center bg-stone-100">
      <div className="flex w-full max-w-[768px] h-[100svh] max-h-[100svh] flex-col bg-stone-200">
        <div className="w-full h-full overflow-hidden touch-none user-select-none flex items-center justify-center flex-1">
          {children}
        </div>
        <div>bottom bar</div>
      </div>
    </div>
  );
}
