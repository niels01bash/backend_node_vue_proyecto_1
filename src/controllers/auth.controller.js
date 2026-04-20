export default {
    funLogin(req, res){
        res.json({mensaje: "Logueando...."})
    },
    funRegister(req, res){
        res.json({mensaje: "registrado...."})
    },
    funPerfil(req, res){
        res.json({mensaje: "obteniendo el perfil...."})
    },
    funLogout(req, res){
        res.json({mensaje: "saliendo...."})
    }

};
