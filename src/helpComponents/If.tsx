import React from 'react'
interface Props {
    conddition: boolean,
    children: Element | any
}
const If: React.FC<Props> = ({conddition,children}) => {
if(conddition)
    return (
        children
    )
}

export default If