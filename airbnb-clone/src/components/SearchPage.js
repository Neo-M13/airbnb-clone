import React from "react";
import { Button } from "@mui/material";
import "./SearchPage.css";
import SearchResults from "./SearchResults";

const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="searchPage_info">
        <p>62 stays . 26 August to 30 August . 2 guest</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Typ of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined"> More filters</Button>
      </div>
      <SearchResults img="https://encryped_tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU" 
      location="Private room in center of London"
      title="Stay at this spacious Edwardian House"
      description="1 guest . 1 bedroom . 1 bed . 1.5 shared bathrooms . Wifi . Kitchen . Free parking . Washing machine"
      star={4.73}
      price="$30/night"
      total="$117 total"
      />
      <SearchResults img="https://www.smartertravel.com/uploads/2017/07/Untitles-design-8.jpg" 
      location="Private room in center of London"
      title="The Blue Room In London"
      description="2 guest . 1 bedroom . 1 bed . 1.5 shared bathrooms . Wifi . Washing machine"
      star={4.73}
      price="$65/night"
      total="$480 total"
      />
      <SearchResults img="https://image.insider.com/585029a0dd0895bc548b4b8b?width=750&format=jpeg&auto=webp" 
      location="Private room in center of London"
      title="5 Star Luxury Apartment"
      description="3 guest . 1 bedroom . 1 bed . 1.5 shared bathrooms . Wifi . Kitchen . Free parking . Washing machine"
      star={3.85}
      price="$90/night"
      total="$650 total"
      />
    </div>
  );
};

export default SearchPage;
