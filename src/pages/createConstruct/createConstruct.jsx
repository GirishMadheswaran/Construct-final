import { useState } from 'react';
import './createConstruct.css';
import axios from 'axios';
import {Link} from 'react-router-dom'

function CreateConstruct() {
  const url = "https://61fd0c4bf62e220017ce42c2.mockapi.io/api/data"
    const [data, setData] = useState({
      name: "",
      author: "",
      license: "",
      repository: "",
      registry: ""
    })
    const [msg , setMsg] = useState("")

  function submit(e){
        e.preventDefault();
        axios.post(url, {
            name: data.name,
            author: data.author,
            license: data.license,
            repository: data.repository,
            registry: data.registry
        })
        .then(res=> {
            console.log(res.data)
        })
        setMsg("SAVED SUCCESFULLY")
        
    }

   function handle(e){
         const newData={...data}
         newData[e.target.id] = e.target.value
         setData(newData)
   }

    return (
        <div className='postform'>
            <form onSubmit={(e)=> submit(e)} className='form'>
             <h1>CREATE CONSTRUCT</h1>
                <div className='form-head'>
                    <input onChange={(e)=>handle(e)} id='name' required value={data.name} placeholder='Name' type='text'></input>
                    <input onChange={(e)=>handle(e)} id='author' required value={data.author} placeholder='Author' type='text'></input>
                    <input onChange={(e)=>handle(e)} id='license' required value={data.license} placeholder='License' type='text'></input>
                    <input onChange={(e)=>handle(e)} id='repository' required value={data.repository} placeholder='Repository' type='text'></input>
                    <input onChange={(e)=>handle(e)} id='registry' required value={data.registry} placeholder='Registry' type='text'></input>
                </div>
                <p>{msg}</p>
             <button className='submitbutton'>Submit</button>
             <Link to="/dev"><button className='cancelbutton'>Cancel</button></Link>
            </form>
        </div>
    );
}

export default CreateConstruct;