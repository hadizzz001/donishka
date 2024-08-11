"use client"

import React from 'react';
import Image from 'next/image';
import { Carousel } from 'react-bootstrap';

const MyComponent = () => {
  return (
    <div className="syw-container">
      <Carousel indicators={false} controls={false}>
        <Carousel.Item>
          <div className="image-container">
            <Image
              className="wallet-image"
              src="https://ucarecdn.com/1abf39d6-3abc-464e-a77b-d828729610a0/001.webp"
              alt="background"
              width={3000}
              height={1200}
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="image-container">
            <Image
              className="wallet-image"
              src="https://ucarecdn.com/039c0b2e-2c02-4840-b275-3450f05669af/002.webp"
              alt="background"
              width={3000}
              height={1200}
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="image-container">
            <Image
              className="wallet-image"
              src="https://ucarecdn.com/3755c1f5-dcbc-4437-ae3c-e0a19443981d/003.webp"
              alt="background"
              width={3000}
              height={1200}
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="image-container">
            <Image
              className="wallet-image"
              src="https://ucarecdn.com/630a1c46-c4e1-4f99-9490-ea8d6a596bd7/005.webp"
              alt="background"
              width={3000}
              height={1200}
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="image-container">
            <Image
              className="wallet-image"
              src="https://ucarecdn.com/a3446b07-4bc7-47c8-88da-cc0269a55ea0/006.webp"
              alt="background"
              width={3000}
              height={1200}
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="image-container">
            <Image
              className="wallet-image"
              src="https://ucarecdn.com/cdc30aac-992d-409c-b01c-989d97848141/007.webp"
              alt="background"
              width={3000}
              height={1200}
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="image-container">
            <Image
              className="wallet-image"
              src="https://ucarecdn.com/efcd1149-1ca9-40bf-92ce-37b8c711a882/008.webp"
              alt="background"
              width={3000}
              height={1200}
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="image-container">
            <Image
              className="wallet-image"
              src="https://ucarecdn.com/d7e4dabf-40e5-4696-8843-2c9104689286/004.webp"
              alt="background"
              width={3000}
              height={1200}
            />
          </div>
        </Carousel.Item>
      </Carousel>
 

    </div>
  );
};

export default MyComponent;

