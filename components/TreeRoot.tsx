import { useState, useEffect } from "react";
import { motion, useAnimate, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
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
              mask: `linear-gradient(180deg, transparent 50%, #000 50%)`,
              WebkitMask: `linear-gradient(180deg, transparent 50%, #000 50%)`,
            }}
          ></div>
        </div>
      </motion.div>
      {createPortal(
        <AnimatePresence>
          {show && (
            <motion.div
              className="fixed left-0 top-0 w-full h-full backdrop-blur bg-black bg-opacity-25 cursor-pointer"
              onClick={() => setShow(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className={`fixed w-[512px] max-w-[95vw] h-[70vh] right-0 bottom-0 left-0 top-0 m-auto bg-white cursor-auto ${
                  root.top > 700 ? `bg-[#92DCC6]` : `bg-[#CECECE]`
                } z-10`}
                layoutId={root.uuid}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="m-4 flex items-center justify-between gap-4">
                  <div className="text-xl font-bold">
                    {" "}
                    <span
                      className={`mdi mdi-${root.icon} scale-110`}
                    ></span>{" "}
                    {root.name}
                  </div>
                  <div onClick={() => setShow(false)}>close</div>
                </div>
                <p className="m-4">{root.content}</p>
                <img
                  src={
                    root.top > 700
                      ? "/imgs/bottom-sheet-1.svg"
                      : "/imgs/bottom-sheet-2.svg"
                  }
                  className="w-full absolute -bottom-10"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document?.body
      )}
    </>
  );
}
