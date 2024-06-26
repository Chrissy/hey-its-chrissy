const express = require('express');
const app = express();

if (process.env.NODE_ENV == 'production') {
  app.get('/dist/bundle.js', (request, response) => {
    response.redirect('https://s3-us-west-2.amazonaws.com/chrissy-portfolio-images/bundle.js');
  })

  app.get('/images/*', (request, response) => {
    response.redirect(`https://s3-us-west-2.amazonaws.com/chrissy-portfolio-images/${request.params['0']}`);
  })
}

app.use(express.static('static'));

app.listen(process.env.PORT || 5001, function () {
  console.log('listening on port 5001');
});
