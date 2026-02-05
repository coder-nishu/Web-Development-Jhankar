import { useState } from "react"

const useInputField = (defaultValue) => {
    const [inputfield,setInputField] = useState(defaultValue)

    const handleFieldOnChange = e => {
        setInputField(e.target.value)


    }
    return [inputfield,handleFieldOnChange]
}
export default useInputField
