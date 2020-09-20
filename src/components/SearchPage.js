import React from "react";
import "./../sass/main.scss";
import { Button } from "@material-ui/core";
import SearchResult from "./miniComponents/SearchResult";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 stays . 26 august to 30 august . 3 guests</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and Beds</Button>
        <Button variant="outlined">More Filters</Button>
      </div>
      <SearchResult
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
        location="Private room in center of London"
        title="Stay at this spacious Edwardian House"
        description="1 guest . 1 bedroom . 1 bed . 1.5 shared bthrooms . Wifi . Kitchen . Free parking . Washing Machine "
        rating={4.73}
        price="$45 / night"
        total="$234 total "
      />
      <SearchResult
        img="https://www.expatkings.com/wp-content/uploads/2018/10/Airbnb-rental-tips.-Hostmaker-1-620x349.jpg"
        location="Private room in center of London"
        title="Independent Luxury studio aparment"
        description="3 guests . 2 bedroom . 2 bed . 1 shared bthrooms . Wifi . Kitchen . Free parking . Washing Machine "
        rating={4.3}
        price="$60 / night"
        total="$289 total "
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/0fd1961b-56ee-492d-9aec-47d2019fd75b.jpg?im_w=1440"
        location="Private room in center of London"
        title="Luxury studio apartments"
        description="4 guests . 4 bedroom . 4 bed  . Wifi . Kitchen . Free parking . Washing Machine "
        rating={3.8}
        price="$25 / night"
        total="$185 total "
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/4ef163b5-f51e-41b3-8040-a4361123430e.jpg?im_w=1200"
        location="Private room in center of London"
        title="30mins to Oxford Street, Excel London"
        description="1 guest . 1 bedroom . 1 bed . 1.5 shared bthrooms . Wifi . Kitchen . Free parking . Washing Machine "
        rating={4.1}
        price="$55 / night"
        total="$302 total "
      />
      <SearchResult
        img="https://media.cntraveler.com/photos/5a8f258bd363c34048b35aac/master/w_2250,h_1550,c_limit/airbnb-plus-london.jpg"
        location="Private room in center of London"
        title="Spacious peaceful Modern Bedroom"
        description="3 guest . 1 bedroom . 1 bed . 1.5 shared bthrooms . Wifi . Kitchen . Free parking . Washing Machine "
        rating={4.7}
        price="$64 / night"
        total="$472 total "
      />
    </div>
  );
}

export default SearchPage;
