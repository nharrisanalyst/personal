import { MainPage } from './';

export default{
    title:'Page/Main',
    component:MainPage,
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