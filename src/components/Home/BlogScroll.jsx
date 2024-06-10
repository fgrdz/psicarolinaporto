/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/jsx-key */
import { styled } from 'styled-components';
import { Box, Stack, Typography, Button } from '@mui/material';
import BlogCard from './BlogCard';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';

export default function AboutMe() {
  const [data, setData] = useState(null);
  const API_URL = 'https://v1.nocodeapi.com/pixiepunkposse/medium/XwhVWYbpEJwtmsSg';
  const scrollContainerRef = useRef(null);

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

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <BlogScrollSection id="blog-scroll">
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }}>
        <StyledBox my={4} display="flex" flexDirection="column" gap={2} p={2}>
          <Typography variant="h4">Blog</Typography>

          <ButtonContainer>
            {/* <Button size="small" onClick={scrollLeft}>
              ◀
            </Button> */}
            <HorizontalScroll ref={scrollContainerRef}>
              {data && data.map((item) => <BlogCard key={item.id} item={item} />)}
            </HorizontalScroll>
            {/* <Button size="small" onClick={scrollRight}>
              ▶
            </Button> */}
          </ButtonContainer>

          <Grid>{data && data.map((item) => <BlogCard key={item.id} item={item} />)}</Grid>
        </StyledBox>
      </Stack>
    </BlogScrollSection>
  );
}

const StyledBox = styled(Box)`
  max-width: 880px;
  align-items: flex-start;

  @media screen and (max-width: 860px) {
    max-width: 100vw;
  }
`;

const Grid = styled.div`
  display: none;

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
  width: 100%;
  scroll-behavior: smooth;

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
  padding-bottom: 7rem;
  background-color: #ced9df;

  @media screen and (max-width: 768px) {
    padding-bottom: 2rem;
  }

  @media screen and (max-width: 1024px) {
    height: max-content;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 1rem;
`;
