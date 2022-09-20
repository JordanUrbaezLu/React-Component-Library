import { ComponentStory, ComponentMeta } from "@storybook/react";
import { AiFillEye, AiOutlineArrowRight } from "react-icons/ai";
import AstroTextField from "./AstroTextField";

export default {
  title: "AstroTextField",
  component: AstroTextField,
} as ComponentMeta<typeof AstroTextField>;

const Template: ComponentStory<typeof AstroTextField> = (args) => {
  return <AstroTextField {...args} />;
};

export const Default = Template.bind({});

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  variant: "tertiary",
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

export const Placeholder = Template.bind({});
Placeholder.args = {
  placeholder: "Search...",
};

// TODO disabled state needs better design
export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const TrailingIcon = Template.bind({});
TrailingIcon.args = {
  trailingIcon: <AiOutlineArrowRight />,
};

export const PasswordType = Template.bind({});
PasswordType.args = {
  type: "password",
};

export const TrailingIconAndPasswordType = Template.bind({});
TrailingIconAndPasswordType.args = {
  type: "password",
  trailingIcon: <AiFillEye />,
};