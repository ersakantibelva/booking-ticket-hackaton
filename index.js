// database dan filter here

let obj = [
    {
        eventType: 'Outdoor',
        eventName: 'No Way Back',
        month: 'January',
        city: 'Jakarta',
        price: 300000,
        image: "./outdoor/JAN.png"
    },
    {
        eventType: 'Outdoor',
        eventName: 'Second Piece of 12',
        month: 'February',
        city: 'Bali',
        price: 150000,
        image: "./outdoor/FEB.png"
    },
    {
        eventType: 'Outdoor',
        eventName: 'Never Ending Fantasy',
        month: 'March',
        city: 'Lombok',
        price: 250000,
        image: "./outdoor/MAR.png"
    },
    {
        eventType: 'Outdoor',
        eventName: 'In Lyric We Loved',
        month: 'April',
        city: 'Bandung',
        price: 150000,
        image: "./outdoor/APR.png"
    },
    {
        eventType: 'Outdoor',
        eventName: 'Together We Loud',
        month: 'May',
        city: 'Surabaya',
        price: 150000,
        image: "./outdoor/MAY.png"
    },
    {
        eventType: 'Outdoor',
        eventName: 'Screaming Notes',
        month: 'June',
        city: 'Yogyakarta',
        price: 100000,
        image: "./outdoor/JUNE.png"
    },
    {
        eventType: 'Outdoor',
        eventName: 'Hollow Voice',
        month: 'July',
        city: 'Malang',
        price: 150000,
        image: "./outdoor/JULY.png"
    },
    {
        eventType: 'Outdoor',
        eventName: 'RAP MON STER',
        month: 'August',
        city: 'Padang',
        price: 200000,
        image: "./outdoor/AUG.png"
    },
    {
        eventType: 'Outdoor',
        eventName: 'Melody Magician',
        month: 'September',
        city: 'Bekasi',
        price: 100000,
        image: "./outdoor/SEP.png"
    },
    {
        eventType: 'Outdoor',
        eventName: 'Music Realm',
        month: 'October',
        city: 'Palembang',
        price: 150000,
        image: "./outdoor/OCT.jpeg"
    },
    {
        eventType: 'Outdoor',
        eventName: 'EDM Party',
        month: 'November',
        city: 'Jakarta',
        price: 200000,
        image: "./outdoor/NOV.jpeg"
    },
    {
        eventType: 'Outdoor',
        eventName: 'Grand Slam',
        month: 'December',
        city: 'Bali',
        price: 250000,
        image: "./outdoor/DES.jpeg"
    },
    {
        eventType: 'Indoor',
        eventName: 'Major-ity',
        month: 'January',
        city: 'Lombok',
        price: 200000,
        image: "./indoor/major-ity-jan---15-www.event_music.com.png"
    },
    {
        eventType: 'Indoor',
        eventName: 'Silent-ly',
        month: 'March',
        city: 'Bandung',
        price: 250000,
        image: "./indoor/silent-ly-mar---15-www.event_music.com.png"
    },
    {
        eventType: 'Indoor',
        eventName: 'The Notes',
        month: 'May',
        city: 'Surabaya',
        price: 200000,
        image: "./indoor/the-notes-may--15-www.event_music.com.png"
    },
    {
        eventType: 'Indoor',
        eventName: 'Hi-story',
        month: 'July',
        city: 'Yogyakarta',
        price: 150000,
        image: "./indoor/hi-story-july--15-www.event_music.com.png"
    },
    {
        eventType: 'Indoor',
        eventName: 'Vio-lance',
        month: 'September',
        city: 'Malang',
        price: 100000,
        image: "./indoor/vio-lance-sept--15-www.event_music.com.png"
    },
    {
        eventType: 'Indoor',
        eventName: '___End',
        month: 'November',
        city: 'Padang',
        price: 200000,
        image: "./indoor/_-_-_--end-nov-.png"
    }
]



// FORM FILTER

const varMinPrice = document.querySelector("#min-price");
const varMaxPrice = document.querySelector("#max-price");
const varDate= document.querySelector("#event-date");
const varEventType = document.getElementsByName("eventType");
const varCity= document.querySelector("#city");


const minPriceOutput = document.querySelector(".min-price-output");
minPriceOutput.textContent = varMinPrice.value;

const maxPriceOutput = document.querySelector(".max-price-output");
maxPriceOutput.textContent = varMaxPrice.value;



// FILTER FUNCTION

let processed = [];
let minimumPrice;
let maximumPrice;
let date;
let eventType;
let city;


function filterThemAll(data, minPrice, maxPrice, date, eventType, city) {


    if(minPrice) {
        let temp = []
        for (let perData of data) {
            if (perData.price >= minPrice) {
                temp.push(perData)
            }
        }
        data = temp
    }

    if(maxPrice) {
        let temp = []
        for (let perData of data) {
            if (perData.price <= maxPrice) {
                temp.push(perData)
            }
        }
        data = temp
    }

    if(date && date !=="All months") {
        let temp = []
        for (let perData of data) {
            if (perData.month === date) {
                temp.push(perData)
            }
        }
        data = temp
    }

    if(eventType) {
        let temp = []
        for (let perData of data) {
            if (perData.eventType === eventType) {
                temp.push(perData)
            }
        }
        data = temp
    }

    if(city && city !== "All cities") {
        let temp = []
        for (let perData of data) {
            if (perData.city === city) {
                temp.push(perData)
            }
        }
        data = temp
    }

    return data

}

function addThemAll(processed) {
    const parent = document.getElementById("content")
    while (parent.firstChild) {
    parent.firstChild.remove()
    }

    let counter;
    let grid;
    for (let i=0; i<processed.length; i++) {
        if (i%4 === 0) {
            counter = i;
            grid = document.createElement('div')
            grid.classList.add("w3-row-padding","w3-padding-16","w3-center")
            grid.setAttribute("id", "grid"+counter)
        }

        let event = document.createElement('div')
        event.classList.add("w3-quarter")

        let pic = document.createElement('img')
        pic.src = processed[i].image
        pic.style.width = "100%";

        let name = document.createElement('h3')
        name.textContent = processed[i].eventName

        let city = document.createElement('p')
        city.textContent = processed[i].city

        let month = document.createElement('p')
        month.textContent = processed[i].month

        let price = document.createElement('p')
        price.textContent = processed[i].price

        event.appendChild(pic)
        event.appendChild(name)
        event.appendChild(city)
        event.appendChild(month)
        event.appendChild(price)

        
        grid.appendChild(event)

        if (i%4 === 3 || i === processed.length-1)  {
            parent.appendChild(grid)
        }

    }


}

// FILTER EVENT

varMinPrice.addEventListener("input", () => {
    minPriceOutput.textContent = varMinPrice.value;

    minimumPrice = Number(varMinPrice.value)

    processed = filterThemAll(obj, minimumPrice, maximumPrice, date, eventType, city)

    addThemAll(processed)
    
  });


  varMaxPrice.addEventListener("input", () => {
    maxPriceOutput.textContent = varMaxPrice.value;

    maximumPrice = Number(varMaxPrice.value)

    processed = filterThemAll(obj, minimumPrice, maximumPrice, date, eventType, city)
    
    addThemAll(processed)
  });

  varDate.addEventListener("input", () => {
    date = varDate.value

    processed = filterThemAll(obj, minimumPrice, maximumPrice, date, eventType, city)

    addThemAll(processed)
  });


  for(radio in varEventType) {
    varEventType[radio].onclick = function() {
        eventType = this.value
        processed = filterThemAll(obj, minimumPrice, maximumPrice, date, eventType, city)

        addThemAll(processed)
    }
}

  varCity.addEventListener("input", () => {
    city = varCity.value
    
    processed = filterThemAll(obj, minimumPrice, maximumPrice, date, eventType, city)    

    addThemAll(processed)
  });









