import Link from "next/link";

const headerInfo = {
    headersLinks: [
        {text: 'MODELS', url: '/models'},
        {text: 'IN STOCK', url: '/stock'},
        {text: 'CONFIGURATOR', url: '/configurator'},
        {text: 'SERVICES', url: '/services'},
        {text: 'SUPPORT', url: '/support'},
        {text: 'PROJECTS', url: '/projects'},
        {text: 'COMPANY', url: '/company'},
    ]
}

const Header = () => {

    return (
        <div className='flex min-w-full max-h-10 bg-neutral-800 rounded-b sticky top-0 z-20'>
            <div className='m-2'>
                IMGIMGI
            </div>
            <nav>
                <ul className='flex flex-row space-around '>
                    {headerInfo.headersLinks.map(({text, url}) =>
                        <Link
                            className='m-2 px-4 text-base text-gray-500 hover:text-white transition delay-50'
                            href={url}>
                            {text}
                        </Link>
                    )}
                </ul>
            </nav>
        </div>
        // Дописать корзину и иконки
    )
}

export default Header;