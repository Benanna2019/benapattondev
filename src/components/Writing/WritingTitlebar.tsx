import * as React from "react";
import { TitleBar } from "../ListDetail/TitleBar";
// import { Plus, Radio } from "react-feather";
// import Button, { GhostButton } from "../Button";
// import { DialogComponent } from "../Dialog";
// import SegmentedControl from "../SegmentedController";
// import { WritingContext } from "./PostsList";
// import { WritingSubscriptionForm } from "./SubscriptionForm";

export function WritingTitlebar({ scrollContainerRef }: any) {
  return <TitleBar title="Writing" scrollContainerRef={scrollContainerRef} />;
}

// function getSubscribeButton() {
//   return (
//     <DialogComponent
//       title="Newsletter"
//       trigger={
//         <Button data-cy="open-subscribe-hn-dialog" size="small">
//           <Radio size={16} />
//           <span>Subscribe</span>
//         </Button>
//       }
//       modalContent={() => <WritingSubscriptionForm />}
//     />
//   );
// }

// function trailingAccessory() {
//   return <div className="flex space-x-2">{getSubscribeButton()}</div>;
// }
