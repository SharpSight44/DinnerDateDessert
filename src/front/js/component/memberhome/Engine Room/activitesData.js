import { GlobalZipCode } from "../../../layout";
import React, { useContext } from "react";



export const miamiData = { sbacts: {name:"Beach Day ", image_url:"https://travel.home.sndimg.com/content/dam/images/travel/fullset/2015/12/04/south-beach-miami-florida.jpg.rend.hgtvcom.1280.960.suffix/1491581428208.jpeg", description:"Just beyond its iconic, pastel-hued Art Deco buildings lining Ocean Drive lies the area’s legendary shoreline with aquamarine water and fine sand. Famed for its cachet among international celebrities, South Beach is where you’ll find beautiful people soaking up the sun and the scene."},
  wynwoodActs: {name:"Wynwood Walls", image_url:"https://media2.miaminewtimes.com/mia/imager/u/original/11776034/wynwoodwalls8.jpeg", description:"Wynwood Walls has become a phenomenon, spurring the creation of murals throughout the Wynwood district. It is now one of the best venues in the world to see the work of leading street artists."},

 doralActs: {name:"City Place", image_url:"https://images.miamiandbeaches.com/crm/simpleview/image/upload/w_1440,h_900,c_fit/crm/miamifl/CityPlace-Doral01_7c4084c4-5056-a36a-0bbe6f3beca4f23a.jpg", description:"At CityPlace Doral, you’ll find an expansive collection of dining options, from upscale restaurants to outdoor cafés and bistros. With so many options to choose from, you’ll definitely find whatever your heart desires."}
 
}

export const brickell = [{name:"City Centre CMX", image_url:"https://www.newlink-group.com/uploads/press/f10ff50024f73005a20b979626949c9a53a2664d.jpg", description:"Expect the crème de la crème of surround sound and hi-def screens, plush kick-back seating, delish gourmet treats courtesy of Biko chef Mikel Alonso"},{name:"FTX arena", image_url:"https://genesisblockhk.com/wp-content/uploads/2021/06/4uLHD0YA.jpg", description:"Located in Downtown Miami. Come for Concerts, Sporting Events, and More! "},{name:"Bayside MarketPlace", image_url:"https://www.miamigov.com/files/sharedassets/public/dream/marinas/miamarina-bayside-4.jpg", description:"Bayside Marketplace is a two-story open air shopping center located in the downtown Miami, Florida. The banks of Biscayne Bay wrap around the property with the City of Miami marina at its side."}];




export const soMa = [
  {name:"Yerba Buena Gardens", image_url:"https://s3-media0.fl.yelpcdn.com/bphoto/s2dGrcHrr4bXKi_XxqpKMQ/o.jpg",description:"Landscaped green space, great food, museums and culture, ice skating and bowling, public art, shopping -- all in the heart of DWTN SF."},
{name:"The View Lounge", image_url:"https://s3-media0.fl.yelpcdn.com/bphoto/rxcBoPUlApxeF3nwCYx9nQ/o.jpg",description:"Come relax and take in the breath taking views of the city."},
{name:"San Francisco Museum of Modern Art", image_url:"https://s3-media0.fl.yelpcdn.com/bphoto/igdi2NkR0P-3S4FCX39FmQ/o.jpg",description:"The acclaimed SF MoMa."},
{name:"Bottom of the Hill", image_url:"https://s3-media0.fl.yelpcdn.com/bphoto/SbpkaDiogsWT8N2Tda3pPw/o.jpg",description:"SoMa's favorite Music Venue"},
{name:"SPiN - San Francisco", image_url:"https://s3-media0.fl.yelpcdn.com/bphoto/-lLrLBft-YC-uU8EGOjhkA/o.jpg",description:"Cocktails and Ping Pong!"}
] ;

export const upperHaight = [
  {name:"Conservatory of Flowers", image_url:"https://s3-media0.fl.yelpcdn.com/bphoto/8qEFV9DUyBAN1lwNzLpZMA/o.jpg",description:"The Conservatory of Flowers is a unique living museum that's bursting with life just waiting to be discovered. Its intimate setting gives visitors an up-close look at rare, exotic plants and beautiful tropical flowers."},
{name:"The Independent", image_url:"https://s3-media0.fl.yelpcdn.com/bphoto/Rv3HoRyVjZg3UYhsurXj-w/o.jpg",description:"Come relax and take in the breath taking views of the city."},
{name:"The Castro Theatre", image_url:"https://s3-media0.fl.yelpcdn.com/bphoto/XKNnaMKKy3dKgIHiLoLK7w/o.jpg",description:"Historic venue. Film and live comedy in the nearbay Castro District"},
{name:"California Academy of Sciences", image_url:"https://s3-media0.fl.yelpcdn.com/bphoto/7eCeoH7kp3h3GAek7UCmvQ/o.jpg",description:"Science museum with a stunning indoor rainforest, aquarium, and state-of-the-art planetarium"},
{name:"de Young", image_url:"https://s3-media0.fl.yelpcdn.com/bphoto/QU6UQqGqBiBeIro7A4Sa8g/o.jpg",description:"Acclaimed art museum, houses collections of American painting, sculpture, and decorative arts from the 17th to the 21st centuries; art from Oceania, Africa, and the Americas; a diverse collection of costumes and textiles; and international contemporary art"}
] ;

 export const missionDistrict = [
  {name:"Arcana", image_url:"https://s3-media0.fl.yelpcdn.com/bphoto/6HxYbMHRvL5SEsDhTwTfwQ/o.jpg",description:"An urban greenhouse, a shared `living room` in the heart of Mission. At Arcana, magical mysteries come together to celebrate nature, culture, music and art from all over the world. Bar, Restaurant and Entertainment Serving global natural wines and plant-based food inspired by Middle Eastern cuisine."},
{name:"Mission Cultural Center For Latino Arts", image_url:"https://s3-media0.fl.yelpcdn.com/bphoto/6ktNcWXyUM8UUjp6v4LBfg/o.jpg",description:"Art school, dance studio, and cultural center serving the Mission."},
{name:"The Chapel", image_url:"https://s3-media0.fl.yelpcdn.com/bphoto/-mzzqbTUgGKKGLMmG4NrPA/o.jpg",description:"The Chapel is a music venue in the heart of San Francisco's Mission District. In addition to live shows in the venue, the Main Bar is also a great place for concert ticket-holders to enjoy specialty cocktails and food before, during and after shows."},
{name:"Radio Habana Social Club", image_url:"https://s3-media0.fl.yelpcdn.com/bphoto/2GsfzQu9fOtwVuz4IBNSNg/o.jpg",description:"A San Francisco institution. Bar featuring live (big band and acoustic) and dj music, film and art showings, comedy, drag, spoken word, jams, burlesque and fundraisers to no end."},
{name:"Mission Dolores Park", image_url:"https://s3-media0.fl.yelpcdn.com/bphoto/sG7kqe_sN5med9j7c7U_vg/o.jpg",description:"A popular picnic spot for locals, surrounded by breathtaking panoramic views of the City."}
] ;

export const theMarina = [
  {name:"Japantown", image_url:"https://s3-media0.fl.yelpcdn.com/bphoto/XcwWEbED6X_0BykmSPc7sA/o.jpg",description:"San Francisco's Japantown has been the center of the Bay Area's Japanese and Japanese American community since 1906. It continues to an exciting place to explore and find authentic Japanese culture, restaurants and shops."},
{name:"Palace of Fine Arts", image_url:"https://s3-media0.fl.yelpcdn.com/bphoto/D3XLMNyAg61WzZtw_nco4A/o.jpg",description:"Greco-Roman interiors and lush landscaping next to Golden Gate Bridge. Originally built for the 1915 Panama-Pacific Exhibition, it houses an enormous exhibition center and theater, and is surrounded by a stunning lagoon."},
{name:"The Walt Disney Family Museum", image_url:"https://s3-media0.fl.yelpcdn.com/bphoto/0zaWkFJLRv3CiRSzrZENcA/o.jpg",description:"The Walt Disney Family Museum tells the story of the life and work of Walt Disney."},
{name:"PIER 39", image_url:"https://s3-media0.fl.yelpcdn.com/bphoto/5tMxcoc0x2mAIZG9A2JUAA/o.jpg",description:"PIER 39 is the premiere entertainment destination in the heart of the San Francisco waterfront."},
{name:"Cobb's Comedy Club", image_url:"https://s3-media0.fl.yelpcdn.com/bphoto/e9Ak1sOp35TOOyzmzTBo3w/o.jpg",description:" Located in San Francisco's nearby famous North Beach, Cobb's offers a taste of old San Francisco and the city's ever-changing nightlife."}
] ;




