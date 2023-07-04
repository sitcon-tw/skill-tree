export default function Home() {
  return (
    <>
      <head>
        <meta name="theme-color" content="#27272A" />
      </head>
      <div className="bg-zinc-800 text-white min-h-[100svh] p-4 flex items-center justify-center">
        <div className="mx-auto max-w-[612px] w-full p-2">
          <h1 className="text-3xl text-center mb-2">無法解析</h1>
          <p className="text-primary-100 text-center">
            請使用資訊技能樹內建掃描器掃描 QR Code
          </p>
        </div>
      </div>
    </>
  );
}
