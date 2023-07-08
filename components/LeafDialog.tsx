import { useState, useEffect, useRef } from "react";
import { motion, useAnimate, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
export default function LeafDialog({
  leaf,
  close,
  isRoot = false,
}: {
  leaf?: any;
  close: () => void;
  isRoot?: boolean;
}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    mounted &&
    createPortal(
      <AnimatePresence>
        {leaf && (
          <>
            <motion.div
              className="fixed left-0 top-0 w-full h-full cursor-pointer z-20"
              onClick={() => close()}
            ></motion.div>
            <motion.div
              className={`fixed w-[512px] max-w-[95vw] h-[70vh] right-0 bottom-0 left-0 top-0 m-auto cursor-auto z-20 ${
                isRoot ? `bg-[#92DCC6]` : `bg-[#CECECE]`
              }`}
              initial={{ opacity: 0, y: 360 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 360 }}
            >
              <div className="m-4 flex items-center justify-between gap-4 text-2xl">
                <div className="font-bold flex-1">
                  <span className={`mdi mdi-${leaf.icon} scale-120`}></span>{" "}
                  {leaf.name}
                </div>
                <div onClick={() => close()}>
                  <span className="mdi mdi-window-close cursor-pointer"></span>
                </div>
              </div>
              <p className="m-4">{leaf.content}</p>
              <img
                src={
                  isRoot
                    ? "/imgs/bottom-sheet-2.svg"
                    : "/imgs/bottom-sheet-1.svg"
                }
                className="w-full absolute -bottom-0 translate-y-[100%]"
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>,
      document.body
    )
  );
}
