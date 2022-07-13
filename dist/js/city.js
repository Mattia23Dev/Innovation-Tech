import axios from 'axios';
const _get = require('lodash/get');

export class City {
    constructor(mainurl){
        this.cityMainUrl = mainurl;    
    }

    // Dowload Main Data of any City

    async getCityData () {
        try {
        const downloadMain = await axios.get(this.cityMainUrl);
        this.cityName = _get (downloadMain, 'data.name', 'Error, try to reload the page');
        this.cityFullName = _get (downloadMain, 'data.full_name','Error, try to reload the page');
        this.cityNation = this.cityFullName.replace(`${this.cityName}, `, '');
        this.cityMayor = _get (downloadMain, 'data.mayor','not avalaible');
        this.cityContinent = _get (downloadMain, 'data.continent', 'Error, try to reload the page'); 
        const cityImgUrl = _get (downloadMain, 'data._links.ua:images.href', 'Error, try to reload the page'); 
        const cityScoresUrl = _get (downloadMain, 'data._links.ua:scores.href', 'Error, try to reload the page');
        const downloadImg = await axios.get(cityImgUrl);
        const downloadScores = await axios.get(cityScoresUrl);
        this.cityImg = _get (downloadImg, 'data.photos[0].image', 'Error, try to reload the page');
        this.citySummary = _get (downloadScores, 'data.summary', 'Error, try to reload the page');
        this.cityTotalScore = _get (downloadScores, 'data.teleport_city_score', 'Error, try to reload the page');
        this.cityCatScores = _get (downloadScores, 'data.categories', 'Error, try to reload the page');
        }
        catch {(error) => {
            console.log(error)
            alert(`Something was wrong: ${error}`);
        }}  
    }
}    
