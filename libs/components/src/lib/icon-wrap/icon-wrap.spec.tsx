import { render } from '@testing-library/react';

import IconWrap from './icon-wrap';

describe('IconWrap', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<IconWrap />);
    expect(baseElement).toBeTruthy();
  });
});
