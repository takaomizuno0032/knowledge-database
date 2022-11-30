import { Typography, Grid } from "@mui/material";
import Article from "./article";
import React from "react";

function AllArticles() {

    return (
        <React.Fragment>
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

            <Grid item xs={12} md={4}>
                <Article />
            </Grid>
            <Grid item xs={12} md={4}>
                <Article />
            </Grid>
            <Grid item xs={12} md={4}>
                <Article />
            </Grid>

        </React.Fragment>
    );
}

export default AllArticles;