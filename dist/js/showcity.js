import Chart from 'chart.js/auto';
const _get = require('lodash/get');

function hexToRGB(hex, alpha) {
    var r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
        return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    } else {
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }
}


export class ShowCity {
    constructor(){
        this.cityMainTitle = document.querySelector(".main-title");
        this.cityBannerPhoto = document.querySelector(".banner-container");
        this.cityName = document.querySelector(".city-name");
        this.citySummary = document.querySelector(".city-summary");
        this.cityMayor = document.querySelector(".city-mayor");
        this.cityTotalScore = document.querySelector(".total-score-container");
        this.cityChartFrame = document.querySelector(".city-scores-chart")
    }

    setMainTitle (data){

        this.cityMainTitle.textContent = data;
    }

    setCityBanner (href){
        this.cityBannerPhoto.style.backgroundImage = `url('${href.web}')`
    }

    setCityName (name, nation, continent){  
        this.cityName.innerHTML = `<h1>${name}</h1><h3>${nation}, ${continent}</h3>`; 
    }

    setCitySummary (summary){
        this.citySummary.innerHTML = summary;
    }

    setCityMayor (mayor){
        this.cityMayor.innerHTML = `<p> The name of the city mayor is <strong>${mayor}</strong></p>`;
    }

    setCityTotalScore (score){
        this.cityTotalScore.innerHTML = `<span class="city-total-score">${score}</span><span class="score-label">BCTL Score</span>`
    }

    setCityChart (cityname1, scores1){
        const chartHtml = `<h1 class="chart-title">Rating life</h1>
       <canvas id="cityChart" width="400" height="400"></canvas><div class="compare-box"></div>`;
        this.cityChartFrame.innerHTML = chartHtml;
        const ctx = document.querySelector("#cityChart");
        const catNames = scores1.map( x => x.name);
        const catHexColors = scores1.map( x => x.color);
        const catRgbaColors = catHexColors.map( c => hexToRGB(c, 0.5));
        const catBorderColors = catHexColors.map( c => hexToRGB(c, 1));
        const catScores = scores1.map( x => x.score_out_of_10.toFixed());

        const mainChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: catNames,
                datasets: [{
                    label: `Scores for ${cityname1}`,
                    data: catScores,
                    backgroundColor: catRgbaColors,
                    borderColor: catBorderColors,
                    borderWidth: 1
                }
            ]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
        this.mainChart = mainChart;

        // add search bar for compare option

        const searchCompareBox = document.querySelector(".compare-box");
        const compareHTML= `<span id="compare-label">Compare with:</span><input type="search" id="comparesearch" placeholder="Another city...">
        <div class="xc-icon"><i class="fas fa-xmark"></i></div>
        <div class="compare-icon"><i class="fas fa-plus"></i></div>
        <div class="comp-city-container">
            <ul id="comparelist"></ul>`;
        searchCompareBox.innerHTML = compareHTML;
    }

    addCityToChart (name, scores){
       
        const data = this.mainChart.config.data;
        const compareCatScores = scores.map( x => x.score_out_of_10.toFixed());
        const newDataset = {
        label: `Scores for ${name}`,
        data: compareCatScores,
        backgroundColor: 'rgba(100,100,100, 0.8)',
        borderColor: 'rgba(100,100,100, 1)',
        borderWidth: 1,
        }
      data.datasets.push(newDataset);
      this.mainChart.update();
    }

    removeCityToChart (){
        const data = this.mainChart.config.data;
        data.datasets.pop();
        this.mainChart.update();
    }
}