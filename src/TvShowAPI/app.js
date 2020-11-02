// axios.get('http://www.omdbapi.com/?s=harry&apikey=thewdb')

const form = document.querySelector('#searchForm');
form.addEventListener('submit',async function (e) {
    e.preventDefault();
    const searchText = form.elements.query.value;
    const response = await axios.get(`http://api.tvmaze.com/search/shows?q=${searchText}`)
makeImages(response.data)
form.elements.query.value = '';

})

const makeImages = (shows) =>{
    for (let result of shows){
        if(result.show.image){
            const img = document.createElement('IMG');
    img.src = result.show.image.medium;
    document.body.append(img)
        }
    
    }
}
