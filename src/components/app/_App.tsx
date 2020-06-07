import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions as appActions } from '../../reducers/appReducer'
import Component from './App'

const mapStateToProps = (state: any): any => ({
    ...state,
})

const mapDispatchToProps = (dispatch: any): any => ({
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
