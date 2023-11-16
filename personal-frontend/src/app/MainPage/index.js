import { Header } from '../components/Header';
import { Paragraph } from '../components/Paragraph';
import textDataMain from '../components/Paragraph/mainText.json';
import midParagraphData from '../components/Paragraph/midParagraphText.json';
import { ResumeLink } from '../components/ResumeLink';
import { WorkSamplesLayout } from '../layouts/WorkSamplesLayout';
import workData from "../layouts/WorkSamplesLayout/workData.json";

import "./mainPage.css";


export const MainPage =()=>(
    <>
        <Header />
        <div className="main-paig-main">
            <div className ='main-top-section'>
                <div className='main-text-top'>
                    <Paragraph textData={textDataMain} />
                </div>
                <div className='main-resume-link'>
                    <ResumeLink />
                </div>
            </div>
            <div className='main-mid-section'>
                <Paragraph textData={midParagraphData} />
            </div>
            <div className='work-sample-section'>
                <WorkSamplesLayout sampleWorkData={workData} />
            </div>
            <div className="contact-info">
                <div className='contact-info-contact'>
                    Contact
                </div>
                <div className='contact-info-email'>
                    nharrisanalyst@gmail.com
                </div>
            </div>
        </div>
    </>
)