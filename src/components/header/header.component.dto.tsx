import React from 'react'

export type World = string

export type Level = string

export type WorldKeys = string[]

export type LevelKeys = string[]

export type HandleChange = (event: React.ChangeEvent<HTMLSelectElement>, type: string) => void

export type HandleSubmit = () => void

export type SubmitVisible = boolean

export class HeaderComponentDto {

    world: World

    level: Level

    worldKeys: WorldKeys

    levelKeys: LevelKeys

    handleChange: HandleChange

    handleSubmit: HandleSubmit

    submitVisible: SubmitVisible

}