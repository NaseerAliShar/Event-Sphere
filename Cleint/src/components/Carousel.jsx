import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', right: '10px', zIndex: 2 }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', left: '10px', zIndex: 2 }}
      onClick={onClick}
    />
  );
};

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const slides = [
    { id: 1, title: 'Event 1', description: 'Description for Event 1', imageUrl: 'https://media.istockphoto.com/id/1658546576/photo/2024-calendar-event-planning-timetable-agenda-plan-on-organize-schedule-event-planner-agenda.jpg?s=1024x1024&w=is&k=20&c=Tz4z3bhM5OPZXeHntPaSnjRvTwZJWx67mFWxgZAdEB0=' },
    { id: 2, title: 'Event 2', description: 'Description for Event 2', imageUrl: 'https://media.istockphoto.com/id/1475798875/photo/business-woman-laptop-and-smile-for-phone-communication-or-reading-at-the-office-happy-female.jpg?s=1024x1024&w=is&k=20&c=mO8S0bhN-iSEYXVhUmXnB3mZ7nw4eC9GGLbkF0BQgQA=' },
  ];

  return (
    <div className="w-full">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="relative">
            <img src={slide.imageUrl} alt={slide.title} className="w-full h-96 object-cover object-center" />
            <div className="absolute bottom-5 left-5 bg-blue-900 bg-opacity-50 text-white p-4 rounded">
              <h3 className="text-lg font-bold">{slide.title}</h3>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
