const express = require('express');
const app = express();
const hbs = require('hbs')

app.use(express.static('public'));
app.set('views', __dirname + '/public/views');
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/public/views/partials');

app.get('/', (req, res, next) => {
    const data = {
        name: `<em>VISITOR</em>`
    }
    res.render('home', data);
});

app.get('/gallery', (req, res, next) => {
    const data = {
        src1:"/images/myAvatar.png",
        src2:"/images/barricade.png",
        src3:"/images/soldado.png",
        src4:"/images/teeest.png" 

    }
    res.render( 'gallery', data);
});

app.get('/about', (req, res, next) => {
    const data = {}
    res.render( 'about', data);
});

app.listen(3000, () => {
    console.log('My first app listening on port 3000!');
});