import { render } from '@testing-library/react';

import NumberInput from './number-input';

describe('NumberInput', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NumberInput />);
    expect(baseElement).toBeTruthy();
  });
});
