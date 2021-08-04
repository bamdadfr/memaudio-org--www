import React, { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { FaCheck } from 'react-icons/fa'
import { Container, Spacer, Select, Submit } from './header.component.styles'
import { Worlds } from '../../app/data'
import { FadeAnimation } from '../../animations'
import { useStore } from '../../store'

// todo: put logic into custom hooks
/**
 * @returns {React.ReactElement} react component
 */
export function HeaderComponent () {

    const router = useRouter ()
    const isLeaving = useStore ((state) => state.board.isLeaving)
    const setLeave = useStore ((state) => state.board.setLeave)
    const [world, setWorld] = useState ()
    const [worldKeys, setWorldKeys] = useState ()
    const [level, setLevel] = useState ()
    const [levelKeys, setLevelKeys] = useState ()
    const [submitVisible, setSubmitVisible] = useState (false)
    const [submitFired, setSubmitFired] = useState (false)

    useEffect (() => {

        const { world, level } = router.query

        setWorld (world)

        setLevel (level)
    
    }, [router.query])

    useEffect (() => {

        if (typeof world === 'undefined') return

        if (typeof level === 'undefined') return

        setWorldKeys (Object.keys (Worlds))

        setLevelKeys (Object.keys (Worlds[world]))
    
    }, [world, level])

    const handleChange = useCallback ((e, type) => {

        if (type === 'world') setWorld (e.target.value)

        if (type === 'level') setLevel (e.target.value)

        setSubmitVisible (true)

    }, [])

    const handleSubmit = useCallback (() => {

        if (!submitVisible) return

        setSubmitVisible (false)

        setLeave ()

        setSubmitFired (true)

    }, [setLeave, submitVisible])

    useEffect (() => {

        if (submitFired && !isLeaving) {

            (async () => {

                setSubmitFired (false)

                await router.push (`/${world}/${level}`)
            
            }) ()
        
        }
    
    }, [isLeaving, level, router, submitFired, world])

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