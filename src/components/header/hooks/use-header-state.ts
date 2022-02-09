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
  const [world, setWorld] = useState<string>(!Array.isArray(router.query.world) && router.query.world);
  const [level, setLevel] = useState<string>(!Array.isArray(router.query.level) && router.query.level);
  const [worldKeys, setWorldKeys] = useState<string[]>();
  const [levelKeys, setLevelKeys] = useState<string[]>();

  // get current world and level
  useEffect(() => {
    const {world, level} = router.query;

    if (!Array.isArray(world)) {
      setWorld(world);
    }

    if (!Array.isArray(level)) {
      setLevel(level);
    }
  }, [router.query]);

  // get all worlds and levels
  useEffect(() => {
    if (!world) {
      return;
    }

    (async () => {
      const worlds = await fetchWorlds();
      const levels = await fetchLevels(world);

      setWorldKeys(worlds);

      setLevelKeys(levels);
    })();
  }, [world]);

  // if level does not exist, set it to first
  useEffect(() => {
    if (!world) {
      return;
    }

    if (!level) {
      return;
    }

    if (!levelKeys) {
      return;
    }

    // level exist in levelKeys?
    if (levelKeys.indexOf(level) >= 0 && levelKeys.indexOf(level) <= levelKeys.length) {
      return;
    }

    (async () => {
      const firstLevel = await fetchFirstLevel(world);

      setLevel(firstLevel);
    })();
  }, [world, level, levelKeys]);

  const handleChange: UseHeaderState['handleChange'] = useCallback((e, type) => {
    if (type === 'world') {
      setWorld(e.target.value);
    }

    if (type === 'level') {
      setLevel(e.target.value);
    }
  }, []);

  return {
    world,
    worldKeys,
    level,
    levelKeys,
    handleChange,
  };
}
