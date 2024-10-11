import { Button, Typography } from 'antd/lib'
import Head from 'next/head'

export default function Home() {
    return (
        <>
            <Head>
                <title>dashboard</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Typography.Title>dashboard</Typography.Title>

            <Button variant="solid" color="default">
                refresh
            </Button>
        </>
    )
}
