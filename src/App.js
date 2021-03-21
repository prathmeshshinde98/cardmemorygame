import React, { useEffect, useState } from "react";

const url = "https://pokeres.bastionbot.org/images/pokemon";

export default function App() {
  const [openedCard, setOpenedCard] = useState([]);
  const [matched, setMatched] = useState([]);
  const [started , setStarted] = useState(false);
  const [firstRandom, setFirstRandom]=useState([])
  const [secondRandom, setSecondRandom]=useState([])
  const pokemons = [
    { id: 1, name: "balbasaur" },
    { id: 8, name: "wartotle" },
    { id: 9, name: "blastoise" },
    { id: 6, name: "charizard" },
    {id:2,name:"Ivysaur"},
    {id:7,name:"Squirtle"},
  ];
  const pokemons2 = [
    { id: 9, name: "blastoise" },
    {id:7,name:"Squirtle"},
    { id: 8, name: "wartotle" },
    {id:2,name:"Ivysaur"},
    { id: 1, name: "balbasaur" },
    { id: 6, name: "charizard" }
  ];

  
  
  useEffect(()=>{
    setFirstRandom( pokemons.sort(() => Math.random() - 0.5))
  },[])
  useEffect(()=>{
    setSecondRandom( pokemons2  .sort(() => Math.random() - 0.5))
  },[])
 
  // console.log(firstRandom)
  // console.log(secondRandom)
  //currently there are 4 pokemons but we need the pair
  const pairOfPokemons = [...firstRandom , ...secondRandom];

  function flipCard(index) {
    setOpenedCard((opened) => [...opened, index]);
  }

  useEffect(() => {
    if (openedCard < 2) return;

    const firstMatched = pairOfPokemons[openedCard[0]];
    const secondMatched = pairOfPokemons[openedCard[1]];

    if (secondMatched && firstMatched.id === secondMatched.id) {
      setMatched([...matched, firstMatched.id]);
    }

    if (openedCard.length === 2) setTimeout(() => setOpenedCard([]), 1000);
  }, [openedCard]);
  function start(){
    if(started==false){
      return (
      <>
      <h1>Welcome, <button style={{background:"orange",borderRadius:"50px",width:"50px",height:"50px"}} onClick={()=> setStarted(true)}>Click</button> Here To Start</h1>
      
      </>
    )}else{ return(
      <>
      {pairOfPokemons.map((pokemon, index) => {
        //lets flip the card

        let isFlipped = false;

        if (openedCard.includes(index)) isFlipped = true;
        if (matched.includes(pokemon.id)) isFlipped = true;
        return (
          <div
            className={`pokemon-card ${isFlipped ? "flipped" : ""} `}
            key={index}
            onClick={() => flipCard(index)}
          >
            <div className="inner">
              <div className="front">
                <img
                  src={`${url}/${pokemon.id}.png`}
                  alt="pokemon-name"
                  width="100"
                />
              </div>
              <div className="back"></div>
            </div>
          </div>
        );
      })}
      </>
    )
    }
  }
  return (
    <div className="App">
      <div className="cards">
        {start()}        
      </div>
    </div>
  );
}
