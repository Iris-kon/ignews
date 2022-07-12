import { useEffect, useState } from "react"

export function Async() {
    const [isButtonInvisible, setIsButtonInvisible] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setIsButtonInvisible(true)
        }, 1000)
    }, [])

    return (
        <div>
            <p>Hello world!</p>
            {!isButtonInvisible && (<button>Button</button>)}
        </div>
    )
}