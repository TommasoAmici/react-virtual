import { useCallback, useLayoutEffect, useReducer, useRef } from "react";
import { throttle } from "./throttle";

/**
 * @param containerRef container to observe
 * @returns height and width of the container
 */
export function useSize(containerRef: React.MutableRefObject<HTMLElement>) {
  const [, rerender] = useReducer((x) => x + 1, 0);
  const height = useRef<number>();
  const width = useRef<number>();

  const onResize = useCallback(
    throttle(function () {
      height.current = containerRef.current.clientHeight;
      width.current = containerRef.current.clientWidth;
      rerender();
    }),
    []
  );

  useLayoutEffect(() => {
    onResize();

    const observer = new ResizeObserver(onResize);
    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  });

  return { height: height.current, width: width.current };
}
