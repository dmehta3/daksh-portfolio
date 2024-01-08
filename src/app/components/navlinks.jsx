import Link from 'next/link'

const navlink = ({href, title}) => {
    return (
        <Link href={href} 
            className="block py-2 pl-3 pr-4 text-[#A9A9A9] sm:text-xl rounded md:p-0 hover:text-white font-semibold">
            {title}
        </Link>
    )
}

export default navlink