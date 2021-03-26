export const state = () => ({
    token: null
})

export const getters = {
    isAuthenticated (state) {
        return state.token != null
    }
}

export const mutations = {
    setToken(state, token) {
        state.token = token
    }
}

export const actions = {
    async authenticateUser (vuexContext, authData) {
        try {
            await this.$axios.$post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyANEgLLr8YTJuo43M4BP0Ds0JB0VndY3SU`, {
                email: authData.email,
                password: authData.password,
                returnSecureToken: true
            }).then(res => {
                console.log(vuexContext)
                vuexContext.commit('setToken', res.idToken)
            })
        } catch (e) {
            console.log(e)
        }
    }
}
