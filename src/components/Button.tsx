import React from 'react'
import Link from 'next/link'
interface Button {
    title: string,
    href: string
}
const Button: React.FC<Button> = (props) => {
    return (
        <Link href={props.href} className='btn-primary px-10 py-10'>{props.title}</Link>
    )
}

export default Button;