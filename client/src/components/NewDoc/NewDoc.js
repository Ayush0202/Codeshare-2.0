import React, { useEffect, useState } from 'react'
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript"
import { cpp } from '@codemirror/lang-cpp'
import { css } from '@codemirror/lang-css'
import { html } from '@codemirror/lang-html'
import { java } from '@codemirror/lang-java'
import { php } from '@codemirror/lang-php'
import { python } from '@codemirror/lang-python'
import { rust } from '@codemirror/lang-rust'
import { sql } from '@codemirror/lang-sql'
import { xml } from '@codemirror/lang-xml'



import Navbar from '../Header/Navbar'


const NewDoc = () => {

    // getting screen height to set height of the editor
    const [screenHeight, setScreenHeight] = useState(window.innerHeight)
    const [code, setCode] = useState('');

    useEffect(() => {
        const handleResize = () => {
            setScreenHeight(window.innerHeight)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])


    // onchange value function for editor
    const onChangeValue = React.useCallback((value, viewUpdate) => {
        setCode(value)
        console.log(value)
    }, [])


    return (
        <>

            <form >

                <Navbar />

                <CodeMirror
                    value={code}
                    height={`${screenHeight}px`}
                    theme='dark'
                    extensions={[
                        javascript({jsx: true}),
                        cpp(),
                        css(),
                        html(),
                        java(),
                        php(),
                        python(),
                        rust(),
                        sql(),
                        xml()
                    ]}
                    onChange={onChangeValue}
                    
                />
                    
            </form>

        </>
    )
}

export default NewDoc