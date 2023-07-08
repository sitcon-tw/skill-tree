import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import Root from "@/assets/root.json";
export default function OpenSourceSpiritDialog({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const leaf = Root.find((leaf) => leaf.name === "開源核心")!;
  return (
    mounted &&
    createPortal(
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed left-0 top-0 w-full h-full cursor-pointer z-20 backdrop-blur bg-white bg-opacity-20"
              onClick={() => onClose()}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              className={`fixed w-[512px] max-w-[95vw] h-[300px] max-h-max right-0 bottom-0 left-0 top-0 m-auto cursor-auto z-20 bg-[#e7e7e7] bg-opacity-70 rounded-xl shadow-glass drop-shadow-lg border border-white border-opacity-20`}
              initial={{
                opacity: 0,
                scale: 0,
                clipPath: "circle(0% at 50% 50%)",
                transformOrigin: "50% 50%",
              }}
              animate={{
                opacity: 1,
                scale: 1,
                clipPath: "circle(100% at 50% 50%)",
                transformOrigin: "50% 50%",
              }}
              exit={{
                opacity: 0,
                scale: 0,
                clipPath: "circle(0% at 50% 50%)",
                transformOrigin: "50% 50%",
              }}
            >
              <div className="m-4 flex items-center justify-between gap-4 text-2xl">
                <div className="font-bold flex-1">
                  <span className={`mdi mdi-${leaf.icon} scale-120`}></span>{" "}
                  {leaf.name}
                </div>
                <div onClick={() => onClose()}>
                  <span className="mdi mdi-window-close cursor-pointer"></span>
                </div>
              </div>
              <p className="m-4">{leaf.content}</p>
            </motion.div>
          </>
        )}
      </AnimatePresence>,
      document.body
    )
  );
}
