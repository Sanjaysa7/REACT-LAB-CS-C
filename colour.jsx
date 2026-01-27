import React, { useState } from 'react';
function App() { 
    const[color, setColor] = useState('white');            
    return (
     <div>
    <h1>Color-Picker</h1>
    <button onClick={() => setColor('red')}>Red</button>    
    <button onClick={() => setColor('blue')}>Blue</button>       
    <button onClick={() => setColor('green')}>Green</button>
     <div style={{height:"100px", 
       width:"200px", 
       border:"1px solid ", 
       marginLeft:"220px", 
       marginTop:"20px"}}></div> 
        </div>  
    );
}
