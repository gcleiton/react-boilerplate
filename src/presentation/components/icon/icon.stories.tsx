import React from 'react'
import { Story, Meta } from '@storybook/react'

import Icon from './icon'

export default {
  title: 'Icon',
  component: Icon,
  options: ['primary', 'secondary'],
  argTypes: {
    name: {
      options: ['reactLogo'],
      control: { type: 'radio' }
    }
  }
} as Meta

const Template: Story<React.ComponentProps<typeof Icon>> = (args) => (
  <Icon {...args} width="25rem" />
)

export const ReactLogo = Template.bind({})
ReactLogo.args = { name: 'reactLogo' }
ReactLogo.storyName = 'Icon'
