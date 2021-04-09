import Prismic from '@prismicio/client'

export function getPrismicClient(req?: unknown) {
    //console.log(process.env.PRISMIC_ENDPOINT)
    //console.log(process.env.PRISMIC_TOKEN)
    const prismic = Prismic.client(
        process.env.PRISMIC_ENDPOINT,
        {
            req,
            accessToken: process.env.PRISMIC_TOKEN
        }
    )

    return prismic;
}