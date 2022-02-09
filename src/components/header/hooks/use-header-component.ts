import {ChangeEvent} from 'react';
import {useHeaderState} from './use-header-state';
import {useHeaderSelect} from './use-header-select';
import {useHeaderVolume} from './use-header-volume';

export type UseHeaderComponent = {
  world: string;
  level: string;
  worldKeys: string[];
  levelKeys: string[];
  handleChange: (event: ChangeEvent<HTMLSelectElement>, type: string) => void;
  handleSubmit: () => void;
  submitVisible: boolean;
  volume: number;
  handleVolume: (v: number) => void;
}

/**
 * Entry hook for the header component
 *
 * @returns {UseHeaderComponent} - The hook
 */
export function useHeaderComponent(): UseHeaderComponent {
  const {
    world,
    level,
    worldKeys,
    levelKeys,
    handleChange,
  } = useHeaderState();

  const {handleSubmit, submitVisible} = useHeaderSelect(world, level);
  const {volume, handleVolume} = useHeaderVolume();

  return {
    world,
    level,
    worldKeys,
    levelKeys,
    handleChange,
    handleSubmit,
    submitVisible,
    volume,
    handleVolume,
  };
}
