import {useState} from "react";


export default function EasterEgg(){

const [open,setOpen]=useState(false);


return (

<>

<div 
className="egg"
onClick={()=>setOpen(true)}
>
🥚
</div>


{open &&

<div className="modal-bg">

<div className="modal">

<h2>
🎉 Du hittade påskägget!
</h2>

<p>
Tack för att du besöker min portfolio.
</p>


<button onClick={()=>setOpen(false)}>
Stäng
</button>


</div>

</div>

}

</>

)

}