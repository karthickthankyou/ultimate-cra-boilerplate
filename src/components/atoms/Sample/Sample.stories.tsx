import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Sample from './Sample'

export default {
  title: 'atoms/Sample',
  component: Sample,
} as ComponentMeta<typeof Sample>

const Template: ComponentStory<typeof Sample> = (args) => <Sample />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
