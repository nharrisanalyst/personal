import { Paragraph } from './';
import textData from './mainText.json';
import midParagraphData from './midParagraphText.json';

export default {
    title:'Molecules/Paragraph',
    component: Paragraph,
    tags: ['autodocs'],
}


export const Primary ={
    args:{
        textData
    }
}

export const MidParaGraphBlock = {
    args:{
        textData:midParagraphData
    }
}