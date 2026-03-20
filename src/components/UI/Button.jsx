const Button = (props) => {
    if (props.value === true) {
        return (
            <button onClick="" className="text-button">
                {props.children}
            </button>
        );
    } else {
        return (
            <button onClick=""className="button">
                {props.children}
            </button>
        );
    }
};

export default Button;