const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const moviesService = require("./movies.service")

async function list(req, res, next){
    const { is_showing } = req.query;
    const data = await moviesService.list(is_showing === "true");
    res.json({data});
}

async function movieExists(req, res, next){
  const {movieId} = req.params
  const movie = await moviesService.read(movieId)
  if (movie){
    res.locals.movie = movie
    return next()
  }
return next({status: 404, message: `Movie cannot be found.`})
}

async function listTheaterByMovie(req, res, next){
  const {movieId} = req.params
  data = await moviesService.listTheaterByMovie(movieId)
  res.json({data})
}

async function listReviewsByMovie(req, res, next){
  const {movieId} = req.params
  data = await moviesService.listReviewsByMovie(movieId)
  res.json({data})
}

async function read(req, res){
const { movieId } = req.params
const data = await moviesService.read(movieId)
res.json({data})
}

async function create(req, res) {
    const data = await moviesService.create(req.body.data)
    res.status(201).json({data})
 }
 
 async function update(req, res) {
   const data = await moviesService.update(req.body.data);
   res.json({ data });
 }
 
 async function destroy(req, res) {
   const {review} = res.locals
   await moviesService.delete(review.review_id)
   res.sendStatus(204)
 }

 async function reviewExists(req, res, next) {
    const { reviewId } = req.params;
    const review = await service.read(reviewId);
    if (review) {
      res.locals.review = review;
      return next();
    }
    return next({ status: 404, message: `Review cannot be found.` });
  }
 

module.exports = {
    listReviewsByMovie: asyncErrorBoundary(listReviewsByMovie),
    listTheaterByMovie: asyncErrorBoundary(listTheaterByMovie),
    list: asyncErrorBoundary(list), 
    read: [asyncErrorBoundary(movieExists), asyncErrorBoundary(read)],
    create: asyncErrorBoundary(create),
    update: [asyncErrorBoundary(reviewExists), asyncErrorBoundary(update)],
    delete: [asyncErrorBoundary(reviewExists), asyncErrorBoundary(destroy)],
}