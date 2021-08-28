import { render } from '@testing-library/react';

import YieldTable from './yield-table';

describe('YieldTable', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<YieldTable />);
    expect(baseElement).toBeTruthy();
  });
});
