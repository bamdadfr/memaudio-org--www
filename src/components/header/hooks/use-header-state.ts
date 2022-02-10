import {useCallback, useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import {UseHeaderComponent} from './use-header-component';
import {fetchWorlds} from '../../../utils/fetch-worlds';
import {fetchLevels} from '../../../utils/fetch-levels';
import {fetchFirstLevel} from '../../../utils/fetch-first-level';

type UseHeaderState = {
  world: UseHeaderComponent['world'];
  worldKeys: UseHeaderComponent['worldKeys'];
  level: UseHeaderComponent['level'];
  levelKeys: UseHeaderComponent['levelKeys'];
  handleChange: UseHeaderComponent['handleChange'];
}

/**
 * Hook to manage the state of the header component
 *
 * @returns {UseHeaderComponent} - The state of the header component
 */
export function useHeaderState(): UseHeaderState {
  const router = useRouter();
  const [currentWorld, setCurrentWorld] = useState<string>(!Array.isArray(router.query.world) && router.query.world);
  const [currentLevel, setCurrentLevel] = useState<string>(!Array.isArray(router.query.level) && router.query.level);
  const [worldKeys, setWorldKeys] = useState<string[]>();
  const [levelKeys, setLevelKeys] = useState<string[]>();

  // get current currentWorld and currentLevel
  useEffect(() => {
    const {world, level} = router.query;

    if (!Array.isArray(world)) {
      setCurrentWorld(world);
    }

    if (!Array.isArray(level)) {
      setCurrentLevel(level);
    }
  }, [router.query]);

  // get all worlds and levels
  useEffect(() => {
    if (!currentWorld) {
      return;
    }

    (async () => {
      const worlds = await fetchWorlds();
      const levels = await fetchLevels(currentWorld);
      setWorldKeys(worlds);
      setLevelKeys(levels);
    })();
  }, [currentWorld]);

  // if currentLevel does not exist, set it to first
  useEffect(() => {
    if (!currentWorld) {
      return;
    }

    if (!currentLevel) {
      return;
    }

    if (!levelKeys) {
      return;
    }

    // currentLevel exist in levelKeys?
    if (levelKeys.indexOf(currentLevel) >= 0 && levelKeys.indexOf(currentLevel) <= levelKeys.length) {
      return;
    }

    (async () => {
      const firstLevel = await fetchFirstLevel(currentWorld);
      setCurrentLevel(firstLevel);
    })();
  }, [currentWorld, currentLevel, levelKeys]);

  const handleChange: UseHeaderState['handleChange'] = useCallback((e, type) => {
    if (type === 'world') {
      setCurrentWorld(e.target.value);
    }

    if (type === 'level') {
      setCurrentLevel(e.target.value);
    }
  }, []);

  return {
    world: currentWorld,
    worldKeys,
    level: currentLevel,
    levelKeys,
    handleChange,
  };
}
