import { Header } from './';


export default{
    title:'Molecules/Header',
    component:Header,
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