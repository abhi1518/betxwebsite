import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";
import Image from "next/image";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Musharof Chy",
    designation: "Founder @TailGrids",
    content:
      "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
    image: "/images/testimonials/auth-01.png",
    star: 5,
  },
  {
    id: 2,
    name: "Devid Weilium",
    designation: "Founder @UIdeck",
    content:
      "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
    image: "/images/testimonials/auth-02.png",
    star: 5,
  },
  {
    id: 3,
    name: "Lethium Frenci",
    designation: "Founder @Lineicons",
    content:
      "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
    image: "/images/testimonials/auth-03.png",
    star: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="dark:bg-bg-color-dark bg-gray-light relative  py-6 md:py-20 lg:py-15">
      <div className="container">
        <SectionTitle
          title="Start Playing Game"
          paragraph=""
          center
        />
        <div>
          <h1 className="py-3 md:py-50 lg:py-5" style={{ fontSize: "25px" }}>Popular Game</h1>
          <div className="grid grid-cols-1 gap-x-5 gap-y-8 md:grid-cols-4 lg:grid-cols-6">
            <Image
              src="/images/hero/headerimage3.jpeg"
              alt="logo"
              width={320}
              height={20}
              style={{ borderRadius: '10px' }}
            />
            <Image
              src="/images/hero/headerimage3.jpeg"
              alt="logo"
              width={320}
              height={20}
              style={{ borderRadius: '10px' }}
            />
            <Image
              src="/images/hero/headerimage3.jpeg"
              alt="logo"
              width={320}
              height={20}
              style={{ borderRadius: '10px' }}
            />
            <Image
              src="/images/hero/headerimage3.jpeg"
              alt="logo"
              width={320}
              height={20}
              style={{ borderRadius: '10px' }}
            />
            <Image
              src="/images/hero/headerimage3.jpeg"
              alt="logo"
              width={320}
              height={20}
              style={{ borderRadius: '10px' }}
            />
            <Image
              src="/images/hero/headerimage3.jpeg"
              alt="logo"
              width={320}
              height={20}
              style={{ borderRadius: '10px' }}
            />
          </div>
        </div>

        <div>
          <h1 className="py-3 md:py-50 lg:py-5" style={{ fontSize: "25px" }}>Indian Casinos</h1>
          <div className="grid grid-cols-1 gap-x-5 gap-y-8 md:grid-cols-4 lg:grid-cols-6">
            <Image
              src="/images/hero/headerimage3.jpeg"
              alt="logo"
              width={320}
              height={20}
              style={{ borderRadius: '10px' }}
            />
            <Image
              src="/images/hero/headerimage3.jpeg"
              alt="logo"
              width={320}
              height={20}
              style={{ borderRadius: '10px' }}
            />
            <Image
              src="/images/hero/headerimage3.jpeg"
              alt="logo"
              width={320}
              height={20}
              style={{ borderRadius: '10px' }}
            />
            <Image
              src="/images/hero/headerimage3.jpeg"
              alt="logo"
              width={320}
              height={20}
              style={{ borderRadius: '10px' }}
            />
            <Image
              src="/images/hero/headerimage3.jpeg"
              alt="logo"
              width={320}
              height={20}
              style={{ borderRadius: '10px' }}
            />
            <Image
              src="/images/hero/headerimage3.jpeg"
              alt="logo"
              width={320}
              height={20}
              style={{ borderRadius: '10px' }}
            />
          </div>
        </div>

        <div>
          <h1 className="py-3 md:py-50 lg:py-5" style={{ fontSize: "25px" }}>All Casinos</h1>
          <div className="grid grid-cols-1 gap-x-5 gap-y-8 md:grid-cols-4 lg:grid-cols-6">
            <Image
              src="/images/hero/headerimage3.jpeg"
              alt="logo"
              width={320}
              height={20}
              style={{ borderRadius: '10px' }}
            />
            <Image
              src="/images/hero/headerimage3.jpeg"
              alt="logo"
              width={320}
              height={20}
              style={{ borderRadius: '10px' }}
            />
            <Image
              src="/images/hero/headerimage3.jpeg"
              alt="logo"
              width={320}
              height={20}
              style={{ borderRadius: '10px' }}
            />
            <Image
              src="/images/hero/headerimage3.jpeg"
              alt="logo"
              width={320}
              height={20}
              style={{ borderRadius: '10px' }}
            />
            <Image
              src="/images/hero/headerimage3.jpeg"
              alt="logo"
              width={320}
              height={20}
              style={{ borderRadius: '10px' }}
            />
            <Image
              src="/images/hero/headerimage3.jpeg"
              alt="logo"
              width={320}
              height={20}
              style={{ borderRadius: '10px' }}
            />
          </div>
        </div>

        <div>
          <h1 className="py-3 md:py-50 lg:py-5" style={{ fontSize: "25px" }}>Esports</h1>
          <div className="grid grid-cols-1 gap-x-5 gap-y-8 md:grid-cols-4 lg:grid-cols-6">
            <Image
              src="/images/hero/headerimage3.jpeg"
              alt="logo"
              width={320}
              height={20}
              style={{ borderRadius: '10px' }}
            />
            <Image
              src="/images/hero/headerimage3.jpeg"
              alt="logo"
              width={320}
              height={20}
              style={{ borderRadius: '10px' }}
            />
            <Image
              src="/images/hero/headerimage3.jpeg"
              alt="logo"
              width={320}
              height={20}
              style={{ borderRadius: '10px' }}
            />
            <Image
              src="/images/hero/headerimage3.jpeg"
              alt="logo"
              width={320}
              height={20}
              style={{ borderRadius: '10px' }}
            />
            <Image
              src="/images/hero/headerimage3.jpeg"
              alt="logo"
              width={320}
              height={20}
              style={{ borderRadius: '10px' }}
            />
            <Image
              src="/images/hero/headerimage3.jpeg"
              alt="logo"
              width={320}
              height={20}
              style={{ borderRadius: '10px' }}
            />
          </div>
        </div>

        <div>
          <h1 className="py-3 md:py-50 lg:py-5" style={{ fontSize: "25px" }}>Sports</h1>
          <div className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8">
            <Image
              src="/images/hero/headerimage3.jpeg"
              alt="logo"
              width={320}
              height={20}
              style={{ borderRadius: '10px' }}
            />
            <Image
              src="/images/hero/headerimage3.jpeg"
              alt="logo"
              width={320}
              height={20}
              style={{ borderRadius: '10px' }}
            />
            <Image
              src="/images/hero/headerimage3.jpeg"
              alt="logo"
              width={320}
              height={20}
              style={{ borderRadius: '10px' }}
            />
            <Image
              src="/images/hero/headerimage3.jpeg"
              alt="logo"
              width={320}
              height={20}
              style={{ borderRadius: '10px' }}
            />
            <Image
              src="/images/hero/headerimage3.jpeg"
              alt="logo"
              width={320}
              height={20}
              style={{ borderRadius: '10px' }}
            />
            <Image
              src="/images/hero/headerimage3.jpeg"
              alt="logo"
              width={320}
              height={20}
              style={{ borderRadius: '10px' }}
            />
             <Image
              src="/images/hero/headerimage3.jpeg"
              alt="logo"
              width={320}
              height={20}
              style={{ borderRadius: '10px' }}
            />
            <Image
              src="/images/hero/headerimage3.jpeg"
              alt="logo"
              width={320}
              height={20}
              style={{ borderRadius: '10px' }}
            />
            <Image
              src="/images/hero/headerimage3.jpeg"
              alt="logo"
              width={320}
              height={20}
              style={{ borderRadius: '10px' }}
            />
            <Image
              src="/images/hero/headerimage3.jpeg"
              alt="logo"
              width={320}
              height={20}
              style={{ borderRadius: '10px' }}
            />
            <Image
              src="/images/hero/headerimage3.jpeg"
              alt="logo"
              width={320}
              height={20}
              style={{ borderRadius: '10px' }}
            />
            <Image
              src="/images/hero/headerimage3.jpeg"
              alt="logo"
              width={320}
              height={20}
              style={{ borderRadius: '10px' }}
            />
            <Image
              src="/images/hero/headerimage3.jpeg"
              alt="logo"
              width={320}
              height={20}
              style={{ borderRadius: '10px' }}
            />
            <Image
              src="/images/hero/headerimage3.jpeg"
              alt="logo"
              width={320}
              height={20}
              style={{ borderRadius: '10px' }}
            />
             <Image
              src="/images/hero/headerimage3.jpeg"
              alt="logo"
              width={320}
              height={20}
              style={{ borderRadius: '10px' }}
            />
            <Image
              src="/images/hero/headerimage3.jpeg"
              alt="logo"
              width={320}
              height={20}
              style={{ borderRadius: '10px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
