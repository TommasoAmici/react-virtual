import React, { useRef } from "react";
import { throttle } from "./throttle";
import { useSize } from "./useSize";

type Props<T> = {
  className?: string;
  /**
   * The height of each child. This is used to calculate which items are shown
   */
  rowHeight: number;
  /**
   * Gap between items in pixels
   * @default 0
   * */
  gap?: number;
  /**
   * The list of items to render
   */
  data: T[];
  /**
   * @param datum a single item to render
   * @param translateY the offset calculated from the top. It's important to
   * style the rendered component with this offset, otherwise the list won't
   * render correctly
   * @returns a component to render
   * @example
   * function renderItem(d: (typeof data)[0], translateY: number) {
   *   const style = { transform: `translateY(${translateY}px)` };
   *   return (
   *     <li key={d.id} className="item virtual" style={style}>{d.id}</li>
   *   );
   * }
   */
  renderItem: (datum: T, translateY: number) => React.ReactNode;
  /**
   * This value controls how many items to render outside the current window.
   * A higher value will provide a smoother scrolling experience at the expense
   * of rendering more components
   * @default 10
   */
  overscan?: number;
};

/**
 * A component to virtualize the rendering of a list.
 * Check the Props type for details about the API.
 */
export function VirtualList<T>({
  className,
  rowHeight,
  gap = 0,
  overscan = 10,
  data,
  renderItem,
}: Props<T>) {
  const containerRef = useRef<HTMLUListElement>(null);
  const { height: containerHeight } = useSize(containerRef);

  // when the scroll position is updated, rerender the component
  const [scrollPosition, setScrollPosition] = React.useState(0);
  const onScroll = React.useCallback(
    throttle(function () {
      setScrollPosition(containerRef.current.scrollTop);
    }),
    []
  );

  // calculate the start and end of the current window, based on the scroll
  // position and the desired overscan
  const startIndex = Math.max(
    Math.floor(scrollPosition / rowHeight) - overscan,
    0
  );
  const endIndex = Math.min(
    Math.ceil((scrollPosition + containerHeight) / rowHeight - 1) + overscan,
    data.length - 1
  );

  const children = React.useMemo(() => {
    const visibleChildren = [];
    for (let index = startIndex; index <= endIndex; index++) {
      const translateY = index * rowHeight + index * gap;
      visibleChildren.push(renderItem(data[index], translateY));
    }
    return visibleChildren;
  }, [rowHeight, startIndex, endIndex, gap, data]);

  return (
    <ul ref={containerRef} onScroll={onScroll} className={className}>
      {/**
       * this inner element has the same height that a non-virtualized list
       * would have. This makes it clearer that the list can scroll and it makes
       * it clearer how long the list is.
       * */}
      <div style={{ height: data.length * rowHeight }}>{children}</div>
    </ul>
  );
}
