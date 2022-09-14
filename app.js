var button = document.querySelector ("#button")
var output = document.querySelector ("#output")
var serverURL = "https://www.boredapi.com/api/activity/"



function clickHandler () {
    fetch (serverURL)
    .then (response => response.json())
    .then (json => output.innerText = "Task : " + json.activity)
    .catch (error => output.innerText = "Some Error Occured")
}

button.addEventListener ("click", clickHandler)