import './SignOut.css'
import {connect} from 'react-redux';
import { loadUser } from '../redux/actions';

const SignOut = (props) => {
    props.loadUser({
      user: {
        id: '',
        name: '',
        email:'',
        joined:''
      },
      token:null
    })
    props.history.push('/signin')
    return(
      <></>
    )
}

const mapStateToProps = (state) => {
    return null
}

const mapDispatchToProps = (dispatch) => {
return {
    loadUser: (data) => dispatch(loadUser(data))
}
}
  
  export default connect(mapStateToProps,mapDispatchToProps)(SignOut)