const router = require('express').Router();

const apiRoutes = require('./api');
const dashBoardRoutes = require('./dashBoardRoutes');
const homeRoutes = require('./homeRoutes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/dashboard', dashBoardRoutes)


module.exports = router;
