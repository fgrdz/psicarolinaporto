import styled from 'styled-components';
import ReviewsData from '../../Reviews/reviews.json';
import { Typography, IconButton } from '@mui/material';
import { useRef } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Reviews() {
  const scrollContainerRef = useRef(null);

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
    <ContainerReview id="depoimentos">
      <Typography variant="h4" color={'#FFF'} textAlign={'center'} margin={'30px'}>
        Depoimentos
      </Typography>
      <ArrowContainer>
        <ArrowButton onClick={scrollLeft}>
          <ArrowBackIosIcon />
        </ArrowButton>
        <ReviewSection ref={scrollContainerRef}>
          {ReviewsData.Reviews.map((review, index) => (
            <ReviewCard key={index}>
              <ReviewText>{review.review}</ReviewText>
              <ReviewerInfo>
                <ReviewerName>{review.nome}</ReviewerName>
              </ReviewerInfo>
            </ReviewCard>
          ))}
        </ReviewSection>
        <ArrowButton onClick={scrollRight}>
          <ArrowForwardIosIcon />
        </ArrowButton>
      </ArrowContainer>
    </ContainerReview>
  );
}

const ContainerReview = styled.div`
  background-color: #2c4a63;
  color: #fff;
  padding: 20px 20px 0 20px;
`;

const ReviewSection = styled.div`
  background-color: #2c4a63;
  padding: 40px;
  display: flex;
  overflow-x: auto;
  gap: 20px;
  scroll-behavior: smooth;

  @media screen and (max-width: 768px) {
    padding: 20px;
    gap:14px;
    margin-top: -16px;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ReviewCard = styled.div`
  background-color: #fff;
  width: 600px;
  min-width: 400px;
  overflow: auto;
  max-height: 400px;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &::-webkit-scrollbar {
    width: 0;
    height: 0; 
    display: none; 
  }

  /* Firefox */
  scrollbar-width: none;
  
  /* Edge/IE */
  -ms-overflow-style: none;
  @media screen and (max-width: 768px) {
    width: 250px;
    min-width: 200px;
    padding: 30px;
    height: 200px;
    text-align: left;
  }
`;

const ReviewText = styled.p`
  font-size: 16px;
  color: #333;
`;

const ReviewerInfo = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ReviewerName = styled.span`
  font-weight: bold;
  color: #2c4a63;
`;

const ArrowContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ArrowButton = styled(IconButton)`
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
  margin: 0 10px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
`; 