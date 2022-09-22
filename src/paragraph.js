import { useContext } from 'react'
import {ThemeContext} from './useContext'

function Paragraph() {

    const theme= useContext(ThemeContext)

    return (
        <p className={theme}>
            context pointer text
        </p>
    )
}

export default Paragraph