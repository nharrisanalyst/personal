import {ThisPage} from './';

export default{
    title:'Page/ThisPage',
    component:ThisPage,
    tags: ['autodocs'],
}

export const Primary ={
    args:{},
    parameters: {
        layout: 'fullscreen',
        backgrounds: {
        default: 'main',
        values: [
          { name: 'main', value: '#efefef' },
        ],
        }
    }
}