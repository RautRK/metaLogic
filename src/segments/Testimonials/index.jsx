import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { technologyUsed } from "../../data"; // Assuming you renamed clientsReviews to technologyUsed
import { cssPerfectShape } from "../../utils";

const Testimonial = () => {
  return (
    <section id="testimonials">
      <div className="container">
        <div className="spotlight" />
        <div className="section-header">
          <h3>Technologies We Use</h3>
          <h2>Empowering Solutions with Cutting-Edge Technologies</h2>
        </div>
        <Swiper
          className="testimonials-wrapper"
          slidesPerView={1}
          spaceBetween={30}
          modules={[Autoplay]}
          autoplay={true}
          loop={true}
          speed={1000}
          grabCursor={true}
          breakpoints={{
            600: { slidesPerView: 2 },
            900: { slidesPerView: 3 },
          }}
        >
          {technologyUsed.map((tech, index) => (
            <SwiperSlide
              className="blur testimonial"
              
              key={index}
            >
              <div className="top">
                <p className="content">{tech.content}</p>
              </div>
              <div className="bottom">
                <div
                  style={{ ...cssPerfectShape(60, 60) }}
                  className="profile"
                >
                  <img src={tech.image} alt={tech.name} />
                </div>
                <h3 className="name">{tech.name}</h3>
                <p className="job-title">{tech.jobTitle}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
