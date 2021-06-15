import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LabeledInput from './LabeledInput';

test('renders LabeledInput', () => {
  render(
    <LabeledInput label="" placeholder="Party" value="" onChange={jest.fn()} />
  );
  expect(screen.getByRole('textbox')).toHaveProperty('placeholder', 'Party');
});

test('calls onChange with value', () => {
  const handleChange = jest.fn();
  render(
    <LabeledInput
      label=""
      placeholder="Keyword..."
      value=""
      onChange={handleChange}
    />
  );

  fireEvent.change(screen.getByRole('textbox'), { target: { value: 'beer' } });
  expect(handleChange).toBeCalledWith('beer');
});
