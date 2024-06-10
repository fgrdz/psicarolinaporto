/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/jsx-key */
import { styled } from 'styled-components';
import { Box, Stack, Typography } from '@mui/material';
import BlogCard from './BlogCard';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function AboutMe() {
  const [data, setData] = useState(null);
  const API_URL = 'https://v1.nocodeapi.com/pixiepunkposse/medium/XwhVWYbpEJwtmsSg';

  useEffect(() => {
    const fetchData = async () => {
      const cachedData = localStorage.getItem('blogData');
      const cachedTime = localStorage.getItem('blogDataTime');
      const cacheDuration = 7 * 24 * 60 * 60 * 1000; // 7 dias

      if (cachedData && cachedTime && Date.now() - cachedTime < cacheDuration) {
        setData(JSON.parse(cachedData));
        console.log('Using cached data');
      } else {
        try {
          const response = await axios.get(API_URL);
          setData(response.data);
          console.log('Using fetched data');
          localStorage.setItem('blogData', JSON.stringify(response.data));
          localStorage.setItem('blogDataTime', Date.now().toString());
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchData();
  }, []);

  return (
    <BlogScrollSection id="blog-scroll">
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }}>
        <Box maxWidth="880px" my={4} display="flex" flexDirection="column" alignItems="flexStart" gap={2} p={2}>
          <StyledTypography color="white" variant="h4">
            Blog
          </StyledTypography>
          <StyledTypography variant="h5">
            Acesse meus artigos mais recentes no{' '}
            <a href="https://carolinagporto7.medium.com/" target="_blank">
              Medium.
            </a>
          </StyledTypography>

          <HorizontalScroll>{data && data.map((item) => <BlogCard key={item.id} item={item} />)}</HorizontalScroll>
          <Grid>{data && data.map((item) => <BlogCard key={item.id} item={item} />)}</Grid>
        </Box>
      </Stack>
    </BlogScrollSection>
  );
}

const StyledTypography = styled(Typography)`
  @media screen and (max-width: 860px) {
    padding-left: 15px;
  }
`;

const Grid = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media screen and (min-width: 2000px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-top: 20px;
  }
`;

const HorizontalScroll = styled(Box)`
  display: flex;
  overflow-x: auto;
  width: 100vw;
  > :last-child {
    margin-right: 500px; /* Adicionando margem de 200px no último filho */
  }
  @media screen and (max-width: 768px) {
    > :last-child {
      margin-right: 20px; /* Adicionando margem de 200px no último filho */
    }
  }

  @media screen and (min-width: 2000px) {
    display: none;
  }
`;

const BlogScrollSection = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  overflow-x: hidden;
  padding-top: 2rem;
  padding-bottom: 4rem;

  background-color: #2c4a63;
  color: white !important;

  @media screen and (max-width: 768px) {
    padding-bottom: 2rem;
  }

  @media screen and (max-width: 1024px) {
    height: max-content;
  }
`;
