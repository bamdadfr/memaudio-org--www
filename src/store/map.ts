import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as pageActions from './page/actions'
import * as audioActions from './audio/actions'
import * as albumsActions from './albums/actions'
import * as gameActions from './game/actions'

const mapStateToProps = (state: any): any => ({
    ...state,
})

const mapDispatchToProps = (dispatch: any): any => ({
    ...bindActionCreators (
        {
            ...pageActions,
            ...audioActions,
            ...albumsActions,
            ...gameActions,
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
