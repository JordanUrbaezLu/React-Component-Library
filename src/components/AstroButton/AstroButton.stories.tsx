import { ComponentStory, ComponentMeta } from "@storybook/react";
import AstroButton from "./AstroButton";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

export default {
  title: "AstroButton",
  component: AstroButton,
} as ComponentMeta<typeof AstroButton>;

const Template: ComponentStory<typeof AstroButton> = (args) => (
  <AstroButton {...args}>Button</AstroButton>
);

export const Default = Template.bind({});

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const LeadingIcon = Template.bind({});
LeadingIcon.args = {
    leadingIcon: <AiOutlineArrowLeft />,
}

export const TrailingIcon = Template.bind({});
TrailingIcon.args = {
    trailingIcon: <AiOutlineArrowRight />,
}

export const LeadingIconAndTrailingIcon = Template.bind({});
LeadingIconAndTrailingIcon.args = {
    leadingIcon: <AiOutlineArrowLeft />,
    trailingIcon: <AiOutlineArrowRight />
}

