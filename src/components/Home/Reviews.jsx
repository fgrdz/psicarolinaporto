import styled from "styled-components";
import ReviewsData from '../Reviews/reviews.json';
import { Typography, IconButton } from "@mui/material";
import { useRef } from "react";
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
        <ContainerReview>
            <Typography variant="h4" color={"#FFF"} textAlign={"center"} margin={"30px"}>
                Avaliações
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
                                <ReviewDate>{review.data}</ReviewDate>
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
    color: #FFF;
    padding: 20px 20px 0 20px;
`;

const ReviewSection = styled.div`
    background-color: #2c4a63;
    padding: 40px;
    display: flex;
    overflow-x: auto;
    gap: 20px;
    scroll-behavior: smooth;

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
    
    @media screen and (max-width: 768px) {
        width: 300px;
        min-width: 300px;
        padding: 30px;
        height: 300px;
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

const ReviewDate = styled.span`
    font-size: 14px;
    color: #777;
`;

const ArrowContainer = styled.div`
    display: flex;
    align-items: center;
`;

const ArrowButton = styled(IconButton)`
    color: #FFF;
    background-color: rgba(0, 0, 0, 0.5);
    margin: 0 10px;
    &:hover {
        background-color: rgba(0, 0, 0, 0.7);
    }

`;
