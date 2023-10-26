import PropTypes from 'prop-types';
import Image from 'next/image';
import {Text} from "../Text";



export const WorkSample =({title="", description="", imageSrc=""}) =>(
    <>
    <Image src={imageSrc} width={72} height={16}></Image>
    <Text string={true} >{title}</Text>
    <Text>{description}</Text>
    </>
)


WorkSample.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    imageSource: PropTypes.string
}