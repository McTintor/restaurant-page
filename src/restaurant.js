const createRestaurantHomePage = () => {
    const content = document.querySelector("#content");
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content'); 

    // Create and append image element
    const image = document.createElement('img');
    image.src = 'https://imgs.search.brave.com/19i095tA2S37sEzK5HQ7RrvA7q7JfVAjiO1is998WBA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNjkz/MTg2ODUwL3Bob3Rv/L2ZyaWVuZHMtZWF0/aW5nLWF0LWEtcmVz/dGF1cmFudC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9a1Ry/TzJrdjZ0SFdUWUhR/VGlaSnY2Ykl2MTVq/b2NodjJ5V1NTalpX/ZFdMaz0';
    image.height = '300';
    pageContent.appendChild(image);

    // Create and append headline element
    const headline = document.createElement('h1');
    headline.textContent = "Welcome to our restaurant";
    pageContent.appendChild(headline);

    // Create and append copy element
    const copy = document.createElement('p');
    copy.textContent = "We serve the best food in town. Come and taste it!";
    pageContent.appendChild(copy);
    content.appendChild(pageContent);
}

export default createRestaurantHomePage;