import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './Testimonials.module.css';
import style from "../App.module.css";
import "./swiper.css";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  // Мокові дані для випадку відсутності підключення
  const mockData = [
    {
      _id: "647495d0c825f1570b04182f",
      text: "Thank you for the wonderful recipe for feta pasta with tomatoes and basil. It turned out to be not only tasty, but also incredibly colorful. This has become a favorite family meal!",
      author: "LARRY PAGEIM",
    },
    {
      _id: "647495d0c825f1570b04182e",
      text: "Foodies is a must-have for any home cook! With its extensive recipe collection and easy-to-use interface, I've discovered new culinary delights and streamlined my meal planning. Cooking has never been this enjoyable!",
      author: "Mike Chen",
    },
    {
      _id: "647495d0c825f1570b04182d",
      text: "Foodies has transformed my cooking experience! With its diverse recipe collection and user-friendly interface, I can easily find, save, and cook delicious meals for any occasion. From quick dinners to elaborate feasts, this app has become my go-to kitchen companion. Highly recommended!",
      author: "Sarah Johnson"
    },
  ];

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch('https://project-team-04.onrender.com/api/testimonials');

        if (!response.ok) throw new Error('Network response was not ok');

        const data = await response.json();

        // Конвертація даних з бекенду в потрібний формат
        const formattedTestimonials = data.testimonials.map(testimonial => ({
          _id: testimonial.id.toString(),
          text: testimonial.testimonial,
          author: `${testimonial.owner}`
        }));

        setTestimonials(formattedTestimonials);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
        setTestimonials(mockData); // Використовуємо мокові дані при помилці
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <section className={styles.section}>
      <div className={style.container}>
        <h2 className={styles.mainTitle}>What our customer say</h2>
        <h3 className={styles.subTitle}>TESTIMONIALS</h3>

        {/* SVG декорація */}
        <div className={styles.decoration}>
          <svg width="40.000000" height="32.000000" viewBox="0 0 40 32" fill="none" className={styles.decorationIcon}>
            <path id="“"
                  d="M0 32L0 21.29C0 17.29 0.71 13.6 2.14 10.23C3.58 6.86 6 3.45 9.43 0L15.64 4.82C13.65 6.78 12.13 8.62 11.1 10.35C10.07 12.07 9.39 13.84 9.07 15.64L16.71 15.64L16.71 32L0 32ZM23.28 32L23.28 21.29C23.28 17.29 24 13.6 25.43 10.23C26.86 6.86 29.29 3.45 32.71 0L38.92 4.82C36.93 6.78 35.42 8.62 34.38 10.35C33.35 12.07 32.67 13.84 32.35 15.64L40 15.64L40 32L23.28 32Z"
                  fill="#E8E8E8" fill-opacity="1.000000" fill-rule="nonzero"/>
          </svg>
        </div>

        <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            autoplay={{delay: 5000, disableOnInteraction: false}}
            pagination={{
              clickable: true,
              el: `.${styles.pagination}`
            }}
        >
          {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial._id}>
                <div className={styles.testimonialCard}>
                  <p className={styles.testimonialText}>{testimonial.text}</p>
                  <h3 className={styles.authorName}>{testimonial.author}</h3>
                </div>
              </SwiperSlide>
          ))}
          <div className={styles.pagination} />
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;