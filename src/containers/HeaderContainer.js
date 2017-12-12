import { connect } from 'react-redux';

import { clearTaskList } from '../actions';
import Header from '../components/Header/Header';

//How to take props from state for HeaderContainer
function mapStateToProps(state) {
    return {
        todos: state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onClearTaskList: () => dispatch(clearTaskList())
    }
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;