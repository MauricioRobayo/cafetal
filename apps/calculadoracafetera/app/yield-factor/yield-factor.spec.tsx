import { render } from '@testing-library/react';

import YieldFactor from './yield-factor';

describe('YieldFactor', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<YieldFactor />);
    expect(baseElement).toBeTruthy();
  });
});
