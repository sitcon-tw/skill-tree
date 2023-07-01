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
      className="absolute w-[min(11vw,calc(768px/100*11))] h-[min(11vw,calc(768px/100*11))] text-[min(2vw,calc(768px/100*2))] text-center text-white rounded-full bg-primary-300 bg-opacity-50 flex items-center justify-center translate-x-[-50%] translate-y-[-50%] p-2"
      style={{
        top: `${((root.top + 150 / 2) / 2335) * 100}%`,
        left: `${((root.left + 150 / 2) / 1440) * 100}%`,
      }}
    >
      {root.name}
    </div>
  );
}
