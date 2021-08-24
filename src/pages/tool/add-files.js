import React from 'react'
import { useDropzone } from 'react-dropzone'
import styled from 'styled-components'

const Container = styled.div`
    position: absolute;

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    padding: 1em;
    grid-gap: 1em;

    background: rgba(255, 255, 255, 0.3);

    width: 100vw;
    height: 100vh;
`

const Dropzone = styled.div`
    width: 100%;
    border: 1px solid black;
    text-align: center;
    user-select: none;
    cursor: pointer;
`

const Files = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;

    width: 100%;

    grid-gap: 0.4em;
    overflow: scroll;
    overflow-x: hidden;
    padding-right: 1em;

    > div {
        display: flex;
        justify-content: space-between;

        > input {
            width: 80%;
        }

        > span {
            &:last-child {
                width: 20%;
                user-select: none;
                text-align: right;
            }
        }
    }
`

const Submit = styled.div`
    width: 100%;
    padding: 0.5em;
    text-align: center;
    border: 1px solid black;
    user-select: none;
    cursor: pointer;
`

/**
 * @returns {React.ReactElement} react component
 */
export default function AddFilesPage () {

    const { acceptedFiles, getRootProps, getInputProps } = useDropzone ()
    const sizes = ['o', 'Ko', 'Mo', 'Go']

    const prettyFileSize = (size, index = 0) => {

        if (size >= 1024) return prettyFileSize (size / 1024, index + 1)

        return `${size.toFixed (2)} ${sizes[index]}`

    }

    const files = acceptedFiles.filter ((file) => {

        if (!file.type.includes ('audio')) return

        return file

    })

    return (
        <>
            <Container>
                {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                <Dropzone {...getRootProps ()}>
                    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                    <input {...getInputProps ()} />
                    <p>Drop files or click here</p>
                </Dropzone>
                {files.length !== 0 &&
                <Files>
                    {files.map ((file) => (
                        <div
                            key={file.path}
                        >
                            <input
                                type="text"
                                defaultValue={file.path.split ('.').slice (0, -1).join ('.')}
                                onChange={(e) => console.log (e.target.value)}
                            />
                            <span>
                                {file.path.split ('.')[file.path.split ('.').length - 1]}
                            </span>
                            <span>
                                {prettyFileSize (file.size)}
                            </span>
                        </div>
                    ))}
                </Files>
                }
                {files.length !== 0 &&
                <Submit>
                    submit
                </Submit>
                }
            </Container>
        </>
    )

}