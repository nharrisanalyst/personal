import { Text } from '.';


export default {
    title:"Atoms/text",
    component: Text,
    tags: ['autodocs'],
}


export const Primary = {
    args:{
        children:" Great UI Developer",
    }
}

export const Colored = {
    args:{
        children:" Great UI Developer",
        color:"#f9009e"
    }
}

export const Strong = {
    args:{
        children:" Great UI Developer",
        strong:true
    }
}

export const Light = {
    args:{
        children:" Great UI Developer",
        light:true
    }
}
//size is in em
export const BigSize = {
    args:{
        children:" Great UI Developer",
        size:"5em"
    }
}