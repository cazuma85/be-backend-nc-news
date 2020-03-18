const errorHandler = (err, req, res, next) => {
  if (err.code === '42P01') {
    res.status(400).send({ msg: 'relation does not exist ' });
  } else {
    res.status(err.status).send({ msg: err.msg });
  }
};

module.exports = {errorHandler}; 
