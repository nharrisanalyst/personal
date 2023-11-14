import {Text} from '../Text';
import PropTypes from 'prop-types';


export const Paragraph = ({textData}) =>{
    return (
        <div>
        {
          textData.map(data=>(
            <>
            <Text {...data} >
                {data.text}{" "}
            </Text>
            </>
          ))
        }
        </div>
    )
}


Paragraph.propTypes ={
    textData:PropTypes.arrayOf(
        PropTypes.shape({
            color:  PropTypes.string,
            text: PropTypes.string,
            strong: PropTypes.bool,
            size: PropTypes.string,
            linebreak: PropTypes.bool,
            light:PropTypes.bool,
        })
    )
}
