import * as React from "react";

export function ListContainer({ children, onRef, ...rest }: any) {
  const scrollContainerRef = React.useRef(null);

  React.useEffect(() => {
    onRef(scrollContainerRef);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollContainerRef]);

  return (
    <div
      ref={scrollContainerRef}
      className="relative h-full max-h-screen min-h-screen w-full flex-none overflow-y-auto border-r border-slate-300 bg-space-light lg:w-80 xl:w-96"
      {...rest}
    >
      {children}
    </div>
  );
}
