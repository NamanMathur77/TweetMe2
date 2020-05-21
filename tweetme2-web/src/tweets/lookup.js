import {lookup} from '../lookup'

export function apiTweetCreate(newTweet, callback){
    lookup("POST", "/tweets/create/", callback, {content: newTweet})
}
export function apiTweetList(callback) {
    lookup("GET", "/tweets/", callback)
}

export function apiTweetAction(tweetId, action, callback){
    const data = {id: tweetId, action: action}
    lookup("POST", "/tweets/action", callback, data)
}