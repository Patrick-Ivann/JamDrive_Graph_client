import { useState, useRef, useEffect, useLayoutEffect } from "react";

/**
 * custom Function to check for props changes
 * @param {Object} props
 */
export function useTraceUpdate(props) {
  const prev = useRef(props);
  useEffect(() => {
    const changedProps = Object.entries(props).reduce((ps, [k, v]) => {
      if (prev.current[k] !== v) {
        ps[k] = [prev.current[k], v];
      }
      return ps;
    }, {});
    if (Object.keys(changedProps).length > 0) {
      console.log("Changed props:", changedProps);
    }
    prev.current = props;
  });
}

/**
 * Custom Hook to handle Modal
 * Returns a stateful value, and a function to update it.
 */
export const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);

  function toggle() {
    setIsShowing(!isShowing);
  }

  return {
    isShowing,
    toggle
  };
};
/**
 * Custom Hook to handle Poppup
 * Returns a stateful value, and a function to update it.
 * @returns { {isPoppedUp: Boolean} {show: function}}
 */
export const usePopover = () => {
  const [isPoppedUp, setIsPoppedUp] = useState(false);

  function show() {
    setIsPoppedUp(!isPoppedUp);
  }

  useLayoutEffect(() => {
    return () => {
      if (isPoppedUp) document.addEventListener("click", show());
      if (!isPoppedUp) document.removeEventListener("click", show());
    };
  }, [isPoppedUp]);

  return {
    isPoppedUp,
    show
  };
};
