import { Container } from "@mui/system";
import { Grid, Box, Typography, Button } from "@mui/material";
import ArticleProp from "./article-prop";
import Link from "next/link";
import React from "react";

type Props = {
    padding?: number,
    md?: number,
    datas: {
        id: number,
        title: string,
        date: string,
        category_id: number,
        feature: boolean
    }[]
}

export default function NewArticles({ md = 4, datas }: Props) {
    console.log('datas', datas);
    return (
        <>
            <Grid item xs={12}>
                <Typography variant="h4" sx={{ display: 'block' }}>
                    New Articles
                </Typography>
            </Grid>
            {
                datas.map((data: any) => {
                    <Grid item xs={12} md={md}>
                        <ArticleProp data={data} />
                    </Grid>
                })
            }


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