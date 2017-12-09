import { connect } from 'react-redux';

import Header from '../components/Header/Header';

//How to take props from state for HeaderContainer
function mapStateToProps(state) {
    return {
        todos: state
    };
}

const HeaderContainer = connect(mapStateToProps)(Header);

export default HeaderContainer;