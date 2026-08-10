import "./flexBox.css";

const FlexBox = ({ children, className = "" }) => {

    return (
        <div className={`flex-card ${className}`}>
            {children}
        </div>
    );

};

export default FlexBox;