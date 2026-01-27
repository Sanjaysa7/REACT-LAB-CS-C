import React , {useState} from "react";

function Greetings() {
    return (
        <div>Greetings</div>
    );
}
export default Greetings;
const [Greetings, setGreetings] = useState("");
useEffect(() =>{})
const hours=new Date().getHours().toString().padStart(2,'0');
const min=new Date().getMinutes().toString().padStart(2,'0');
const sec=new Date().getSeconds().toString().padStart(2,'0');

if(hours>=1 && hours<12){
    setGreetings("Good Morning");
}else if(hours>=12 && hours<17){
    setGreetings("Good Afternoon");
}else if(hours>=17 && hours<20){
    setGreetings("Good Evening");
}else{
    setGreetings("Good Night");
}

return (
    <div>
        <h1>{Greetings}</h1>    
    </div>
);

    
