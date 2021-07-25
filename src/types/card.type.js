import PropTypes from 'prop-types'

export const CardType = {
    'front': PropTypes.oneOfType ([
        PropTypes.number,
        PropTypes.string,
        PropTypes.object,
    ]),
    'back': PropTypes.string,
    'color': PropTypes.string,
    'callback': PropTypes.func,
    'leaveOnCallback': PropTypes.bool,
}