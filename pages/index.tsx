import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout'
import { Typography, Box, Grid } from '@mui/material'
import { Container } from '@mui/system'
import NewArticles from '../components/new-articles'
import TopPageBackGround from '../components/toppage-background'
import Pickup from '../components/pickup'

export default function Home() {
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
          <NewArticles />
        </Grid>
        <Pickup />
      </Container>

    </Layout >
  )
}
