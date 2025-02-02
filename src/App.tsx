import './App.scss';
import { useState, useEffect } from 'react';
import Header from './Header';
import QuoteBox from './Quotebox';
import $ from 'jquery';

function App() {
  const [quoteData, setQuoteData] = useState("");
  const [authorData, setAuthorData] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const randomIndex = Math.floor(Math.random() * 102);
  const randomColorIndex = Math.floor(Math.random() * 8);

  const colors = ["#570500", "#000E6D", "#700004", "#CCA300", "#0B5700", "#885F4B", "#C1C2B8", "#375D8A"]

  useEffect(() => {
    const fetchQuote = async () => {
      try{
        //i ripped the API from the working example provided in the assignment.
        //i hope you don't mind (other random quote apis) didn't work for me
        //for some reason)
        const res = await fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json");
        const data = await res.json();
        console.log(data.quotes[randomIndex].quote);
        setQuoteData(data.quotes[randomIndex].quote);
        setAuthorData(data.quotes[randomIndex].author)
        $(function() {
          $("._quoteBox_tw3hm_1").css("background-color", colors[randomColorIndex])
          $("header").css("background-color", colors[randomColorIndex])
        });
      }
      catch(error){
        console.log(error)
      }
    }

    fetchQuote();

  }, [isClicked])


  return (
    <>
      <Header />
      <QuoteBox quote={quoteData} author={authorData} function={() => setIsClicked(!isClicked)}/>
    </>
  )
}

export default App;
