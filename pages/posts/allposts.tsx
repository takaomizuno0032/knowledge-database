import { Grid, Box, Typography } from "@mui/material";
import AllArticles from "../../components/all-articles";
import Layout from "../../components/layout";
import NewArticles from "../../components/new-articles";
import postsStyle from '../../styles/posts.module.css';

function AllPosts() {
    return (<Layout>
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
                        <AllArticles />
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
                        <NewArticles padding={2} md={12} />
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    </Layout>
    );
}

export default AllPosts;