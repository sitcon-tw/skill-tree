interface TreeRootAttr {
  icon: string;
  name: string;
  content: string;
  uuid: string;
  top: number;
  left: number;
}
export default function TreeRoot({ root }: { root: TreeRootAttr }) {
  return (
    <div
      className={`absolute w-[min(11vw,calc(768px/100*11))] h-[min(11vw,calc(768px/100*11))] text-[min(1.75vw,calc(768px/100*1.75))] text-center text-white rounded-full translate-x-[-50%] translate-y-[-50%] leading-[1.2em] border-[min(0.5vw,calc(768px/100*0.5))] ${
        root.top > 700 ? `border-[#E8DCA2]` : `border-[#B0FFE7]`
      }`}
      style={{
        top: `${
          ((root.top + (root.top > 700 ? -150 : 0) + 150 / 2) / 2380) * 100
        }%`,
        left: `${((root.left + 150 / 2) / 1450) * 100}%`,
      }}
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
    </div>
  );
}
