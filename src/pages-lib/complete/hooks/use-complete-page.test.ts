import {renderHook} from '@testing-library/react-hooks';
import {useCompletePage} from './use-complete-page';

describe('useCompletePage', () => {
  it('should mount correctly', () => {
    const hook = renderHook(() => useCompletePage());
    expect(hook).toBeDefined();
  });
});
