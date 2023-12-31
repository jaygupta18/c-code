const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')
jokeBtn.addEventListener('click',generatejoke);
// generatejoke();
async function generatejoke(){
    const config={
        headers:{
            Accept:'application/json',
        },
    }
    // The `config` object is a JavaScript object that defines the configuration for a request. The `headers` property of the `config` object defines the headers that will be sent with the request. The `Accept` header specifies that the client will accept a JSON response. This is a common header that is used in many HTTP requests.

const res= await fetch('https://icanhazdadjoke.com', config);
const data=await res.json();
jokeEl.innerHTML=data.joke;}


// jokeBtn.addEventListener('click', generateJoke)

// generateJoke()

// // USING ASYNC/AWAIT
// async function generateJoke() {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   }

//   const res = await fetch('https://icanhazdadjoke.com', config)

//   const data = await res.json()

//   jokeEl.innerHTML = data.joke
// }
;;;
// USING .then()
// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   }

//   fetch('https://icanhazdadjoke.com', config)
//     .then((res) => res.json())
//     .then((data) => {
//       jokeEl.innerHTML = data.joke
//     })
// }