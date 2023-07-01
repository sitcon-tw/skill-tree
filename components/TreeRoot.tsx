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
      className="absolute w-[min(11vw,calc(768px/100*11))] h-[min(11vw,calc(768px/100*11))] text-[min(1.75vw,calc(768px/100*1.75))] text-center text-white rounded-full bg-primary-300 bg-opacity-50 flex items-center justify-center translate-x-[-50%] translate-y-[-50%] p-[min(1vw,calc(768px/100*1))] leading-[1em]"
      style={{
        top: `${
          ((root.top + (root.top > 700 ? -135 : 0) + 150 / 2) / 2380) * 100
        }%`,
        left: `${((root.left + 150 / 2) / 1450) * 100}%`,
      }}
    >
      {root.name}
    </div>
  );
}
