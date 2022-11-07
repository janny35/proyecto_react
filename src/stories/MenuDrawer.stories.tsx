import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import MenuDrawer from '../components/MenuDrawer';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/MenuDrawer',
  component: MenuDrawer,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof MenuDrawer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MenuDrawer> = (args) => <MenuDrawer {...args} />;

export const Menu = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Menu.args = {
  labels: ['home','usuarios'],
};
