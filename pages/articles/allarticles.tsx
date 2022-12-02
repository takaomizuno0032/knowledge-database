import { Grid, Box, Typography } from "@mui/material";
import Layout from "../../components/layout";
import NewArticles from "../../components/new-articles";
import postsStyle from '../../styles/posts.module.css';
import { getArticlesData } from "../../lib/article";
import ArticleProp from "../../components/article-prop";
import { GetStaticProps } from "next";
import Link from "next/link";

export async function getStaticProps() {

    const { allArticles } = getArticlesData();
    return {
        props: {
            allArticles,
        }
    };
}

// TODO: any型を解決する
function AllArticles({ allArticles }: any) {
    const numberNewArticles = -3
    const newArticlesData = allArticles.slice(numberNewArticles).map((_: any) => _.data);

    return (
        <Layout>
            <Box sx={{ p: 3, marginTop: 3 }}>
                <Grid container spacing={5}>
                    <Grid item sm={12} md={8}>
                        <Grid
                            container
                            sx={{
                                '--Grid-borderWidth': '3px',
                                borderTop: 'var(--Grid-borderWidth) solid',
                                borderLeft: 'var(--Grid-borderWidth) solid',
                                borderRight: 'var(--Grid-borderWidth) solid',
                                borderBottom: 'var(--Grid-borderWidth) solid',
                                borderRadius: 3,
                                p: 2

                            }}
                            spacing={2}
                            className={postsStyle.postsBackgroundColor}
                        >
                            <Grid item xs={12}>
                                <Typography variant="h4" sx={{
                                    borderBottom: 1,
                                    p: 1
                                }}>
                                    My knowledge: All articles
                                </Typography>

                            </Grid>
                            {/* // TODO: articlesをとってくる
                // the grid container is placed as parent element, so the grid item should be placed. */}
                            {allArticles.map((article: any) =>
                                <Grid item xs={12} md={4}>
                                    <Link href={`/articles/${article.data.id}`}>
                                        <ArticleProp data={article.data} />
                                    </Link>
                                </Grid>

                            )}


                        </Grid>
                    </Grid>
                    <Grid item sm={12} md={4}>
                        <Grid
                            container
                            sx={{
                                '--Grid-borderWidth': '3px',
                                borderTop: 'var(--Grid-borderWidth) solid',
                                borderLeft: 'var(--Grid-borderWidth) solid',
                                borderRight: 'var(--Grid-borderWidth) solid',
                                borderBottom: 'var(--Grid-borderWidth) solid',
                                borderRadius: 3,
                                p: 2

                            }}
                            spacing={2}
                            className={postsStyle.postsBackgroundColor}
                        >
                            <NewArticles padding={2} md={12} datas={newArticlesData} />
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Layout>
    );
}

export default AllArticles;