import { useEffect, useState } from 'react'
import Header1 from './components/Header.jsx'
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const [error , setError] = useState("");
  const [isLoading, setLoading] = useState(true);
  const [query, setQuery] = useState("tesla");

  async function fetchData() {
    try {
      setLoading(true);

      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=${query}&sortBy=publishedAt&apiKey=1dadad2aa3cf4f84bf71fba00b10482f`
      );

      const articles = response.data.articles;

      // Filter based on title
      const filtered = articles.filter((article) =>
        article.title?.toLowerCase().includes(query.toLowerCase())
      );
      setData(filtered);
      setLoading(false);
    } catch (error) {
      setError("Something went wrong");
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header1/>
      <div className='bg-amber-600 text-2xl '>
      <p
      className='bg-amber-600 text-2xl we'
      >
          this is a page
      </p>
      
      </div>
      <input
      className=' bg-amber-200 p-1.5 mx-auto'
        type='text' 
        placeholder='query' 
        value={query} 
        onChange={(e)=>setQuery(e.target.value)}
      />

      <button onClick={fetchData}> Search </button>

      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {
        data.map((article, index) => (
          <div className="card" key={index}>
            <img src={article.urlToImage} alt="" />
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noreferrer">
              Read More
            </a>
          </div>
        ))
      }
    </>
  )
}

export default App;