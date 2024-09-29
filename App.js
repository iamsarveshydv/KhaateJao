import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import myImage from './image/khaatejao.jpg';
import biryaani from './image/biryaani.jpg';

//Header Component
const Header = () => {

    return (
        <div className="header">
            <div className="logo-container">
                {/* <img id="img" src="https://th.bing.com/th?id=OIP.1I-74Hd21xHLUwXyXa3aOQHaF1&w=281&h=221&c=8&rs=1&qlt=90&o=6&dpr=1.7&pid=3.1&rm=2"/> */}
                <img id="img" src={myImage} />
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>contact</li>
                    <li>logout</li>

                </ul>
            </div>
        </div>

    );
};

const Restaurantcard = (props) => {
// props is just javascript object

    return (
        <div className="res-card" style={{background:"#f0f0f0"}}>
            <img className="res-logo" alt="res-logo" src={biryaani}  />
            <h3>{props.resName}</h3>
            <h4>{props.cuisine}</h4>
            <h4>{props.avgrating}</h4>
            <h4>{props.time}</h4>
        </div>

    );

};


const Body = () => {

    return (
        <div className="body">
            <div className="search">search</div>
            <div className="res-container">               
            < Restaurantcard  resName="Meghna Foods" cuisine="Biryaani,North Indian,Asian" avgrating="4.5" time="30 mins" />
            < Restaurantcard  resName="KFC" cuisine="Burger, Fries, coke"  avgrating="4.5" time="30 mins"/>
            < Restaurantcard  resName="Namaste" cuisine="Biryaani,North Indian,Asian" avgrating="4.5" time="30 mins" />
            < Restaurantcard  resName="Levels" cuisine="Burger, Fries, coke"  avgrating="4.5" time="30 mins"/>
            < Restaurantcard  resName="Story's" cuisine="Biryaani,North Indian,Asian" avgrating="4.5" time="30 mins" />
            < Restaurantcard  resName="Dominos" cuisine="Burger, Fries, coke"  avgrating="4.5" time="30 mins"/>
            </div>
        </div>

    );
};


//its is simple Javascript opject
const resObj={
    
        "info": {
          "id": "151648",
          "name": "Mr. Gurung Momo & Chinese Corner",
          "cloudinaryImageId": "h7oibtpm7kqks8cqz3gh",
          "locality": "Teacher's Colony",
          "areaName": "Mohan Nagar",
          "costForTwo": "₹150 for two",
          "cuisines": [
            "Momos",
            "Chinese",
            "Fast Food"
          ],
          "avgRating": 4.2,
          "veg": true,
          "parentId": "140255",
          "avgRatingString": "4.2",
          "totalRatingsString": "1.0K+",
          "sla": {
            "deliveryTime": 47,
            "lastMileTravel": 11.8,
            "serviceability": "SERVICEABLE",
            "slaString": "45-50 mins",
            "lastMileTravelString": "11.8 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-09-29 23:00:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "pureveg",
                      "imageId": "v1695133679/badges/Pure_Veg111.png"
                    }
                  }
                ]
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "20% OFF",
            "subHeader": "UPTO ₹50"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/city/chhindwara/mr-gurung-momo-and-chinese-corner-teachers-colony-mohan-nagar-rest151648",
          "type": "WEBLINK"
        }
    }
    
    


//Functional component
const AppLayout = () => {

    return (<div className="app">
        <Header />
        <Body />
    </div>)

};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
