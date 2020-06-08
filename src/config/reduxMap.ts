import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions as appActions } from '../reducers/appReducer'

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

export default (component: any): any => {

    return connect (
        mapStateToProps,
        mapDispatchToProps,
    ) (component)

}
