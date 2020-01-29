const Poke = {
  search(term) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/?limit=1000/`)
      .then(response => 
        {return response.json();})
      .then(json => {
        if  (term[1] === 'text')
          {return json.results.filter(item => item.name.includes(term[0]) === true);}
      }) //.then
  } //search
}


export default Poke;