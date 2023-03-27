import { useState } from 'react' 
import ' /src/styles/Button.css'

function Button ({ text, variant, callback}) {

let classRenderer = function(){

    let classes = [

    'Button', 'text-center', 'align-left', variant

    ]

    return classes.join(" ");
}

let clickHandler = function(){

}

return (
     <div className={classRenderer()}>{text}</div>
)

}

export default Button