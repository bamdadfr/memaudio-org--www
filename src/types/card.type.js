import PropTypes from 'prop-types'

export const CardType = {
    'color': PropTypes.string.isRequired,
    'front': PropTypes.oneOfType ([
        PropTypes.number,
        PropTypes.string,
        PropTypes.object,
    ]),
    'back': PropTypes.string,
    'callback': PropTypes.func,
    'leaveOnCallback': PropTypes.bool,
}