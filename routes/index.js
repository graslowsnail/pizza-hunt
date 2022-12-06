const router = require('express').Router();
// Import all of the APo routes from /api/index.js (no need for index.js though since it's imnplied)
const apiRoutes = require('./api');
const htmlRoutes = require('./html/html-routes');

// add prefix pf `/api` to all of the api routes imported from the `api directory
router.use('/api', apiRoutes);
router.use('/', htmlRoutes);

router.use((req, res) => {
  res.status(404).send('<h1>😝 404 Error!</h1>');
});

module.exports = router;
