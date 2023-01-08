// learned from https://samuelkraft.com/blog/segmented-control-framer-motion
import { AnimateSharedLayout, motion } from "framer-motion";
import { useState } from "react";

type Item = {
  id: string;
  label: string;
};

type SegmentedControlProps = {
  onSetActiveItem: any;
  items: Array<Item>;
  active: string;
};

const SegmentedControl = ({
  onSetActiveItem,
  items,
  active,
}: SegmentedControlProps): JSX.Element => {
  const [activeItem, setActiveitem] = useState(active);

  function onChange(i: number) {
    setActiveitem(items[i]?.id as string);
    onSetActiveItem(items[i]?.id);
  }

  return (
    //@ts-ignore
    <AnimateSharedLayout>
      <ol
        className={`flex list-none rounded-md bg-space bg-opacity-5 p-1`}
      >
        {items.map((item, i) => {
          const isActive = items[i]?.id === activeItem;
          const statusInput =
            items[i]?.id === activeItem ? `${items[i]?.id}` : undefined; // should never be undefined
          return (
            <motion.li
              className="relative flex-1 leading-none"
              whileTap={isActive ? { scale: 0.95 } : { opacity: 0.6 }}
              key={item.id}
            >
              <input type="hidden" name="status" value={statusInput} />
              <button
                onClick={() => onChange(i)}
                type="button"
                className={`relative w-full cursor-pointer bg-transparent px-4 py-1.5 text-xs font-semibold leading-none ${
                  isActive
                    ? `text-white text-opacity-100`
                    : `text-white text-opacity-60 hover:text-opacity-100`
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="SegmentedControlActive"
                    className="z-1 absolute top-0 bottom-0 left-0 right-0 rounded bg-space shadow-sm content-none"
                  />
                )}
                <span className="z-2 relative">{item.label}</span>
              </button>
            </motion.li>
          );
        })}
      </ol>
    </AnimateSharedLayout>
  );
};

export default SegmentedControl;
