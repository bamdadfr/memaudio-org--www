import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as pageActions from './page/actions'
import * as audioActions from './audio/actions'
import * as albumsActions from './albums/actions'
import * as gameActions from './game/actions'

export const mapStateToProps = (state) => ({
    ...state,
})

export const mapDispatchToProps = (dispatch) => ({
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

export const StoreMap = (component) => connect (
    mapStateToProps,
    mapDispatchToProps,
) (component)
