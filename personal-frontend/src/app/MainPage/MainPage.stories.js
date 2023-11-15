import { MainPage } from './';

export default{
    title:'Page/Main',
    component:MainPage,
    tags: ['autodocs'],
}


export const Primary ={
    args:{},
    parameters: {
        backgrounds: {
        default: 'main',
        values: [
          { name: 'main', value: '#efefef' },
        ],
        }
    }
}