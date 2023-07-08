import { motion, useTime, useTransform, easeInOut } from "framer-motion";
import { useState } from "react";
import Roots from "@/assets/root.json";
import TreeRoot from "./TreeRoot";

import OpenSourceSpiritDialog from "./OpenSourceSpiritDialog";
export default function Tree() {
  const [isOpenSourceSpiritDialogOpen, setIsOpenSourceSpiritDialogOpen] =
    useState(false);

  const treeContainer = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      // inset mask
      clipPath: "circle(0% at 50% 50%)",
    },
    visible: {
      opacity: 1,
      scale: 1,
      clipPath: "circle(100% at 50% 50%)",
      transition: {
        duration: 1,
      },
    },
  };

  const time = useTime();
  const warpTime = useTransform(time, (t) => t % 8000);
  const starOpacity1 = useTransform(warpTime, [0, 4000, 8000], [1, 0.2, 1]);
  const starOpacity2 = useTransform(warpTime, [0, 4000, 8000], [0.2, 1, 0.2]);
  const planetY = useTransform(warpTime, [0, 4000, 8000], [0, 25, 0], {
    ease: easeInOut,
  });
  const satelliteY = useTransform(time, [0, 2000], [60, 0], {
    ease: easeInOut,
  });
  const satelliteScale = useTransform(time, [0, 2000], [0.8, 1], {
    ease: easeInOut,
  });
  const planetScale = useTransform(time, [0, 2000], [1.1, 1], {
    ease: easeInOut,
  });
  return (
    <motion.div
      className="w-full relative"
      variants={treeContainer}
      initial="hidden"
      animate="visible"
    >
      <img
        src="/imgs/tree/bg.svg"
        className="w-full user-select-none pointer-events-none scale-[1.1] translate-y-[-3.5%] origin-top"
        draggable="false"
      />
      <motion.img
        src="/imgs/tree/plants1.svg"
        className="absolute -top-[4.8%] -left-[13%] w-[39%] user-select-none pointer-events-none"
        draggable="false"
        style={{ y: planetY }}
      />
      <motion.img
        src="/imgs/tree/plants2.svg"
        className="absolute top-[25.7%] left-0 min-w-[106.7%] user-select-none pointer-events-none"
        draggable="false"
        style={{ scale: planetScale }}
      />
      <motion.img
        src="/imgs/tree/satellite.svg"
        className="absolute top-[38.5%] left-[65.75%] w-[8.4%] user-select-none pointer-events-none"
        draggable="false"
        style={{ y: satelliteY, scale: satelliteScale }}
      />
      <motion.img
        src="/imgs/tree/star1.svg"
        className="absolute top-[38.5%] left-[0] w-[104%] user-select-none pointer-events-none"
        draggable="false"
        style={{ opacity: starOpacity2 }}
      />
      <motion.img
        src="/imgs/tree/star2.svg"
        className="absolute top-[0] left-[0] w-[104%] user-select-none pointer-events-none"
        draggable="false"
        style={{ opacity: starOpacity1 }}
      />
      {/* 開源精神 */}
      <motion.div
        className="absolute top-[42.5%] left-[50%] w-max -translate-x-[50%] -translate-y-[50%] text-[min(3vw,calc(768px/100*3))] text-[#102143] font-bold"
        onClick={() => setIsOpenSourceSpiritDialogOpen(true)}
      >
        開源精神
      </motion.div>
      <OpenSourceSpiritDialog
        isOpen={isOpenSourceSpiritDialogOpen}
        onClose={() => setIsOpenSourceSpiritDialogOpen(false)}
      />
      {/* Roots */}
      {Roots.map((root, index) => (
        <TreeRoot key={index} root={root} />
      ))}
    </motion.div>
  );
}
