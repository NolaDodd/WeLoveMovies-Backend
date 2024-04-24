const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const reviewsService = require("./reviews.service")

async function list(req, res, next){
    const data = await reviewsService.list();
    res.json({data});
}

async function read(req, res){
const { reviewId } = req.params
const data = await reviewsService.read(reviewId)
res.json({data})
}

async function create(req, res) {
    const data = await reviewsService.create(req.body.data)
    res.status(201).json({data})
 }

 async function reviewExists(req, res, next){
  const {reviewId} = req.params
  const review = await reviewsService.read(reviewId)
  if (review){
    res.locals.review = review
    return next()
  }
return next({status: 404, message: `Review cannot be found.`})
}
 
async function update(req, res) {
  const updatedReview = {
    ...res.locals.review,
    ...req.body.data,
    review_id: res.locals.review.review_id,
  };
   const data = await reviewsService.update(updatedReview);
   res.json({ data });
 }

 async function destroy(req, res) {
   const {review} = res.locals
   await reviewsService.delete(review.review_id)
   res.sendStatus(204)
 }

module.exports = {
    list: asyncErrorBoundary(list), 
    read: [asyncErrorBoundary(reviewExists), asyncErrorBoundary(read)],
    create: asyncErrorBoundary(create),
    update: [asyncErrorBoundary(reviewExists), asyncErrorBoundary(update)],
    delete: [asyncErrorBoundary(reviewExists), asyncErrorBoundary(destroy)],
}