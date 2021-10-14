import React from 'react';

export default function CardCarousal() {
  return (
    <div class="container">
      <div class="row">
        <div
          id="adv_team_4_columns_carousel"
          class="carousel slide four_shows_one_move team_columns_carousel_wrapper"
          data-ride="carousel"
          data-interval="2000"
          data-pause="hover"
        >
          <div class="carousel-inner" role="listbox">
            <div class="item">
              <div class="col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-3">
                <img src="http://placehold.it/150x150" alt="slider 02" />
                <div class="team_columns_item_caption">
                  <h4>Bangalore</h4>
                  <hr />
                  <h5>India</h5>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="col-xs-12 col-sm-6 col-md-3 team_columns_item_image">
                <img src="http://placehold.it/150x150" alt="slider 02" />
                <div class="team_columns_item_caption">
                  <h4>Mysore</h4>
                  <hr />
                  <h5>India</h5>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-1">
                <img src="http://placehold.it/150x150" alt="slider 02" />
                <div class="team_columns_item_caption">
                  <h4>Bangalore</h4>
                  <hr />
                  <h5>India</h5>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-2">
                <img src="http://placehold.it/150x150" alt="slider 02" />
                <div class="team_columns_item_caption">
                  <h4>Bangalore</h4>
                  <hr />
                  <h5>India</h5>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-3">
                <img src="http://placehold.it/150x150" alt="slider 02" />
                <div class="team_columns_item_caption">
                  <h4>Bangalore</h4>
                  <hr />
                  <h5>India</h5>
                </div>
              </div>
            </div>
          </div>
          <a
            class="left carousel-control team_columns_carousel_control_left adv_left"
            href="#adv_team_4_columns_carousel"
            role="button"
            data-slide="prev"
          >
            <span
              class="fa fa-angle-left team_columns_carousel_control_icons"
              aria-hidden="true"
            ></span>
            <span class="sr-only">Previous</span>
          </a>

          <a
            class="right carousel-control team_columns_carousel_control_right adv_right"
            href="#adv_team_4_columns_carousel"
            role="button"
            data-slide="next"
          >
            <span
              class="fa fa-angle-right team_columns_carousel_control_icons"
              aria-hidden="true"
            ></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
}
