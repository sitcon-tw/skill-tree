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
        className="absolute -top-[60px] -left-[100px] w-[300px] user-select-none pointer-events-none"
        draggable="false"
      />
      <img
        src="/imgs/tree/plants2.svg"
        className="absolute top-[320px] left-0 min-w-[820px] user-select-none pointer-events-none"
        draggable="false"
      />
      <img
        src="/imgs/tree/satellite.svg"
        className="absolute top-[480px] left-[505px] w-[65px] user-select-none pointer-events-none"
        draggable="false"
      />
      <motion.img
        src="/imgs/tree/star1.svg"
        className="absolute top-[480px] left-[0px] w-[800px] user-select-none pointer-events-none"
        draggable="false"
        variants={starTwinkle}
        initial="hidden"
        animate="visible"
      />
      <motion.img
        src="/imgs/tree/star2.svg"
        className="absolute top-[0px] left-[0px] w-[800px] user-select-none pointer-events-none"
        draggable="false"
        variants={starTwinkle}
        initial="hidden"
        animate="visible"
      />
    </motion.div>
  );
}
