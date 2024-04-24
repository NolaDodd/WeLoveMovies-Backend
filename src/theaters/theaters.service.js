const knex = require("../db/connection")
const reduceProperties = require("../utils/reduce-properties")

const movieCategory = reduceProperties("theater_id", {
theater_id: ["theater", "theater_id"],
movie_id: ["movies", null, "movie_id"],
rating: ["movies", null, "rating"],
runtime_in_minutes: ["movies", null, "runtime_in_minutes"],
title: ["movies", null, "title"], 
image_url: ["movies", null, "image_url"]
})

function list(){
    return knex("theaters as t")
    .join("movies_theaters as mt", "t.theater_id", "mt.theater_id" )
    .join("movies as m", "m.movie_id", "mt.movie_id")
    .select("t.theater_id", "t.name", "t.address_line_1", "t.address_line_2", "t.city", "t.state", "t.zip", 
    "m.movie_id", "m.image_url", "m.description", "m.rating", "m.title", "m.runtime_in_minutes","mt.is_showing")
    .then((data) => movieCategory(data))
}

function read(theaterId){
    return knex("theaters").select("*").where({theater_id: theaterId}).first()
}

module.exports = {
    list, 
    read, 
    }