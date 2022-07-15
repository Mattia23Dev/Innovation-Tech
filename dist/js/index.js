import '../css/mobile.css';
import '../css/desktop.css';

import { axios } from 'axios';
import { City } from './city.js';
import { ShowCity } from './showcity.js';
const _get = require('lodash/get');

// Global vars

const mainCity = new ShowCity(); // main city on the page
let citiesList = []; // list of all avalaible cities

// Selectors for the main city
const citiesContainer = document.querySelector("#citylist"); // hints container
const searchBar = document.querySelector("#citysearch"); // main searchBar
const startSearchBtn = document.querySelector(".search-icon"); // search button - main searchBar
const eraseSearchBtn = document.querySelector(".x-icon"); // erase button - main searchBar
const compareBox = document.querySelector(".city-scores-chart"); // chart contaniner

//Scarica la lista delle città disponibilli su teleport API

(async function downloadCities () {
    try{
    const download = await axios.get(`https://api.teleport.org/api/urban_areas/`);
    citiesList = await _get(download, "data._links.ua:item", "Download Error");
    } 
    catch {(error) => alert(error)}})()   

//Show hints in a autocomplete box

function displaySearchCities (cities, container) {
          const displayOnHTML = cities.map( city => {
              return `<li tabindex="0">${city.name}</li>`
          }).join('');
      container.innerHTML = displayOnHTML;
      }

// filter the data list while the user are typing

function filterDataOnInputs (e, input, data, container) {
    input.setCustomValidity('');
    const value = e.target.value.toLowerCase();
    const filteredData = data.filter ( d => {
            return (d.name.toLowerCase().startsWith(value))})
    if (data.length === filteredData.length){
        filteredData.length = 0;}
    else if (filteredData.length === 1 && filteredData[0].name.toLowerCase() === value){   
        filteredData.length = 0;}
    displaySearchCities (filteredData, container);
    let allHints = container.querySelectorAll('li');
    for (let i = 0; i<allHints.length; i++){
        allHints[i].addEventListener('click', e => {
            input.value = e.target.textContent;
            filteredData.length = 0;
            displaySearchCities (filteredData, container);
        })
        allHints[i].addEventListener('mouseover', e =>{
            container.children[i].classList.add("highlight")
        });
        allHints[i].addEventListener('mouseleave', e =>{
            container.children[i].classList.remove("highlight")
        })  
    }
}

// clear the content typed in a search bar, refreshing hints

function eraseInput (e, input, container){
    displaySearchCities ([], container);
    input.value = ''}

function searchAndShowMainCity (data, input, container){
    try {  
        let cityUrlSearch = data[data.findIndex( obj => 
            {return obj.name.toLowerCase() === input.value.toLowerCase()})].href;
            const cityToUser = new City (cityUrlSearch);    
            cityToUser.getCityData().then( () => {
                mainCity.setMainTitle(cityToUser.cityName.toUpperCase());
                mainCity.setCityBanner(cityToUser.cityImg);
                mainCity.setCityName(cityToUser.cityName, cityToUser.cityNation, cityToUser.cityContinent);
                mainCity.setCitySummary(cityToUser.citySummary);
                mainCity.setCityMayor(cityToUser.cityMayor);
                mainCity.setCityTotalScore(cityToUser.cityTotalScore.toFixed());
                mainCity.setCityChart(cityToUser.cityName, cityToUser.cityCatScores);
            });
            input.value = ''; //reset input in the searchBar
            displaySearchCities ([], container); //reset hint list            
        }

    catch {
        input.setCustomValidity('Please insert a valid city name');
        input.reportValidity()
    }
}

function keyboardListHandler (e, lastcount, inputOrigin , container, scrolldim){
    e.preventDefault();
    let counter = lastcount;
    
  // Check for up/down key presses
    
  switch(e.key){

    // Up arrow  

    case "Up":
    case "ArrowUp":            
        if (counter > 0 && counter < container.children.length-2 ){ 
            container.children[counter].classList.remove("highlight");
            counter--;
            container.children[counter].classList.add("highlight");
            container.parentElement.scrollTop -= scrolldim; 
        }
        else if (counter > 0 && counter >= container.children.length-2){ 
            container.children[counter].classList.remove("highlight");
            counter--;
            container.children[counter].classList.add("highlight"); 
        }
        else {
            container.children[counter].classList.remove("highlight");
            inputOrigin.focus();
            break;
        }            
         
      break;

// Down arrow

    case "Down":
    case "ArrowDown":
        if (counter >= 0 && counter < 2 && counter < container.children.length-1){
        container.children[counter].classList.remove("highlight");
        counter++;
        container.children[counter].classList.add("highlight");
        } 
        else if (counter >= 2 && counter < container.children.length-1) {
        container.children[counter].classList.remove("highlight");
        counter++;
        container.parentElement.scrollTop += scrolldim;
        container.children[counter].classList.add("highlight");
        };
      break;
       
    case "Enter":
        inputOrigin.value = container.children[counter].textContent;
        displaySearchCities ([], container);
        inputOrigin.focus();
        break;
  }
  return counter;

}


// MAIN SEARCH BAR EVENTS //

// Event listener on search bar inputs - generates autocomplete hints and mouse events

searchBar.addEventListener("keyup", (e) => {
    filterDataOnInputs(e, searchBar, citiesList, citiesContainer);
});

// Clear the search bar when X is clicked

eraseSearchBtn.addEventListener('click', (e)=> { 
    eraseInput(e, searchBar, citiesContainer)
});

// Start search and show the city datas with click on the search ICON

startSearchBtn.addEventListener('click', ()=> {
    searchAndShowMainCity (citiesList, searchBar, citiesContainer)    
        });

// Start search and show the city datas with ENTER key

searchBar.addEventListener('keydown', (e)=> {  
        if (e.key === 'Enter') {
            searchAndShowMainCity (citiesList, searchBar, citiesContainer)
            }

        //if key down, focus on his hints container
            
        else if (e.key === 'Down' || e.key === 'ArrowDown'){
            try{
                e.preventDefault();
                citiesContainer.children[0].classList.add("highlight");
                citiesContainer.children[0].focus();
            }
            catch {return false}
        }
});

// Navigate the main hints with keys

let mainCounter = 0;

citiesContainer.addEventListener("keydown", (e) => {
    mainCounter = keyboardListHandler(e, mainCounter, searchBar, citiesContainer, 66)
});


// COMPARE SEARCH BAR EVENTS //

// event delegator for elements dinamically created

compareBox.addEventListener("keyup", (e) => {
    if (e.target && e.target.matches("#comparesearch")){
    const compareSearchBar = document.querySelector("#comparesearch");
    const compareCitiesContainer = document.querySelector("#comparelist"); // comparing searchbar 
    filterDataOnInputs(e, compareSearchBar, citiesList, compareCitiesContainer)
    }
});

// click event on the searchbar buttons (add and remove)

compareBox.addEventListener('click', (e)=> {

    // remove second city from the chart, click event
    
    if (e.target && e.target.matches(".xc-icon")){
    const compareSearchBar = document.querySelector("#comparesearch"); // comparing searchbar 
    const removeCityChartBtn = document.querySelector(".xc-icon"); // remove city btn
    const addCityChartBtn = document.querySelector(".compare-icon"); // add city btn
    mainCity.removeCityToChart();
    compareSearchBar.value = '';
    compareSearchBar.readOnly = false;
    compareSearchBar.style.backgroundColor = 'rgb(230, 230, 230)';
    removeCityChartBtn.style.display = 'none';            
    addCityChartBtn.style.display = 'block';  
    }

    // add second city to chart for comparing, click event

    else if (e.target && e.target.matches(".compare-icon")) {
        try {  
            const compareSearchBar = document.querySelector("#comparesearch"); // comparing searchbar 
            const compareCitiesContainer = document.querySelector("#comparelist"); // hints container
            const removeCityChartBtn = document.querySelector(".xc-icon"); // remove city btn
            const addCityChartBtn = document.querySelector(".compare-icon"); // add city btn
            if (!compareSearchBar.value){return false};
            let cityUrlSearch2 = citiesList[citiesList.findIndex( obj => 
                {return obj.name.toLowerCase() === compareSearchBar.value.toLowerCase()})].href;
                const cityToUser2 = new City (cityUrlSearch2);
                cityToUser2.getCityData().then( () => {
                    mainCity.addCityToChart (cityToUser2.cityName, cityToUser2.cityCatScores);                
                });
                displaySearchCities ([], compareCitiesContainer); //reset hint list
                compareSearchBar.readOnly = true;
                compareSearchBar.style.backgroundColor = 'rgba(100, 100, 100, 0.5)';
                removeCityChartBtn.style.display = 'block';            
                addCityChartBtn.style.display = 'none';            
            }
    
        catch {
            compareSearchBar.setCustomValidity('Please insert a valid city name');
            compareSearchBar.reportValidity()
        } 
        

    }


});

// Add second city to the chart with the enter key

compareBox.addEventListener('keydown', (e)=> { 

    if (e.target && e.target.matches("#comparesearch")){

        const compareSearchBar = document.querySelector("#comparesearch"); // comparing searchbar 
        const compareCitiesContainer = document.querySelector("#comparelist"); // hints container
        const removeCityChartBtn = document.querySelector(".xc-icon"); // remove city btn
        const addCityChartBtn = document.querySelector(".compare-icon"); // add city btn

    if (e.key === 'Enter') {
        const compareSearchBar = document.querySelector("#comparesearch"); // comparing searchbar 
            const compareCitiesContainer = document.querySelector("#comparelist"); // hints container
            const removeCityChartBtn = document.querySelector(".xc-icon"); // remove city btn
            const addCityChartBtn = document.querySelector(".compare-icon"); // add city btn
            let cityUrlSearch2 = citiesList[citiesList.findIndex( obj => 
                {return obj.name.toLowerCase() === compareSearchBar.value.toLowerCase()})].href;
                const cityToUser2 = new City (cityUrlSearch2);
                cityToUser2.getCityData().then( () => {
                    mainCity.addCityToChart (cityToUser2.cityName, cityToUser2.cityCatScores);                
                });
                displaySearchCities ([], compareCitiesContainer); //reset hint list
                compareSearchBar.readOnly = true;
                compareSearchBar.style.backgroundColor = 'rgba(100, 100, 100, 0.5)';
                removeCityChartBtn.style.display = 'block';            
                addCityChartBtn.style.display = 'none';      
        }

    //if key down, focus on his hints container
        
    else if (e.key === 'Down' || e.key === 'ArrowDown'){
        try{
            e.preventDefault();
            compareCitiesContainer.children[0].classList.add("highlight");
            compareCitiesContainer.children[0].focus();
        }
        catch {return false}
    }
}
});

let compareCounter = 0;

compareBox.addEventListener("keydown", (e) => {
    if (e.target && e.target.matches("li")){
    const compareSearchBar = document.querySelector("#comparesearch"); // comparing searchbar 
    const compareCitiesContainer = document.querySelector("#comparelist"); // hints container
    compareCounter = keyboardListHandler(e, compareCounter, compareSearchBar, compareCitiesContainer, 46);
    }
});