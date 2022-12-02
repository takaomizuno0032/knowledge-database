import Layout from '../../components/layout';
import { getAllArticleIds, getArticleData } from '../../lib/article';

function Article({ article }: any) {
    return (
        <Layout>
            <div>{article.data.title}</div>
            {/* <div>{article.content}</div> */}
            <div dangerouslySetInnerHTML={{ __html: article.contentHtml }} />
        </Layout>
    )
}

export async function getStaticPaths() {
    // Return a list of possible value for id
    const paths = getAllArticleIds();
    return {
        paths,
        fallback: false,
    };
}


export async function getStaticProps({ params }: any) {
    // Fetch necessary data for the blog post using params.id
    const article = await getArticleData(Number(params.id));
    return {
        props: {
            article,
        },
    };
}

export default Article;