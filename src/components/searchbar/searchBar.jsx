import { useState,useEffect } from 'react';
import './searchbar.css';
import {Link} from 'react-router-dom';

function SearchBar({ placeholder }) {

  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const apiUrl = "https://0qglpz3009.execute-api.us-east-1.amazonaws.com/sandbox/searchconstruct";
  // const [searchTitle, setSearchTitle] = useState("");


  console.log('i am in search');
  useEffect(() => {
    fetch(apiUrl + "?key=aws*")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.hits.hits);
          // console.log(result)
          // console.log('response 2--> ' , result.hits);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = items.filter((value) => {
      return value._source.name.toLowerCase().includes(searchWord.toLowerCase());
    });
    // console.log(searchWord)

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };


  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <h4>Loading...</h4>;
  } else {
  return (
    <div className="search">
      <div className="searchInput">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <button className="button">Find constructs</button>
      </div>
      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, index) => {
            return (
              <Link to={`${value._source.name}`}>
                <p>{value._source.name}</p>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
  }

}

export default SearchBar;

