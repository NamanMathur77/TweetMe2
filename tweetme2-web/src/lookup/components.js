function getCookie(name) {
  var cookieValue = null;
  if (document.cookie && document.cookie !== '') {
      var cookies = document.cookie.split(';');
      for (var i = 0; i < cookies.length; i++) {
          var cookie = cookies[i].trim();
          // Does this cookie string begin with the name we want?
          if (cookie.substring(0, name.length + 1) === (name + '=')) {
              cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
              break;
          }
      }
  }
  return cookieValue;
}


export function lookup(method, endpoint, callback, data){
  let jsonData;
  if(data){
    jsonData = JSON.stringify(data)
  }
  const xhr = new XMLHttpRequest()
    const url = `http://localhost:8000/api${endpoint}`
    xhr.responseType = "json"
    const csrftoken = getCookie('csrftoken');
    xhr.open(method, url)
    xhr.setRequestHeader("Content-Type", "application/json")
    if (csrftoken){
      xhr.setRequestHeader("HTTP_X_REQUESTED_WITH", "XMLHttpRequest")
      xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest")
      xhr.setRequestHeader("X-CSRFToken", csrftoken)
    }
    xhr.setRequestHeader("X-CSRFToken", csrftoken)
    xhr.onload = function(){
      callback(xhr.response, xhr.status)
    }
    xhr.onerror = function (e){
      console.log(e)
      callback({"message": "The request was an error"}, 400)
    }
    xhr.send(jsonData)
}
// before creation of the lookup.js in the tweets component
// export function createTweet(newTweet, callback){
//   lookup("POST", "/tweets/create/", callback, {content: newTweet})
// }

// export function loadTweets(callback) {
//     lookup("GET", "/tweets/", callback)
//     // const xhr = new XMLHttpRequest()
//     // const method = 'GET'
//     // const url = "http://localhost:8000/api/tweets/"
//     // const responseType = "json"
//     // xhr.responseType = responseType
//     // xhr.open(method, url)
//     // xhr.onload = function(){
//     //   callback(xhr.response, xhr.status)
  
//     // }
//     // xhr.send()
//   }