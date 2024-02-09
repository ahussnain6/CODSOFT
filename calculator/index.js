    const input = document.getElementById("input");
    const buttons = document.querySelectorAll(".btn");
   const update=(e)=>{
    if(e && e !== "CLEAR"){input.value = e}}
    buttons.forEach((button)=>{
        button.addEventListener("click",(e)=>{
         if((input.innerHTML.includes("CLEAR")) ){input.innerHTML = null;val = null}
         if((input.innerHTML.includes("==")) || (input.innerHTML.includes("="))) {
              input.value = null;
              input.innerHTML = null;
         }
         else{
        const val = input.innerHTML + e.currentTarget.innerText.toString() ;
         if(val){
         input.innerHTML = val;
         update(input.innerHTML);
         }}
        const valu = e.currentTarget.value;
        if(valu === "clr"){input.value = ""}
        if(valu == "="){
            if(!(input.value)){
                alert("Invalid Input")
            }
           let v = eval(input.value.replace("=",""));
           input.value ="";
           input.value = v;
        }
    })
    })