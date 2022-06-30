import React, { useState } from 'react'
import { useTheme } from '../hooks/useTheme'

function ThemeSelector() {
    const {changeColor, changeMode, mode} = useTheme()
    const [isChecked, setIsChecked] = useState(false)
    const toggleMode = () => {
        // setIsChecked(!isChecked)
        (isChecked) ? changeColor("white") :changeColor("black")
        changeMode(mode === "dark" ? "light" : "dark")
        console.log(mode);
    }

    return (
    <div>
        <input 
            type="checkbox" 
            class="toggle toggle-md" 
            checked={isChecked} 
            onClick={() => {
                setIsChecked(!isChecked)
                toggleMode()
            }}
            style={{filter: mode === "dark" ? "invert(100%)" : "invert(20%)" }} />
    </div>
    )
}

export default ThemeSelector