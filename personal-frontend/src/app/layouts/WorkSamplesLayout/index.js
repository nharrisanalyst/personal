import { WorkSample } from '../../components/WorkSample';
import { Text } from '../../components/Text';
import PropTypes from 'prop-types';
import './workSamplesLayout.css';


export const WorkSamplesLayout = ({sampleWorkData =[]}) =>(
    <div className='work-sample-layout'>
        <div className='work-sample-layout-title'>
         <Text strong={true}> Work Samples </Text>
        </div>
        <div className='work-sample-layout-work'>
            {
              sampleWorkData.map(data=>(<WorkSample {...data} />))
            }
        </div>
    </div>
)



WorkSamplesLayout.propTypes = {
    sampleWorkData: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            description: PropTypes.string,
            imageSource: PropTypes.string,
            anchorURL:PropTypes.string
        })
    )
}