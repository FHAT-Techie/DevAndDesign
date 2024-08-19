let form = document.querySelector(`#form`);
let input = document.querySelector(`#city`);
let main = document.querySelector(`main`);
let resultSection = document.createElement(`section`);
resultSection.classList.add(`resultSection`);
main.append(resultSection);
let array = [];
form.addEventListener(`submit`, checkWeather);

function checkWeather(event) {
  event.preventDefault();
  let cityInput = input.value.trim();

  if (cityInput === "") {
    console.log("Please enter a city name.");
    return;
  }

  function weatherRequest() {
    let request = new XMLHttpRequest();
    let apiKey = "db78b3d94a007c958c44142be214ba78"; // Replace with your actual API key
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
      cityInput
    )}&appid=${apiKey}`;
fetch(url).then((data)=> {
      return data.json()
    }).then((weatherData) =>{
      array.unshift(weatherData);

      resultSection.innerHTML = " ";
      array.forEach(function (item) {
        let weatherDegree = item.main.temp;
        weatherDegree = Math.round(weatherDegree - 273.15); // Corrected temperature conversion
        let weatherDegreeData = `${weatherDegree}°`;

        let city = item.name;
        let country = item.sys.country;

        let locationData = `${city}, ${country}`;
        console.log(locationData);

        let humidity = item.main.humidity;
        let visibility = item.visibility;

        let hAndV = `H: ${humidity}, V: ${visibility}`;
        console.log(hAndV);

        let weatherDescription = item.weather[0].description;
        console.log(weatherDescription);
        // Create an image element
        let image = document.createElement("img");

        // Determine the image based on the temperature
        if (weatherDegree <= 15) {
          image.src = `./Weatherimage/cold.png`;
        } else if (weatherDegree > 15 && weatherDegree <= 25) {
          image.src = `./Weatherimage/normal.png`;
        } else if (weatherDegree > 25) {
          // Corrected the condition
          image.src = `./Weatherimage/hot.png`;
        }

        let resultBox = document.createElement(`div`);
        resultBox.classList.add(`resultBox`);
        resultSection.append(resultBox);

        // Create the SVG element
        let svg = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "svg"
        );
        svg.classList.add(`svg`);
        svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        svg.setAttribute("width", "342");
        svg.setAttribute("height", "175");
        svg.setAttribute("viewBox", "0 0 342 175");
        svg.setAttribute("fill", "none");

        // Create the <path> element
        let path = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "path"
        );
        path.setAttribute(
          "d",
          "M0 66.4396C0 31.6455 0 14.2484 11.326 5.24044C22.6519 -3.76754 39.6026 0.147978 73.5041 7.97901L307.903 62.1238C324.259 65.9018 332.436 67.7909 337.218 73.8031C342 79.8154 342 88.2086 342 104.995V131C342 151.742 342 162.113 335.556 168.556C329.113 175 318.742 175 298 175H44C23.2582 175 12.8873 175 6.44365 168.556C0 162.113 0 151.742 0 131V66.4396Z"
        );
        path.setAttribute("fill", "url(#paint0_linear_1502_281)");

        // Create the <defs> element
        let defs = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "defs"
        );

        // Create the <linearGradient> element
        let linearGradient = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "linearGradient"
        );
        linearGradient.setAttribute("id", "paint0_linear_1502_281");
        linearGradient.setAttribute("x1", "0");
        linearGradient.setAttribute("y1", "128");
        linearGradient.setAttribute("x2", "354.142");
        linearGradient.setAttribute("y2", "128");
        linearGradient.setAttribute("gradientUnits", "userSpaceOnUse");

        // Create the <stop> elements for the gradient
        let stop1 = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "stop"
        );
        stop1.setAttribute("offset", "0");
        stop1.setAttribute("stop-color", "#5936B4");

        let stop2 = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "stop"
        );
        stop2.setAttribute("offset", "1");
        stop2.setAttribute("stop-color", "#362A84");

        // Append the stops to the linearGradient
        linearGradient.appendChild(stop1);
        linearGradient.appendChild(stop2);

        // Append the linearGradient to the defs
        defs.appendChild(linearGradient);

        // Append the defs and path to the SVG
        svg.appendChild(defs);
        svg.appendChild(path);

        // Append the SVG and image to the resultBox
        resultBox.append(svg);
        let cardData = document.createElement(`div`);
        resultBox.append(cardData);
        cardData.classList.add(`cardData`);
        let cardTop = document.createElement(`div`);
        cardData.append(cardTop);
        cardTop.classList.add(`card-top`);
        let degreeResult = document.createElement(`h1`);
        degreeResult.classList.add(`degree`);
        degreeResult.innerText = weatherDegreeData;
        cardTop.append(degreeResult);
        let imageBox = document.createElement(`div`);
        imageBox.classList.add(`image-box`);
        cardTop.append(imageBox);
        image.classList.add(`weatherImage`);
        imageBox.append(image);
        let cardBtm = document.createElement(`div`);
        cardBtm.classList.add(`card-btm`);
        cardData.append(cardBtm);
        let locationSection = document.createElement(`div`);
        locationSection.classList.add(`locationSection`);
        cardBtm.append(locationSection);
        let longAndLat = document.createElement(`p`);
        longAndLat.classList.add(`longAndLat`);
        longAndLat.innerText = hAndV;
        locationSection.append(longAndLat);
        let location = document.createElement(`p`);
        location.classList.add(`location`);
        location.innerText = locationData;
        locationSection.append(location);
        let cloudReport = document.createElement(`p`);
        cloudReport.classList.add(`cloudReport`);
        cloudReport.innerText = weatherDescription;
        cardBtm.append(cloudReport);
      });
    })
    
  }

  weatherRequest(); // Call the function to make the API request
  form.reset();
}
    // request.open("GET", url, true);

    // request.onreadystatechange = function () {
    //   if (this.readyState === 4) {
    //     if (this.status === 200) {
    //       let data = JSON.parse(this.responseText);
    //       console.log(data);
    //       array.unshift(data);

    //       resultSection.innerHTML = " ";
    //       array.forEach(function (item) {
    //         let weatherDegree = item.main.temp;
    //         weatherDegree = Math.round(weatherDegree - 273.15); // Corrected temperature conversion
    //         let weatherDegreeData = `${weatherDegree}°`;

    //         let city = item.name;
    //         let country = item.sys.country;

    //         let locationData = `${city}, ${country}`;
    //         console.log(locationData);

    //         let humidity = item.main.humidity;
    //         let visibility = item.visibility;

    //         let hAndV = `H: ${humidity}, V: ${visibility}`;
    //         console.log(hAndV);

    //         let weatherDescription = item.weather[0].description;
    //         console.log(weatherDescription);
    //         // Create an image element
    //         let image = document.createElement("img");

    //         // Determine the image based on the temperature
    //         if (weatherDegree <= 15) {
    //           image.src = `./Weatherimage/cold.png`;
    //         } else if (weatherDegree > 15 && weatherDegree <= 25) {
    //           image.src = `./Weatherimage/normal.png`;
    //         } else if (weatherDegree > 25) {
    //           // Corrected the condition
    //           image.src = `./Weatherimage/hot.png`;
    //         }

    //         let resultBox = document.createElement(`div`);
    //         resultBox.classList.add(`resultBox`);
    //         resultSection.append(resultBox);

    //         // Create the SVG element
    //         let svg = document.createElementNS(
    //           "http://www.w3.org/2000/svg",
    //           "svg"
    //         );
    //         svg.classList.add(`svg`);
    //         svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    //         svg.setAttribute("width", "342");
    //         svg.setAttribute("height", "175");
    //         svg.setAttribute("viewBox", "0 0 342 175");
    //         svg.setAttribute("fill", "none");

    //         // Create the <path> element
    //         let path = document.createElementNS(
    //           "http://www.w3.org/2000/svg",
    //           "path"
    //         );
    //         path.setAttribute(
    //           "d",
    //           "M0 66.4396C0 31.6455 0 14.2484 11.326 5.24044C22.6519 -3.76754 39.6026 0.147978 73.5041 7.97901L307.903 62.1238C324.259 65.9018 332.436 67.7909 337.218 73.8031C342 79.8154 342 88.2086 342 104.995V131C342 151.742 342 162.113 335.556 168.556C329.113 175 318.742 175 298 175H44C23.2582 175 12.8873 175 6.44365 168.556C0 162.113 0 151.742 0 131V66.4396Z"
    //         );
    //         path.setAttribute("fill", "url(#paint0_linear_1502_281)");

    //         // Create the <defs> element
    //         let defs = document.createElementNS(
    //           "http://www.w3.org/2000/svg",
    //           "defs"
    //         );

    //         // Create the <linearGradient> element
    //         let linearGradient = document.createElementNS(
    //           "http://www.w3.org/2000/svg",
    //           "linearGradient"
    //         );
    //         linearGradient.setAttribute("id", "paint0_linear_1502_281");
    //         linearGradient.setAttribute("x1", "0");
    //         linearGradient.setAttribute("y1", "128");
    //         linearGradient.setAttribute("x2", "354.142");
    //         linearGradient.setAttribute("y2", "128");
    //         linearGradient.setAttribute("gradientUnits", "userSpaceOnUse");

    //         // Create the <stop> elements for the gradient
    //         let stop1 = document.createElementNS(
    //           "http://www.w3.org/2000/svg",
    //           "stop"
    //         );
    //         stop1.setAttribute("offset", "0");
    //         stop1.setAttribute("stop-color", "#5936B4");

    //         let stop2 = document.createElementNS(
    //           "http://www.w3.org/2000/svg",
    //           "stop"
    //         );
    //         stop2.setAttribute("offset", "1");
    //         stop2.setAttribute("stop-color", "#362A84");

    //         // Append the stops to the linearGradient
    //         linearGradient.appendChild(stop1);
    //         linearGradient.appendChild(stop2);

    //         // Append the linearGradient to the defs
    //         defs.appendChild(linearGradient);

    //         // Append the defs and path to the SVG
    //         svg.appendChild(defs);
    //         svg.appendChild(path);

    //         // Append the SVG and image to the resultBox
    //         resultBox.append(svg);
    //         let cardData = document.createElement(`div`);
    //         resultBox.append(cardData);
    //         cardData.classList.add(`cardData`);
    //         let cardTop = document.createElement(`div`);
    //         cardData.append(cardTop);
    //         cardTop.classList.add(`card-top`);
    //         let degreeResult = document.createElement(`h1`);
    //         degreeResult.classList.add(`degree`);
    //         degreeResult.innerText = weatherDegreeData;
    //         cardTop.append(degreeResult);
    //         let imageBox = document.createElement(`div`);
    //         imageBox.classList.add(`image-box`);
    //         cardTop.append(imageBox);
    //         image.classList.add(`weatherImage`);
    //         imageBox.append(image);
    //         let cardBtm = document.createElement(`div`);
    //         cardBtm.classList.add(`card-btm`);
    //         cardData.append(cardBtm);
    //         let locationSection = document.createElement(`div`);
    //         locationSection.classList.add(`locationSection`);
    //         cardBtm.append(locationSection);
    //         let longAndLat = document.createElement(`p`);
    //         longAndLat.classList.add(`longAndLat`);
    //         longAndLat.innerText = hAndV;
    //         locationSection.append(longAndLat);
    //         let location = document.createElement(`p`);
    //         location.classList.add(`location`);
    //         location.innerText = locationData;
    //         locationSection.append(location);
    //         let cloudReport = document.createElement(`p`);
    //         cloudReport.classList.add(`cloudReport`);
    //         cloudReport.innerText = weatherDescription;
    //         cardBtm.append(cloudReport);
    //       });
    //     } else {
    //       console.log("Error: " + this.status + " - " + this.statusText);
    //     }
    //   }
    // };

