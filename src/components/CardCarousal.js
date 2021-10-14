import React, { useState } from 'react';
import $ from 'jquery';
import Carousel from 'react-bootstrap/Carousel';

export default function CardCarousal() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel
      fade
      indicators="true"
      activeIndex={index}
      onSelect={handleSelect}
      className="four_shows_one_move team_columns_carousel_wrapper"
    >
      <Carousel.Item className="d-flex">
        <div className="col-xs-3 col-sm-3 col-md-3 team_columns_item_image">
          <div className="team_columns_item_caption">
            <h4>Bangalore</h4>
            <hr />
            <h5>India</h5>
          </div>
        </div>
        <div className="col-xs-3 col-sm-3 col-md-3 team_columns_item_image cloneditem-1">
          <div className="team_columns_item_caption">
            <h4>Bangalore</h4>
            <hr />
            <h5>India</h5>
          </div>
        </div>
        <div className="col-xs-3 col-sm-3 col-md-3 team_columns_item_image cloneditem-2">
          <div className="team_columns_item_caption">
            <h4>Karachi</h4>
            <hr />
            <h5>India</h5>
          </div>
        </div>
        <div className="col-xs-3 col-sm-3 col-md-3 team_columns_item_image cloneditem-3">
          <div className="team_columns_item_caption">
            <h4>Bangalore</h4>
            <hr />
            <h5>India</h5>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item className="d-flex">
        <div className="col-xs-3 col-sm-3 col-md-3 team_columns_item_image">
          <div className="team_columns_item_caption">
            <h4>Mysore</h4>
            <hr />
            <h5>India</h5>
          </div>
        </div>
        <div className="col-xs-3 col-sm-3 col-md-3 team_columns_item_image cloneditem-1">
          <div className="team_columns_item_caption">
            <h4>Bangalore</h4>
            <hr />
            <h5>India</h5>
          </div>
        </div>
        <div className="col-xs-3 col-sm-3 col-md-3 team_columns_item_image cloneditem-2">
          <div className="team_columns_item_caption">
            <h4>Karachi</h4>
            <hr />
            <h5>India</h5>
          </div>
        </div>
        <div className="col-xs-3 col-sm-3 col-md-3 team_columns_item_image cloneditem-3">
          <div className="team_columns_item_caption">
            <h4>Bangalore</h4>
            <hr />
            <h5>India</h5>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item className="d-flex">
        <div className="col-xs-3 col-sm-3 col-md-3 team_columns_item_image">
          <div className="team_columns_item_caption">
            <h4>Raichur</h4>
            <hr />
            <h5>India</h5>
          </div>
        </div>
        <div className="col-xs-3 col-sm-3 col-md-3 team_columns_item_image cloneditem-1">
          <div className="team_columns_item_caption">
            <h4>Bangalore</h4>
            <hr />
            <h5>India</h5>
          </div>
        </div>
        <div className="col-xs-3 col-sm-3 col-md-3 team_columns_item_image cloneditem-2">
          <div className="team_columns_item_caption">
            <h4>Karachi</h4>
            <hr />
            <h5>India</h5>
          </div>
        </div>
        <div className="col-xs-3 col-sm-3 col-md-3 team_columns_item_image cloneditem-3">
          <div className="team_columns_item_caption">
            <h4>Bangalore</h4>
            <hr />
            <h5>India</h5>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}
