//import 

//actions

//actiosn creators

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

//reducer exports
export default reducer;