export function throttle(func: () => void, delay: number = 100) {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  return function () {
    if (timeout === null) {
      func();
      timeout = setTimeout(() => {
        timeout = null;
      }, delay);
    }
  };
}
