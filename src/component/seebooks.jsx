import React from "react";
import { useEffect ,useState } from "react";
import axios from "axios";

const BookList = ()=>{
  const [books ,setBook] = useState([])

  useEffect(()=>{

  axios.get('http://localhost:8000/library/books/')

      .then((response) => {
        setBook(response.data);
      })
      .catch((error) => {
        console.log("error occured while fetching the data",error)
      })  
  },[])

  console.log(books)


  return(
    <>
    <div className="absolute left-[10cm]">
      <ul>
       {
        books.map((book , index)=>(
          <li key={index}>{book.title}</li>
        ))
       }
      </ul>

    </div>
    </>
  )
}

export default BookList;