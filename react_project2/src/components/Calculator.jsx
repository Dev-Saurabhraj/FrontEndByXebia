import { useState } from "react";
export default function Calculator(){
    const [res, setRes] = useState(0);

    function cal(e){
        e.preventDefault();
         const input = Number(e.target.num1.value);
         const input2 = Number(e.target.num2.value);
         setRes(input + input2)
    }
return(<>
<form onScroll={cal}>
<input type="number" placeholder="enter number " name="num1"/>
<input type="number" placeholder="enter second Number" name="num2"/>
<h3>sum = {res}</h3>
<button type="submit"> calculate sum </button>
</form>


</>)

}
