import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import AstroPopover from "./AstroPopover";
import AstroButton from "../AstroButton/AstroButton";

export default {
  title: "AstroPopover",
  componet: AstroPopover,
} as ComponentMeta<typeof AstroPopover>;

const Template: ComponentStory<typeof AstroPopover> = (args) => {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <AstroPopover
      isOpen={isOpen}
      {...args}
      text="Popover"
      trigger={
        <AstroButton onClick={() => setIsOpen(!isOpen)}>Trigger</AstroButton>
      }
    />
  );
};

// found a bug with popover where the parent should have 
// position: "relative" and child should have position: "absoulte"

export const Default = Template.bind({});
