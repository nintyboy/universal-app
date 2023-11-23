import React from 'react';
import { View } from 'react-native';
import { MyButton, MyButtonProps } from '@/ui/components/Button';
import {Meta, StoryObj} from '@storybook/react-native';

const meta: Meta<MyButtonProps> = {
  title: 'Button',
  component: MyButton,
  argTypes: {
    onPress: { action: 'onPress' },
  },
  decorators: [
    (Story) => (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Story />
      </View>
    
    ),
  ]
};

export default meta;

type Story = StoryObj<MyButtonProps>;

export const Default: Story = {
  storyName: 'Default',
  args: {
    text: 'Tap Me',
    disabled: false,
  },
};

export const Disabled: Story = {
  storyName: 'Disabled',
  args: {
    text: 'Tap Me',
    disabled: true,
  },
};
