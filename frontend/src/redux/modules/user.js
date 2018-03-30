//import 

//actions

//actiosn creators

//API actions

function facebookLogin(access_token) {
    return function(dispatch) {
        fetch("/users/login/facebook/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                access_token
            })
        })
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(err => console.log(err))
    }
}

//initial state

const initialState = {
    isLoggedIn: localStorage.getItem("jwt") ? true : false
};
    

//reducer

function reducer(state = initialState, action)  {
    switch(action.switch) {
        default:
            return state;
    }
}

//reducer functions

//exports

const actionCreators = {
    facebookLogin
}

export { actionCreators };

//reducer exports
export default reducer;