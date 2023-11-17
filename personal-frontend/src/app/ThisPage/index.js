import "./thisPage.css";
import { Header } from '../components/Header';


export const ThisPage =()=>(
    <>
    <Header />
    <div className='this-page-main'>
        <div className='this-page-title'>
            My Personal Page Resource:
        </div>
        <div className='this-page-links-block'>
            <a className="this-page-links" href='https://nharrisanalyst.github.io/personal/'>StoryBook</a>
            <a className="this-page-links" href='https://design.penpot.app/#/view/3e6de94f-2e83-80a3-8003-4ed85a938ee7?page-id=3e6de94f-2e83-80a3-8003-4ed85a938ee8&section=interactions&index=0&share-id=c29b5282-da70-8012-8003-71b49c5a8f77'>Designs</a>
            <a className="this-page-links" href='https://github.com/nharrisanalyst/personal'>Github</a>
        </div>
    </div>
    </>
)