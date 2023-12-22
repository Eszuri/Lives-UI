import PropTypes from 'prop-types';

export function Button({ children }: any) {
    return (
        <button>{children}</button>
    )
}



// Type Data
Button.propTypes = {
    children: PropTypes.string
}

// Defalut Value
Button.defaultProps = {
    children: "No Name"
}