import { ComponentStory, ComponentMeta } from "@storybook/react";
import AstroSelect from "./AstroSelect";
import AstroSelectItem from "./AstroSelectItem/AstroSelectItem";

export default {
  title: "AstroSelect",
  component: AstroSelect,
} as ComponentMeta<typeof AstroSelect>;

const Template: ComponentStory<typeof AstroSelect> = (args) => {
  return (
    <AstroSelect {...args}>
      <AstroSelectItem value="30" />
      <AstroSelectItem value="40" />
      <AstroSelectItem value="50" />
    </AstroSelect>
  );
};

export const Default = Template.bind({});


