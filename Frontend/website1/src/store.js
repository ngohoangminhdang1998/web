var redux = require('redux');

const nameInitialState = {
    num: [1,2,3,4]
}
const reducer1 = (state = nameInitialState, action) => {
    switch (action.type) {
        case "ADD_DATA":
            console.log("bien nhan vao" + action.nhanvao);
            return state
        default:
            return state
    }
}
var store1 = redux.createStore(reducer1);
export default store1;