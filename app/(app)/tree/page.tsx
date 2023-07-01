"use client";
import React, { useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import { createUseGesture, dragAction, pinchAction } from "@use-gesture/react";

import Tree from "@/components/Tree";

const useGesture = createUseGesture([dragAction, pinchAction]);

export default function TreePage() {
  useEffect(() => {
    const handler = (e: Event) => e.preventDefault();
    document.addEventListener("gesturestart", handler);
    document.addEventListener("gesturechange", handler);
    document.addEventListener("gestureend", handler);
    return () => {
      document.removeEventListener("gesturestart", handler);
      document.removeEventListener("gesturechange", handler);
      document.removeEventListener("gestureend", handler);
    };
  }, []);
  const [style, api] = useSpring(() => ({
    x: 0,
    y: 0,
    scale: 1,
  }));
  const ref = React.useRef<HTMLDivElement>(null);
  useGesture(
    {
      onDrag: ({ pinching, cancel, offset: [x, y], ...rest }) => {
        if (pinching) return cancel();
        if (x > window.innerWidth / 2 || x < -window.innerWidth / 2)
          return cancel();
        if (y > window.innerHeight / 2 || y < -window.innerHeight / 2)
          return cancel();
        api.start({ x, y });
      },
      onPinch: ({
        origin: [ox, oy],
        first,
        movement: [ms],
        offset: [s, a],
        memo,
      }) => {
        if (first) {
          const { width, height, x, y } = ref.current!.getBoundingClientRect();
          const tx = ox - (x + width / 2);
          const ty = oy - (y + height / 2);
          memo = [style.x.get(), style.y.get(), tx, ty];
        }

        const x = memo[0] - (ms - 1) * memo[2];
        const y = memo[1] - (ms - 1) * memo[3];
        api.start({ scale: s, x, y });
        return memo;
      },
    },
    {
      target: ref,
      drag: { from: () => [style.x.get(), style.y.get()] },
      pinch: { scaleBounds: { min: 0.75, max: 1.25 }, rubberband: true },
    }
  );
  return (
    <animated.div
      className="w-full touch-none cursor-grab user-select-none"
      ref={ref}
      style={style}
    >
      <Tree />
    </animated.div>
  );
}
