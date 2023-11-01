const { Router } = require('express')
const { reviewsController } = require('../controllers/reviews.controller')
const router = Router()


router.get('/reviews', reviewsController.getReviews)
router.post('/reviews', reviewsController.postReview)
router.delete('/reviews/:id', reviewsController.deleteReview)

module.exports = router;