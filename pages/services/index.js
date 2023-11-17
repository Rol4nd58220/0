import ImageSlider from '../components/ImageSlider';

const Services = () => {
  const images = ['/path/to/image1.jpg', '/path/to/image2.jpg', '/path/to/image3.jpg'];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Services</h1>
      <ImageSlider images={images} />
    </div>
  );
};

export default Services;
