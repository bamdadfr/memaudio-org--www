import {renderHook} from '@testing-library/react-hooks';
import {useWorldLevelPage} from './use-world-level-page';

describe('useWorldLevelPage', () => {
  it('should mount correctly', () => {
    const hook = renderHook(() => useWorldLevelPage('instruments', '1'));
    expect(hook).toBeDefined();
  });
});
