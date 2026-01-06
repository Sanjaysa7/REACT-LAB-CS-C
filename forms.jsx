import React,{useState} from 'react'

function forms() {
    const [name,setname]=useState("")
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
    const [submittedData,setsubmittedData]=useState("")
    const handlesubmit=(e)=>{
    e.preventDefault();
    const formdata={name,email,password}
    setsubmittedData(formdata);
    setname("")
    setemail("")
    setpassword("")


}
  return (
    <div>
    <h2>form</h2>
    <form onSubmit={handlesubmit}>
        <label>name:</label>
        <input type="text"
        value={name}
        onChamge={(e)=>setname(e.target.value)}
        />
        <label>email:</label>
        <input type="email"
        value={email}
        onChamge={(e)=>setemail(e.target.value)}
        />
        <label>password:</label>
        <input type="password"
        value={password}
        onChamge={(e)=>setpassword(e.target.value)}
        />
        <button type="submit">submit</button>


    </form>
    {submittedData && (
        <div>
            <h2>submitted Data</h2>
            <p><strong>name:</strong>{submittedData.name}</p>
            <p><strong>email:</strong>{submittedData.email}</p>
            <p><strong>password:</strong>{submittedData.password}</p>
        </div>
    )}
    </div>
  )
}

export default forms