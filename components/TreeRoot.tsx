import { useState, useEffect, useRef } from "react";
import { motion, useAnimate, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import { useLocalStorage } from "usehooks-ts";
import LeafDialog from "./LeafDialog";
import Leaf from "@/assets/leaf.json";
interface LeafAttr {
  icon: string;
  name: string;
  category: string;
  content: string;
  uuid: string;
}
interface TreeRootAttr {
  icon: string;
  name: string;
  content: string;
  uuid: string;
  top: number;
  left: number;
}
export default function TreeRoot({ root }: { root: TreeRootAttr }) {
  const [show, setShow] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [leafInfo, setLeafInfo] = useState<null | LeafAttr>(null);
  const [unlocked] = useLocalStorage<string[]>("unlocked", []);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    setMounted(true);
    let total = Leaf.filter((x) => x.category === root.name).length;
    let unlockedLeaf = Leaf.filter((x) => x.category === root.name)
      .map((x) => unlocked.includes(x.uuid))
      .filter((x) => x).length;
    setProgress(100 - (unlockedLeaf / total) * 100);
  }, []);
  return (
    <>
      <motion.div
        className={`absolute w-[min(11vw,calc(768px/100*11))] h-[min(11vw,calc(768px/100*11))] text-[min(1.75vw,calc(768px/100*1.75))] text-center text-white rounded-full leading-[1.4em] border-[min(0.5vw,calc(768px/100*0.5))] ${
          root.top > 700 ? `border-[#E8DCA2]` : `border-[#B0FFE7]`
        }`}
        style={{
          top: `${((root.top + (root.top > 700 ? -150 : 0)) / 2380) * 100}%`,
          left: `${(root.left / 1450) * 100}%`,
        }}
        onClick={() => setShow(!show)}
        layoutId={root.uuid}
        layout
      >
        <div className="relative w-full h-full flex items-center justify-center p-[min(1vw,calc(768px/100*1))]">
          {root.name}
          <div
            className={`absolute w-full h-full bottom-0 left-0 rounded-full ${
              root.top > 700 ? `bg-[#B0FFE766]` : `bg-[#B0FFE766]`
            }`}
            style={{
              mask: `linear-gradient(180deg, transparent ${progress}%, #000 ${progress}%)`,
              WebkitMask: `linear-gradient(180deg, transparent ${progress}%, #000 ${progress}%)`,
            }}
          ></div>
        </div>
      </motion.div>
      {mounted &&
        createPortal(
          <AnimatePresence>
            {show && (
              <>
                <motion.div
                  className="fixed left-0 top-0 w-full h-full backdrop-blur bg-black bg-opacity-25 cursor-pointer"
                  onClick={() => setShow(false)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                ></motion.div>
                <motion.div
                  className={`fixed w-[512px] max-w-[95vw] h-[70vh] right-0 bottom-0 left-0 top-0 m-auto cursor-auto flex flex-col ${
                    root.top > 700 ? `bg-[#92DCC6]` : `bg-[#CECECE]`
                  } z-10`}
                  layoutId={root.uuid}
                  layout
                  initial={{ opacity: 0, clipPath: "circle(0% at 50% 50%)" }}
                  animate={{ opacity: 1, clipPath: "circle(100% at 50% 50%)" }}
                  exit={{ opacity: 0, clipPath: "circle(0% at 50% 50%)" }}
                  style={{
                    scale: leafInfo !== null ? 0.925 : 1,
                    translateY: leafInfo !== null ? -48 : 0,
                    filter: leafInfo !== null ? `brightness(0.5)` : `none`,
                  }}
                >
                  <div className="m-4 flex items-center justify-between gap-4 text-2xl">
                    <div className="font-bold flex-1">
                      <span className={`mdi mdi-${root.icon} scale-120`}></span>{" "}
                      {root.name}
                    </div>
                    <div onClick={() => setShow(false)}>
                      <span className="mdi mdi-window-close cursor-pointer"></span>
                    </div>
                  </div>
                  <div className="flex-1 overflow-y-auto">
                    <p className="m-4 mt-0">{root.content}</p>
                    <div className="border-dashed border-t-4 border-[#00000033] m-4"></div>
                    <img
                      src="/imgs/stamp/camp.webp"
                      className="absolute left-0 w-[400px] translate-y-[-100px] user-select-none opacity-30 pointer-events-none"
                    />
                    <div className="grid grid-cols-3 m-4 gap-4">
                      {Leaf.filter((leaf) => leaf.category === root.name).map(
                        (leaf, index) => (
                          <div
                            className={`w-full cursor-pointer aspect-square ${
                              unlocked.includes(leaf.uuid)
                                ? `bg-gray-700`
                                : `bg-gray-100 opacity-50`
                            }`}
                            onClick={() => setLeafInfo(leaf)}
                            style={{
                              mask: `url(/imgs/stamp/${leaf.uuid}.png)`,
                              WebkitMask: `url(/imgs/stamp/${leaf.uuid}.png)`,
                              maskSize: `contain`,
                              WebkitMaskSize: `contain`,
                              maskOrigin: `center`,
                              WebkitMaskOrigin: `center`,
                              maskRepeat: `no-repeat`,
                              WebkitMaskRepeat: `no-repeat`,
                            }}
                            key={index}
                          ></div>
                        )
                      )}
                    </div>
                  </div>
                  <img
                    src={
                      root.top > 700
                        ? "/imgs/bottom-sheet-1.svg"
                        : "/imgs/bottom-sheet-2.svg"
                    }
                    className="w-full absolute -bottom-0 translate-y-[100%]"
                  />
                </motion.div>
              </>
            )}
          </AnimatePresence>,
          document.body
        )}
      <LeafDialog
        leaf={leafInfo}
        close={() => setLeafInfo(null)}
        isRoot={root.top > 700}
      />
    </>
  );
}
