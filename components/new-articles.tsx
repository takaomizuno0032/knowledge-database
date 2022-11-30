import { Container } from "@mui/system";
import { Grid, Box, Typography, Button } from "@mui/material";
import Article from "./article";
import Link from "next/link";
import React from "react";

type Props = {
    padding?: number,
    md?: number
}

export default function NewArticles({ md = 3 }: Props) {
    return (
        <React.Fragment>
            <Grid item xs={12}>
                <Typography variant="h4" sx={{ display: 'block' }}>
                    New Articles
                </Typography>
            </Grid>
            {/* TODO article をとってくる */}
            <Grid item xs={12} md={md}>
                <Article />
            </Grid>
            <Grid item xs={12} md={md}>
                <Article />
            </Grid>
            <Grid item xs={12} md={md}>
                <Article />
            </Grid>
            <Grid item xs={12} md={md}>
                <Article />
            </Grid>

            {/* 基本はdisplay:none. homeの時だけ表示するようにする */}
            <Grid item xs={12}>
                <Box textAlign="center">
                    <Link href={`/posts/allposts`}>
                        <Button variant="contained" color="primary" sx={{ color: 'black' }}>
                            See all articles
                        </Button>
                    </Link>

                </Box>
            </Grid>
        </React.Fragment>

    );
}