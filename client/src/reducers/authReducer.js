import  {FETCH_USER} from '../actions/types';
//null - we dont know if the user loged in.
// user model - the user loged in.
// false - the user not loged in.
export default function(state = null, action) {
    switch (action.type) {
      case FETCH_USER:
        return action.payload || false;
      default:
        return state;
     }
   }