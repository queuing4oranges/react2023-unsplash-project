import { useQuery } from '@tanstack/react-query';
import React from 'react';
import axios from 'axios';
import { useGlobalContext } from './context';

const url =""

export default function Gallery() {
  const { searchWord } = useGlobalContext();

  const response = useQuery({
    //dues to caching - need to add searchWord as dynamic value to include in query
    queryKey:['images', searchWord],
    queryFn: async () => {
      const result = await axios.get(`${url}&query=${searchWord}`)
      return result.data
    },
  });

  //handling loading
  if(response.isLoading){
    return(
      <section className="response-container">
        <h4>Getting image...</h4>
      </section>
    )
  };

  //handling errors
    if(response.isError){
    return(
      <section className="response-container">
        <h4>There was an error...</h4>
      </section>
    )
  };

  //handling empty results
  const results = response.data.results;
  if(results.length < 1){
      <section className="response-container">
        <h4>No results found.</h4>
      </section>
  };

  return (
    <section className="gallery-container container-md p-5">
      {results && 
        results.map((item)=> {
          const url = item?.urls?.regular
            return(
              <div className="image-container p-3">
                <img className="gallery-image" src={url} key={item.id} />
              </div>
            )
        })
      }
    </section>
  )
}
