import React from "react";
import Link from "next/link";
import ThumbnailCarousel from "../ThumbnailCarousel";

const Conferences = () => {
  return (
    <>
      <section className="bg-IcyBreeze dark:bg-darklight relative overflow-hidden before:absolute before:content-[''] before:bg-PaleSkyBlu before:dark:bg-secondary before:w-687 before:h-687 before:-bottom-1/2 before:rounded-full before:xl:inline-block before:hidden">
        <div className="container">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center lg:gap-24 gap-5">
            <div
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <ThumbnailCarousel />
            </div>
            <div
              className="md:pt-0 pt-6"
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <h2>Events Across Any Venue In The World</h2>
              <p className="text-lg font-normal text-SlateBlueText dark:text-opacity-80 max-w-506 md:pt-9 pt-5 md:pb-14 pb-6">
                Whether you’re hosting a small local event or managing a major international show, you can sell your tickets from anywhere in the world. Our platform gives you the tools to reach a wider audience, promote your event effortlessly, and ensure your tickets get into the hands of the right people.
              </p>
              <Link
                href="/schedules"
                className="btn_outline btn-2 hover-outline-slide-down"
              >
                <span>Upcoming Events</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Conferences;
