import PropTypes from 'prop-types';
import './text.css';


export const Text =({ 
     color= "black", 
     children, 
     strong = false,
     size = "1.5em", 
     lineBreak = false,
     fontWeight = 500, 
    }) =>{
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
        <span className="customText" style = {styles}>
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

}




