import express from 'express'
import config from './config'
import router from './api/index'
import exphbs from 'express-handlebars'
import sassMiddleware from 'node-sass-middleware'
import path from 'path'
import serverRender from './serverRender'

const app = express();

app.use(express.static('public'))

app.use(sassMiddleware({
  src: path.join(__dirname, 'sass'),
  dest: path.join(__dirname, 'public')
}))

app.set('view engine', 'hbs');
app.engine('hbs', exphbs({defaultLayout: 'main',extname: '.hbs'}));

app.get('/', function (req, res) {
  serverRender()
    .then(content => {
      res.render('home', {
        content
      })
    })
    .catch(console.error)
});

app.use('/api', router)

app.listen(config.port, config.host, () => {
  console.log(`express running on http://localhost:${config.port}`)
})