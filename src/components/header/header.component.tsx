import React from 'react'
import { FaCheck } from 'react-icons/fa'
import { Container, Spacer, Select, Submit } from './header.component.styles'
import { FadeAnimation } from '../../animations'
import { useHeaderComponent } from './hooks'

export function HeaderComponent (): React.ReactElement {

    const {
        world,
        level,
        worldKeys,
        levelKeys,
        handleChange,
        handleSubmit,
        submitVisible,
    } = useHeaderComponent ()

    return (
        <>
            {worldKeys && levelKeys &&
                <FadeAnimation>
                    <Container>
                        <Select
                            width={10}
                            value={world}
                            onChange={(e) => handleChange (e, 'world')}
                        >
                            {worldKeys
                            && worldKeys.map ((key) => <option key={key} value={key}>{key}</option>)
                            }
                        </Select>
                        <Spacer />
                        <Select
                            width={3}
                            value={level}
                            onChange={(e) => handleChange (e, 'level')}
                        >
                            {levelKeys
                            && levelKeys.map ((key) => <option key={key} value={key}>{key}</option>)
                            }
                        </Select>
                        <FadeAnimation>
                            {submitVisible
                            && <Submit onClick={handleSubmit}><FaCheck/></Submit>
                            }
                        </FadeAnimation>
                    </Container>
                </FadeAnimation>
            }
        </>
    )

}