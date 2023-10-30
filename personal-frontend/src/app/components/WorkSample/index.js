import PropTypes from 'prop-types';
import Image from 'next/image';
import {Text} from "../Text";
import "./workSample.css"



export const WorkSample =({title="", description="", imageSrc=""}) =>(
    <div className='work-sample' >
    <div className='work-sample-image'>
    <Image src={imageSrc}
           fill={true}
    />
    </div>
    <div className='work-sample-text'>
    <Text strong={true} >{title}</Text>
    <Text fontWeight={300}>{description}</Text>
    </div>
    </div>
)


WorkSample.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    imageSource: PropTypes.string
}