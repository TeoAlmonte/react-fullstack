import express from 'express'
import config from './config'
import router from './api/index'
import exphbs from 'express-handlebars'

const app = express();

app.use(express.static('public'))

app.set('view engine', 'hbs');
app.engine('hbs', exphbs({defaultLayout: 'main',extname: '.hbs'}));

app.get('/', function (req, res) {
  res.render('home');
});

app.use('/api', router)

app.listen(config.port, () => {
  console.log(`express running on http://localhost:${config.port}`)
})