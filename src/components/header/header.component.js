import React from 'react';
import {FaCheck} from 'react-icons/fa';
import {
  Container,
  Left,
  Right,
  Spacer,
  Select,
  Submit,
} from './header.component.styles';
import {FadeAnimation} from '../../animations/fade/fade.animation';
import {useHeaderComponent} from './hooks/use-header-component';

/**
 * Component for the header of the application
 *
 * @returns {React.ReactElement} - Rendered component
 */
export function HeaderComponent() {
  const {
    world,
    level,
    worldKeys,
    levelKeys,
    handleChange,
    handleSubmit,
    submitVisible,
    volume,
    handleVolume,
  } = useHeaderComponent();

  return (
    <>
      {worldKeys && levelKeys &&
      <FadeAnimation>
        <Container>

          <Left>
            <Select
              width={13}
              value={world}
              onChange={(e) => handleChange(e, 'world')}
            >
              {worldKeys.map((key) => <option
                key={key}
                value={key}
              >{key}</option>)}
            </Select>
            <Spacer />
            <Select
              width={3}
              value={level}
              onChange={(e) => handleChange(e, 'level')}
            >
              {levelKeys.map((key) => <option
                key={key}
                value={key}
              >{key}</option>)}
            </Select>
            <FadeAnimation>
              {submitVisible &&
              <Submit onClick={handleSubmit}><FaCheck /></Submit>}
            </FadeAnimation>
          </Left>

          <Right>
            <input
              type="range"
              value={volume}
              min="0"
              max="1"
              step="0.01"
              onChange={handleVolume}
            />
          </Right>

        </Container>
      </FadeAnimation>
      }
    </>
  );
}
