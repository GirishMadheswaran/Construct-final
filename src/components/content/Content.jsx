import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import './content.css';
//import Axios from 'axios';
function Content() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("http://localhost:3002/api")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
          console.log(result)
          //console.log('response 2--> ' , result.hits.hits[0]);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
      
  }, [])
  

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
        <div className='mainPage'>
            <div className='main'>
                <input className='input' type="text" placeholder='800 plus construct libraries..' />
            <div >
              <div>
                    {items.map((val, index) => {
                            return (
                              <Link to={`/${val.name}`} key={index} >
                              <div className='container' >
                              <div className='boxLeft'>
                                <div className='box-fr'>
                                <span>{val.name}</span>
                                <p>{val.Description}</p>
                                </div>
                                <div className='box-sc'>
                                <span>{val.Functions}</span>
                                </div>
                              </div>
                              <div className='vl'></div>
                              <div className='boxRight'>
                                <div className='box-tr'>
                                <p>{val.Download_Details}</p>
                                <p>{val.Author}</p>
                                </div>
                                <div>
                                <img src='/images/ts.png' alt='' className='typescript' />
                                <img src='/images/py.png' alt='' className='python' />
                                <img src='/images/jv.png' alt='' className='java' />
                                <img src='/images/n.png' alt='' className='net' />
                                {/* <p >{val.Langauge_Supported}</p> */}
                                </div>
                              </div>
                              </div>
                              </Link>
                               ); 
                        })}   
            </div>
            </div>
          </div>
      </div>
    );
  }
}
export default Content;