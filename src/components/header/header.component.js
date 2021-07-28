import React, { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { FaCheck } from 'react-icons/fa'
import { Container, Spacer, Select, Submit } from './header.component.styles'
import { Worlds } from '../../app/data'
import { FadeAnimation } from '../../animations'
import { useStore } from '../../store'

// todo: put logic into custom hooks
// todo: write a board leave watcher to sync transitions
// todo: add responsive font size
/**
 * @returns {React.ReactElement} react component
 */
export function HeaderComponent () {

    const router = useRouter ()
    const waitFor = useStore ((state) => state.animations.waitFor)
    const setLeave = useStore ((state) => state.board.setLeave)
    const [world, setWorld] = useState ()
    const [worldKeys, setWorldKeys] = useState ()
    const [level, setLevel] = useState ()
    const [levelKeys, setLevelKeys] = useState ()
    const [canSubmit, setCanSubmit] = useState (false)

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

        setCanSubmit (true)

    }, [])

    const handleSubmit = useCallback (() => {

        if (!canSubmit) return

        setCanSubmit (false)

        const d1 = waitFor.board.leave

        const t1 = setTimeout (() => {

            setLeave ()

        }, d1)

        const d2 = d1 * 8

        const t2 = setTimeout (async () => {

            await router.push (`/${world}/${level}`)

        }, d2)

        return () => {

            clearTimeout (t1)

            clearTimeout (t2)
        
        }
    
    }, [canSubmit, level, router, setLeave, waitFor.board.leave, world])

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
                    {canSubmit
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