import { Component } from 'react'
import Movie from "./Movie.jsx"

//🗺 using array and map method -- pretend each object is data from API
const movieData = [
  {
    title: "The Fellowship of the Ring",
    hours: "2",
    minutes: "58",
  },
  {
    //myData: "2nd movie component", 
    title: "The Two Towers",
    hours: "2",
    minutes: "59",
  },
  {
    //1️⃣ Data flow
    title: "The Return of the King",
    hours: "3",
    minutes: "21",
  },

]

class App extends Component {
  render () {
    //🗺 ARRAY&MAP you do stuff up here-----||need index or else react throws error
    const movies = movieData.map((movie, index) => {
      console.log(`the current array index is ${index}`)
      return <Movie
      // ⬇️3️⃣         ⬇️2️⃣
        title={movie.title}
        hours={movie.hours}
        minutes={movie.minutes}
        //include key={index} for arrays- part of map(🗺 ) not just react
        key={index}
      />
    })
    console.log(movies)
    //prop="can be stacked in same <Movie />component"
    return ( 
    <div>
      {movies}
    {/* /* <Movie 
    title="The Fellowship of the Ring"
    hours="2"
    minutes="58"
    />
    <Movie
    //myData="2nd movie component" 
    title="The Two Towers"
    hours="2"
    minutes="59"
    />
    <Movie 
    //myData="3rd component"
    title="The Return of the King"
    hours="3"
    minutes="21"
    />  */}
    </div>
    )
  }
}
export default App