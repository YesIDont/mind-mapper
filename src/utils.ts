/** Make sure the passed value is not undefined or null */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const check = (obj: any, message?: string): boolean => {
  if (obj === undefined || obj === null) {
    console.trace();
    throw new Error(message ?? 'Check failed');
  }

  return true;
};

export const getSafe = <T>(obj: T | undefined | null): T => {
  check(obj);

  return obj as T;
};

export const awaitCondition = (callback: () => boolean, timeout: number, safeBreakCount = 100): Promise<void> =>
  new Promise((resolve) => {
    let count = 0;
    const test = () => {
      count++;
      if (callback() || count >= safeBreakCount) {
        return resolve();
      }

      setTimeout(test, timeout);
    };

    test();
  });

export const clamp = (n: number, min: number, max: number): number => Math.min(Math.max(n, min), max);
