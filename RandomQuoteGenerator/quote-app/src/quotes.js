const dummyData = [
    {
        text:"Oopsie, dropped my grapie",
        author:"dad"
    },
    {
        text:"Ummm i don't know",
        author:"self"
    },
    {
        text:"Wow, I can't think of any good quotes",
        author:"me"
    },

]




const retrieveRandomQuote = () => {
    return dummyData[Math.floor(Math.random() * dummyData.length)];
    // fetch("https://type.fit/api/quotes")
    // .then(function(response) {
    //   return response.json();
    // })
    // .then(function(data) {
    //   console.log(data);
    // });
}

export default retrieveRandomQuote