import React, { Component } from 'react'


export default class Movie extends Component {
    render() {
        //console.log(this.props)
        //console.log(this.props.movieData)
        //                                             ⬇️4️⃣
        return (
           <div>
               <h2>The Lord of the Rings: {this.props.title}</h2>

               <p>runtime: {this.props.hours}h {this.props.minutes}"m"</p>
           </div>

        )
    }
}