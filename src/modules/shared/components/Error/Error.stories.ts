import type { Meta, StoryObj } from '@storybook/react'

import { Error } from './Error'

const meta: Meta<typeof Error> = {
  component: Error
}

export default meta
type Story = StoryObj<typeof Error>

export const Primary: Story = {
  args: {
    message: 'Erro ao buscar'
  }
}
