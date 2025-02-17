import { useState } from "react";
import useInput from "../Hook/useInput";

const InputText = (text) => {
    const [input, onChangeText] = useInput("");

    return (
        <div>
            <input type="text" value={input} onChange={onChangeText}/>
            {input}
        </div>
    )
};

export default InputText;