import { Container } from "@mui/system";
import { Grid, Box, Typography, Button } from "@mui/material";
import ArticleProp from "./article-prop";
import Link from "next/link";
import React from "react";

type Props = {
    padding?: number,
    md?: number,
    newArticles: any
}

export default function NewArticles({ md = 4, newArticles }: Props) {
    return (
        <>
            <Grid item xs={12}>
                <Typography variant="h4" sx={{ display: 'block' }}>
                    New Articles
                </Typography>
            </Grid>
            {newArticles.map((article: any) =>
                <Grid item xs={12} md={4}>
                    <Link href={`/articles/${article.data.id}`}>
                        <ArticleProp data={article.data} />
                    </Link>
                </Grid>

            )}



            {/* 基本はdisplay:none. homeの時だけ表示するようにする */}
            <Grid item xs={12}>
                <Box textAlign="center">
                    <Link href={`/articles/allarticles`}>
                        <Button variant="contained" color="primary" sx={{ color: 'black' }}>
                            See all articles
                        </Button>
                    </Link>

                </Box>
            </Grid>

        </>
    );
}