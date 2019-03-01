const passport = require('passport')
const passportJwt = require('passport-jwt')
const { Strategy, ExtractJwt } = passportJwt

module.exports = app => {
    const params = {
        secretOrKey: 'Ch4V3S#CR3T4',
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    }

    // estrategia definida para autenticar usuario, vai no banco e buscao pelo id
    // se encontrar alguem chama o callback de done
    const strategy = new Strategy(params, (payload, done) => {
        app.db('users')
            .where({ id: payload.id })
            .first()
            .then(user => {
                if(user) {
                    done(null, { id: user.id, email: user.email })
                } else {
                    done(null, false)
                }
            })
            .catch(err => done(err, false))
    })

    // setando a estragegia no passaport
    passport.use(strategy)

    return {
        initialize: () => passport.initialize(),
        authenticate: () => passport.authenticate('jwt', { session: false })
    }
}