import type { Meta, StoryObj } from '@storybook/react';

import { Card } from './Card';

const meta: Meta<typeof Card> = {
  component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Primary: Story = {
  args: {
  title: 'Badland Hunters',
  imageUrl: 'https://image.tmdb.org/t/p/w500/zVMyvNowgbsBAL6O6esWfRpAcOb.jpg',
  desc: '2024',
  width: 300,
  height: 400
  },
};