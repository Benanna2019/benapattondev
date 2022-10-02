import * as React from "react";
import { TitleBar } from "../../components/ListDetail/TitleBar";

import { LinksFilterMenu } from "./LinksFilterMenu";

export function LinksTitlebar({ scrollContainerRef }: any) {
  function trailingAccessory() {
    return (
      <div className="flex space-x-2">
        <LinksFilterMenu />
      </div>
    );
  }

  return (
    <TitleBar
      scrollContainerRef={scrollContainerRef}
      title="Links"
      trailingAccessory={trailingAccessory()}
    />
  );
}
