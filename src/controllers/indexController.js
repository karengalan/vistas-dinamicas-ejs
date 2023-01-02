let menu = require('../data/menu.json')

module.exports = {

    home: (req, res) => {
        return res.render('index', { /* Renderiza la vista index */
            menu    /* Envía desde el backend hacia la vista index, menu desde el controlador */
        })
    },

    menu: (req,res) => {
        return res.render ('menu', {
            menu
        })
    },

    detalle: (req, res) => {
        let id = +req.params.id
        let plato = menu.find(plato => plato.id === id)
        
        return res.render('detalleMenu', {
            plato
        })
    },
}


/*let id = +req.params.id  Guardamos la id que requerimos  que llega a la variable como un tipo de dato string y la pasamo a un tipo number con el simbolo + */