import PropTypes from 'prop-types';
import Image from 'next/image';
import {Text} from "../Text";
import "./workSample.css"



export const WorkSample =({title="", description="", imageSrc="", anchorURL="https://www.example.com"}) =>(
    <a className ="work-sample-anchor" href = {anchorURL} >
    <div className='work-sample' >
    <div className='work-sample-image'>
    <Image src={imageSrc}
           fill={true}
    />
    </div>
    <div className='work-sample-text'>
    <Text strong={true} >{title}</Text>
    <Text light={true} >{description}</Text>
    </div>
    </div>
    </a>
)


WorkSample.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    imageSource: PropTypes.string,
    anchorURL:PropTypes.string
}