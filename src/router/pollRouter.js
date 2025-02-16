const pollRouter = require("../controller/pollController");

const {Router} = require('express');

const router = Router();

router.route('/polls').get(pollRouter.getAllPolls).post(pollRouter.createPoll);
router.route('/polls/:id').get(pollRouter.getPoll);
router.route('/polls/:id/vote').post(pollRouter.vote);

module.exports = router;