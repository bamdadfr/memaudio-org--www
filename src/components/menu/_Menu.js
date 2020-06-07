import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions as appActions } from '../../reducers/appReducer'
import Component from './Menu'

const mapStateToProps = (state) => ({
    ...state,
})

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators (
        {
            ...appActions,
        },
        dispatch,
    ),
})

export default connect (
    mapStateToProps,
    mapDispatchToProps,
) (Component)
