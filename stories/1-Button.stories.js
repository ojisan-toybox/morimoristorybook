import React from "react";

import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { Button } from "@storybook/react/demo";

export default {
  title: "Storybook Knobs",
  decorators: [withKnobs],
};
// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.

// Knobs for React props
export const withAButton = () => (
  <Button disabled={boolean("Disabled", false)} onClick={action("clicked")}>
    {text("Label", "Hello Storybook")}
  </Button>
);

// Knobs as dynamic variables.
export const asDynamicVariables = () => {
  const name = text("Name", "James");
  const age = number("Age", 35);
  const content = `I am ${name} and I'm ${age} years old.`;

  return <div>{content}</div>;
};
