// Create our image list component

// Import React
import React from 'react';
import ImageDetail from './image_detail';

const IMAGES = [
  { title: 'Pen', link: 'http://dummyimage.com/600x400/000/6f88b3&text=Hello+world!' },
  { title: 'Pine Tree', link: 'http://dummyimage.com/600x400/000/6f88b3&text=Hello+world!' },
  { title: 'Mug', link: 'http://dummyimage.com/600x400/000/6f88b3&text=Hello+world!' }
];

// Create our component
const ImageList = () => {
  const RenderedImages = IMAGES.map(image => {
    return <ImageDetail key={image.title} image={image}/>
  });

  return (
  <ul className="media-list list-group">
    { RenderedImages }
  </ul>
  )
};

// Export our component
export default ImageList;