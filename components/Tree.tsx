import { motion } from "framer-motion";
export default function Tree() {
  const starTwinkle = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 1,
      },
    },
  };
  const treeContainer = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      className="w-full relative"
      variants={treeContainer}
      initial="hidden"
      animate="visible"
    >
      <img
        src="/imgs/tree/bg.svg"
        className="w-full border border-white user-select-none pointer-events-none"
        draggable="false"
      />
      <img
        src="/imgs/tree/plants1.svg"
        className="absolute -top-[4.8%] -left-[13%] w-[39%] user-select-none pointer-events-none"
        draggable="false"
      />
      <img
        src="/imgs/tree/plants2.svg"
        className="absolute top-[25.7%] left-0 min-w-[106.7%] user-select-none pointer-events-none"
        draggable="false"
      />
      <img
        src="/imgs/tree/satellite.svg"
        className="absolute top-[38.5%] left-[65.75%] w-[8.4%] user-select-none pointer-events-none"
        draggable="false"
      />
      <motion.img
        src="/imgs/tree/star1.svg"
        className="absolute top-[38.5%] left-[0] w-[104%] user-select-none pointer-events-none"
        draggable="false"
        variants={starTwinkle}
        initial="hidden"
        animate="visible"
      />
      <motion.img
        src="/imgs/tree/star2.svg"
        className="absolute top-[0] left-[0] w-[104%] user-select-none pointer-events-none"
        draggable="false"
        variants={starTwinkle}
        initial="hidden"
        animate="visible"
      />
      {/* 開源精神 */}
      <div className="absolute top-[42%] left-[50%] w-max -translate-x-[50%] -translate-y-[50%] text-[min(3vw,calc(768px/100*3))] text-[#102143] font-bold">
        開源精神
      </div>
    </motion.div>
  );
}
