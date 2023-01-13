import Head from 'next/head'

const Header = (): JSX.Element => {
    return (
        <Head>      
            <title>CV - Ramon</title>
            <meta name="description" content="My site european cv style" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>        
    )
}

export default Header;