import PropTypes from 'prop-types';
import classNames from 'classnames'
import './text.css';


export const Text =({ 
     color= "black", 
     children, 
     strong = false,
     size = "1.5em", 
     lineBreak = false,
     fontWeight = "normal", 
     light = false,
    }) =>{
    fontWeight = light?"100":fontWeight;
    const styles = {
        color,
        fontSize:size,
        fontWeight
    }
    if(strong){
        return (
        <>
        <strong>   
        <span className="customText" style = {styles}>
        {children}
        </span>
        </strong>
        {lineBreak?<br/>:""}
        </>
        )
    }
   return (
        <>
        <span className={classNames("customText", {'light-text':light})} style = {styles}>
        {children}
        </span>
        {lineBreak?<br/>:""}
        </>

   )
}

Text.propTypes = {
    color:  PropTypes.string,
    children: PropTypes.string,
    strong: PropTypes.bool,
    size: PropTypes.string,
    linebreak: PropTypes.bool,
    fontweight:PropTypes.string,
    light:PropTypes.bool,

}




