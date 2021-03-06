import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

import {TweetsComponent} from './tweets'

// function loadTweets(callback) {
//   const xhr = new XMLHttpRequest()
//   const method = 'GET'
//   const url = "http://localhost:8000/api/tweets/"
//   const responseType = "json"
//   xhr.responseType = responseType
//   xhr.open(method, url)
//   xhr.onload = function(){
//     callback(xhr.response, xhr.status)

//   }
//   xhr.send()
// }

// function ActionBtn(props){
//   const {tweet, action} = props
//   const className = props.className ? props.className : 'btn btn-primary'
//   return action.type === 'like' ? <button className={className}> {tweet.likes} Likes</button> : null 
// }

// function Tweet(props){
//   const {tweet} = props
//   const className = props.className ? props.className : 'col-10 mx-auto col-md-6'
//   return <div className={className}>
//     <p>{tweet.id} - {tweet.content}</p>
//     <div className='btn btn-group'>
//     <ActionBtn tweet={tweet} action={{type: "like"}} />
//     <ActionBtn tweet={tweet} action={{type: "unlike"}} />
//     </div>
//   </div>
// }

// function TweetsList(props){
//   const [tweets, setTweets] = useState([])

//   useEffect(()=>{
//     const myCallback = (response, status) => {
//       if (status === 200){
//         setTweets(response)
//       }
//     }
//     loadTweets(myCallback)
//   })

//   return tweets.map((item, index)=>{
//     return <Tweet tweet={item} className='my-5 py-5 border bg-white text-dark' key={`${index}-{item.id}`}/>
//   })


// }

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <TweetsComponent/>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
