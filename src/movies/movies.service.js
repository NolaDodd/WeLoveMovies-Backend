const knex = require("../db/connection")
const mapProperties = require("../utils/map-properties")

function list(is_showing){
    if (is_showing) {
        return knex("movies as m")
            .join("movies_theaters as mt", "m.movie_id", "mt.movie_id")
            .select("m.*")
            .where({"mt.is_showing": true})
            .groupBy("m.movie_id");
    }
    return knex("movies").select("*");
}


function listTheaterByMovie(movieId){
    return knex("theaters as t")
    .join("movies_theaters as mt", "mt.theater_id", "t.theater_id")
    .select("t.*", "mt.movie_id", "mt.theater_id")
    .where({"mt.movie_id": movieId})
}

function listReviewsByMovie(movieId){
    return knex("reviews as r")
    .join("critics as c", "r.critic_id", "c.critic_id")
    .join("movies as m", "m.movie_id", "r.movie_id")
    .select("r.*", "c.critic_id", "c.preferred_name", "c.surname", "c.organization_name", "c.created_at", "c.updated_at")
    .where({"m.movie_id": movieId})
    .then(data => data.map(review => ({
        ...review,
        critic: {
            critic_id: review.critic_id,
            preferred_name: review.preferred_name,
            surname: review.surname,
            organization_name: review.organization_name,
            created_at: review.created_at,
            updated_at: review.updated_at
        }
    })));
}


function read(movieId){
    return knex("movies").select("*").where({movie_id: movieId}).first()
}

function create(review) {
    return knex("reviews")
      .insert(review)
      .returning(["review_id", "review_title", "review_body"])
      .then(createdRecords => createdRecords[0])
  }
  
  function update(updatedReview) {
    return knex("reviews")
      .select("*")
      .where({ review_id: updatedReview.review_id })
      .update(updatedreview, "*")
      .then(result => result[0]);
  }
  
  function destroy(reviewId) {
  return knex("reviews").where({review_id: reviewId}).del()
  }

  
module.exports = {
    listReviewsByMovie,
    listTheaterByMovie,
    list, 
    read, 
    create, 
    update, 
    delete: destroy}