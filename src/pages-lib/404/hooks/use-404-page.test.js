import { renderHook } from '@testing-library/react-hooks';
import { use404Page } from './use-404-page';

describe ('use404Page', () => {
  it ('should mount correctly', () => {
    const hook = renderHook (() => use404Page ());
    expect (hook).toBeDefined ();
  });
});
