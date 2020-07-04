if ((new Date()).getMonth() === 11) {
    console.log("Is december, is time to add the snow! <3");
    const script = document.createElement('script');
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/Snowstorm/20131208/snowstorm-min.js";
    document.body.appendChild(script);
}