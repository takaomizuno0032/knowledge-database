import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout'
import { Typography, Box, Grid } from '@mui/material'
import { Container } from '@mui/system'
import NewArticles from '../components/new-articles'
import TopPageBackGround from '../components/toppage-background'
import Pickup from '../components/pickup'
import fs from 'fs';
import { getArticlesData } from '../lib/article'

export async function getStaticProps() {

  const { allArticles } = getArticlesData();
  return {
    props: {
      allArticles,
    }
  };
}

export default function Home({ allArticles }: any) {
  const numberNewArticles = -3

  return (
    <Layout>

      <TopPageBackGround />

      <Container sx={{ p: 3 }}>
        <Grid
          container
          sx={{
            '--Grid-borderWidth': '1px',
            borderTop: 'var(--Grid-borderWidth) solid',
            borderLeft: 'var(--Grid-borderWidth) solid',
            borderRight: 'var(--Grid-borderWidth) solid',
            borderBottom: 'var(--Grid-borderWidth) solid',
            p: 3

          }}
          spacing={2}
        >
          {/* todo: fetch new 3 articles */}
          <NewArticles newArticles={allArticles} />
        </Grid>
        <Pickup />
      </Container>

    </Layout >
  )
}
