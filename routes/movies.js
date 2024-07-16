const express = require('express');
const multer = require('multer');
const { getMovies, createMovie, updateMovie, deleteMovie, restoreMovie } = require('../controllers/movies');
const router = express.Router();

const upload = multer({ dest: 'uploads/' });

router.get('/getmovie', getMovies);
router.post('/createmovie', upload.single('poster'), createMovie);
router.put('/updatemovie/:id', updateMovie);
router.delete('/delete/:id', deleteMovie);
router.post('/restore/:id', restoreMovie);

module.exports = router;