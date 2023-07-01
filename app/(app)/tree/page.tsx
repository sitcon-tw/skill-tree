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
  let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
  let windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;
  useGesture(
    {
      onDrag: ({ pinching, cancel, offset: [x, y], ...rest }) => {
        if (pinching) return cancel();
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
      drag: {
        from: () => [style.x.get(), style.y.get()],
        bounds: {
          left: -windowWidth * 0.5,
          right: windowWidth * 0.5,
          top: -windowHeight * 0.5,
          bottom: windowHeight * 0.5,
        },
        rubberband: true,
      },
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
