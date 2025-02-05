import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Typography, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import BlogCard from './BlogCard';

export default function BlogScroll() {
  const [data, setData] = useState(null);
  const API_URL = 'https://v1.nocodeapi.com/pixiepunkposse/medium/lkWTxdctuqVbLEqm';
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const cachedData = localStorage.getItem('blogData');
      const cachedTime = localStorage.getItem('blogDataTime');
      const cacheDuration = 7 * 24 * 60 * 60 * 1000; // 7 dias

      if (cachedData && cachedTime && Date.now() - cachedTime < cacheDuration) {
        setData(JSON.parse(cachedData));
      } else {
        try {
          const response = await axios.get(API_URL);
          setData(response.data);
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
    <Container>
      <Typography variant="h4" color="#2c4a63" textAlign="center" margin="30px">
        Blog
      </Typography>
      <ArrowContainer>
        <ArrowButton onClick={scrollLeft}>
          <ArrowBackIosIcon />
        </ArrowButton>
        <ScrollContainer ref={scrollContainerRef}>
          {data && data.map((item) => <BlogCard key={item.id} item={item} />)}
        </ScrollContainer>
        <ArrowButton onClick={scrollRight}>
          <ArrowForwardIosIcon />
        </ArrowButton>
      </ArrowContainer>
    </Container>
  );
}

const Container = styled.div`
  background-color: #ced9df;
  padding: 20px;
  text-align: center;
`;

const ScrollContainer = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 20px;
  scroll-behavior: smooth;
  padding: 20px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ArrowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const ArrowButton = styled(IconButton)`
  color: #2c4a63;
  background-color: rgba(0, 0, 0, 0.1);
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;
