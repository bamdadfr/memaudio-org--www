import React from 'react'
import { FaCheck } from 'react-icons/fa'
import { Container, Spacer, Select, Submit } from './header.component.styles'
import { FadeAnimation } from '../../animations'
import { useHeaderComponent } from './hooks'

/**
 * @returns {React.ReactElement} react component
 */
export function HeaderComponent () {

    const {
        world,
        worldKeys,
        level,
        levelKeys,
        handleChange,
        handleSubmit,
        submitVisible,
    } = useHeaderComponent ()

    if (typeof worldKeys === 'undefined') return <></>

    if (typeof levelKeys === 'undefined') return <></>

    return (
        <>
            <FadeAnimation>
                <Container>
                    <Select
                        width={10}
                        value={world}
                        onChange={(e) => handleChange (e, 'world')}
                    >
                        {worldKeys.map ((key) => <option key={key} value={key}>{key}</option>)}
                    </Select>
                    <Spacer />
                    <Select
                        width={3}
                        value={level}
                        onChange={(e) => handleChange (e, 'level')}
                    >
                        {levelKeys.map ((key) => <option key={key} value={key}>{key}</option>)}
                    </Select>
                    {submitVisible
                        &&
                            <FadeAnimation>
                                <Submit
                                    onClick={handleSubmit}
                                >
                                    <FaCheck/>
                                </Submit>
                            </FadeAnimation>
                    }
                </Container>
            </FadeAnimation>
        </>
    )

}