const init = () => {

    //grab value from form
    const inputForm = document.querySelector('form');
    inputForm.addEventListener('submit', (event) => {
        event.preventDefault();
        // console.log(event.target.children)
        //event.target.children[1].value
        //or 
        const input = document.getElementById('searchByID');
        //console.log(input.value);
       


        //fetch data based on user input
        fetch(`http://localhost:3000/movies/${input.value}`)
        .then(response => response.json())
        .then(json => {
            //console.log(json);
            const title = document.querySelector('#movieDetails h4');
            const summary = document.querySelector('#movieDetails p');

            title.innerText = json.title;
            summary.innerText = json.summary;
        });

        //clear input value
        input.value = "";
        


    }); //form event listener


    
  
} //init 

document.addEventListener('DOMContentLoaded', init);