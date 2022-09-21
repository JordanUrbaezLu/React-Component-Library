import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import AstroCheckbox from "./AstroCheckbox";

export default {
  title: "AstroCheckbox",
  componet: AstroCheckbox,
} as ComponentMeta<typeof AstroCheckbox>;

const Template: ComponentStory<typeof AstroCheckbox> = (args) => {
  return <AstroCheckbox />;
};

export const Default = Template.bind({});
