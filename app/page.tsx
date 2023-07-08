"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
function GuideImg({ src }: { src: string }) {
  return (
    <img
      src={`/imgs/guide/${src}`}
      className="w-full pointer-events-none user-select-none rounded-sm shadow my-2"
    />
  );
}
export default function Home() {
  const router = useRouter();
  const [click, setClick] = useState(0);
  const [active, setActive] = useState(0);
  useEffect(() => {
    // isSafari
    if (
      navigator.userAgent.indexOf("Safari") != -1 &&
      navigator.userAgent.indexOf("Chrome") == -1
    ) {
      setActive(1);
    }
  }, []);
  useEffect(() => {
    if (click >= 7) {
      router.push("/tree");
    }
  }, [click]);
  return (
    <>
      <head>
        <meta name="theme-color" content="#27272A" />
      </head>
      <div className="bg-zinc-800 text-white min-h-[100svh] p-4">
        <div className="mx-auto max-w-[612px] w-full p-2">
          <h1
            className="text-3xl text-center"
            onClick={() => setClick(click + 1)}
          >
            SITCON Camp
          </h1>
          <h1 className="text-3xl text-center mb-2">資訊技能樹</h1>
          <p className="text-primary-100 text-center">
            嗨，歡迎你使用資訊技能樹！
            <br />
            請按照下列指示將資訊技能樹安裝到桌面。
          </p>
          <div className="bg-zinc-900 px-3 py-4 rounded-lg overflow-hidden mt-4">
            <div className="mb-4">
              <p className="text-xl text-center">選擇瀏覽器</p>
            </div>
            <div className="flex gap-2 mt-4">
              <div
                className={`w-1/2 cursor-pointer text-xl leading-5 transition-all text-primary-100 flex gap-2 items-center justify-center flex-col ${
                  active === 0 ? `` : `opacity-50 hover:opacity-75`
                }`}
                onClick={() => setActive(0)}
              >
                <div className="w-16 h-16 bg-white rounded flex items-center justify-center text-primary-800">
                  <span className="mdi mdi-google-chrome text-5xl"></span>
                </div>
                Chrome
                <span className="text-xs -mt-1.5">Android</span>
              </div>
              <div
                className={`w-1/2 cursor-pointer text-xl leading-5 transition-all text-primary-100 flex gap-2 items-center justify-center flex-col ${
                  active === 1 ? `` : `opacity-50 hover:opacity-75`
                }`}
                onClick={() => setActive(1)}
              >
                <div className="w-16 h-16 bg-white rounded flex items-center justify-center text-primary-800">
                  <span className="mdi mdi-apple-safari text-5xl"></span>
                </div>
                Safari
                <span className="text-xs -mt-1.5">iOS</span>
              </div>
            </div>
            <p className="text-primary-100 mt-4 text-sm text-center opacity-50">
              建議使用上述經測試之瀏覽器，以獲得最佳的使用體驗。
            </p>
          </div>

          {active === 0 && (
            <div className="bg-zinc-900 px-3 py-4 rounded-lg overflow-hidden mt-4">
              <p className="text-xl mb-4">
                <span className="mdi mdi-google-chrome"></span> Chrome
                的安裝方法
              </p>
              <GuideImg src="a-1.png" />
              <p className="text-primary-100 mb-8">
                1. 點選 <span className="mdi mdi-dots-vertical"></span>{" "}
              </p>
              <GuideImg src="a-2.png" />
              <p className="text-primary-100 mb-8">
                2. 點選「加到主畫面」或是「安裝應用程式」。
              </p>
              <GuideImg src="a-3.png" />
              <p className="text-primary-100">3. 點選「新增」，完成安裝。</p>
            </div>
          )}
          {active === 1 && (
            <div className="bg-zinc-900 px-3 py-4 rounded-lg overflow-hidden mt-4">
              <p className="text-xl mb-4">
                <span className="mdi mdi-apple-safari"></span> Safari 的安裝方法
              </p>
              <GuideImg src="i-1.png" />
              <p className="text-primary-100 mb-8">
                1. 點選下方的 <span className="mdi mdi-export-variant"></span>{" "}
                按鈕
              </p>
              <GuideImg src="i-2.png" />
              <p className="text-primary-100 mb-8">2. 點選「加入主畫面」。</p>
              <GuideImg src="i-3.png" />
              <p className="text-primary-100">3. 點選「新增」，完成安裝。</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
