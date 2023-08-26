import React from 'react';
import { useGlobalContext } from './context';

export default function SimpleSearchform() {
  const { setSearchWord } = useGlobalContext();
    
  //setting the searchword to the user input
  const handleSubmit = (e)=>{
      e.preventDefault();
      const searchValue = e.target.elements.search.value;
      if(!searchValue) return;
      setSearchWord(searchValue);
  }
    
  return (
    <section>
      <h1 className="text-center mb-4">Unsplash Images</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <input
            type="text"
            name="search"
            placeholder="cat"
            className="form-control"
            aria-describedby='button-addon2'
          />
          <button 
          type='submit'
          className="btn btn-outline-secondary"
          id="button-addon2"
          >
            Search</button>
        </div>
      </form>
    </section>
  );
}