import { Heading, HStack, Image, Text, VStack } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

  return (
    <VStack
      spacing={8}
      direction='column'
      borderRadius={10}
      overflow='hidden'
      background='#fff'
      color='#000'
    >
      <Image src={imageSrc} borderRadius={10} />
      <VStack p={5} align='flex-start' className='card-vstack'>
        <Heading as='h3' size='md'>
          {title}
        </Heading>
        <Text>{description}</Text>
        <a href='#'>
          <span className='card-btn'>See more</span>
          <FontAwesomeIcon icon={faArrowRight} size='1x' />
        </a>
      </VStack>
    </VStack>
  );
};

export default Card;
