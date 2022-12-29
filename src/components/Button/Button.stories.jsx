import React from 'react'

import Button from './index'

export default {
  title: 'components/Button',
  component: Button
}

const Template = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Connect Wallet',
  pixel: false,
  onClick: false,
  to: false
}

export const Big = Template.bind({})
Big.args = {
  children: 'Connect Wallet',
  pixel: true,
  onClick: false,
  to: false
}
