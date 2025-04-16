/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { Card, CardContent, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function BlogCard({ item }) {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const imageUrlRegex = /<img[^>]+src=["']([^"']+)["']/;
    setImageUrl(item.content.match(imageUrlRegex)[1]);
  }, []);

  function openPost() {
    window.open(item.link);
  }

  return (
    <Stack sx={{ minWidth: 250, maxWidth: 300, height: 300, margin: 2, cursor: 'pointer' }} onClick={openPost}>
      <StyledCard variant="text">
        <img src={imageUrl} alt="Placeholder Image" />
      </StyledCard>
      <StyledCardContent>
        <Typography gutterBottom variant="h5" color="primary" component="div" sx={{ textAlign: 'start' }}>
          {item.title}
        </Typography>
      </StyledCardContent>
    </Stack>
  );
}

const StyledCardContent = styled(CardContent)`
  padding: 10px 0 !important;
`;

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  height: 300px !important;
  border-radius: 4%;
  transition: transform 0.7s ease;
  &:hover {
    transform: scale(1.05);
    transition: transform 0.7s ease;
  }
  img {
    object-fit: cover;
    height: 300px;
  }
`; 