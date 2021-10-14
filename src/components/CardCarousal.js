import React, { useState } from 'react';
import $ from 'jquery';
import Carousel from 'react-bootstrap/Carousel';

export default function CardCarousal() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel fade activeIndex={index} onSelect={handleSelect} className="four_shows_one_move team_columns_carousel_wrapper">
      <Carousel.Item>
        <div className="col-xs-12 col-sm-6 col-md-3 team_columns_item_image">
          <img src="http://placehold.it/150x150" alt="slider 01" />
          <div className="team_columns_item_caption">
            <h4>Bangalore</h4>
            <hr />
            <h5>India</h5>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-1">
          <img src="http://placehold.it/150x150" alt="slider 02" />
          <div className="team_columns_item_caption">
            <h4>Bangalore</h4>
            <hr />
            <h5>India</h5>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-2">
          <img src="http://placehold.it/150x150" alt="slider 02" />
          <div className="team_columns_item_caption">
            <h4>Karachi</h4>
            <hr />
            <h5>India</h5>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-3">
          <img src="http://placehold.it/150x150" alt="slider 02" />
          <div className="team_columns_item_caption">
            <h4>Bangalore</h4>
            <hr />
            <h5>India</h5>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="col-xs-12 col-sm-6 col-md-3 team_columns_item_image">
          <img src="http://placehold.it/150x150" alt="slider 01" />
          <div className="team_columns_item_caption">
            <h4>Bangalore</h4>
            <hr />
            <h5>India</h5>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-1">
          <img src="http://placehold.it/150x150" alt="slider 02" />
          <div className="team_columns_item_caption">
            <h4>Bangalore</h4>
            <hr />
            <h5>India</h5>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-2">
          <img src="http://placehold.it/150x150" alt="slider 03" />
          <div className="team_columns_item_caption">
            <h4>Karachi</h4>
            <hr />
            <h5>India</h5>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-3">
          <img src="http://placehold.it/150x150" alt="slider 04" />
          <div className="team_columns_item_caption">
            <h4>Bangalore</h4>
            <hr />
            <h5>India</h5>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="col-xs-12 col-sm-6 col-md-3 team_columns_item_image">
          <img src="http://placehold.it/150x150" alt="slider 01" />
          <div className="team_columns_item_caption">
            <h4>Bangalore</h4>
            <hr />
            <h5>India</h5>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-1">
          <img src="http://placehold.it/150x150" alt="slider 02" />
          <div className="team_columns_item_caption">
            <h4>Bangalore</h4>
            <hr />
            <h5>India</h5>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-2">
          <img src="http://placehold.it/150x150" alt="slider 03" />
          <div className="team_columns_item_caption">
            <h4>Karachi</h4>
            <hr />
            <h5>India</h5>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-3">
          <img src="http://placehold.it/150x150" alt="slider 04" />
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
