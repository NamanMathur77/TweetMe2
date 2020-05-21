import {lookup} from '../lookup'

export function apiTweetCreate(newTweet, callback){
    lookup("POST", "/tweets/create/", callback, {content: newTweet})
  }
  
  export function apiTweetList(callback) {
      lookup("GET", "/tweets/", callback)
    }