import { useState, useEffect, useRef } from "react";
import { motion, useAnimate, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
export default function LeafDialog({
  leaf,
  close,
}: {
  leaf?: any;
  close: () => void;
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
              className="fixed left-0 top-0 w-full h-full backdrop-blur bg-black bg-opacity-25 cursor-pointer z-20"
              onClick={() => close()}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            ></motion.div>
            <motion.div
              className={`fixed w-[512px] max-w-[95vw] h-[70vh] right-0 bottom-0 left-0 top-0 m-auto cursor-auto overflow-y-auto z-20 bg-white`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
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
              <div className="border-dashed border-t-4 border-[#00000033] m-4"></div>
              <img
                src="/imgs/stamp/camp.webp"
                className="absolute left-0 w-[400px] translate-y-[-100px] user-select-none opacity-30"
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>,
      document.body
    )
  );
}
