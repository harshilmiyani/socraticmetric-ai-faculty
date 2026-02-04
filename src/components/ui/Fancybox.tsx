"use client";

import React, { useRef, useEffect } from "react";
import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

interface Props {
  delegate?: string;
  options?: Record<string, any>;
  children: React.ReactNode;
  className?: string;
}

function Fancybox(props: Props) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const delegate = props.delegate || "[data-fancybox]";
    const options = props.options || {};

    NativeFancybox.bind(container, delegate, options);

    return () => {
      NativeFancybox.unbind(container);
      NativeFancybox.close();
    };
  }, [props.delegate, props.options]);

  return (
    <div ref={containerRef} className={props.className}>
      {props.children}
    </div>
  );
}

export default Fancybox;
