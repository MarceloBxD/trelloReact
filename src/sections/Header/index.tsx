import React from "react";
import { Flex, Img } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip, Pagination, Navigation } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-flip";
import "swiper/css";

export const Header = () => {
  return (
    <Flex h="18vh" w="100%" justify="center">
      <Swiper
        width={1000}
        effect={"flip"}
        grabCursor={true}
        pagination={true}
        navigation={true}
        modules={[EffectFlip, Pagination, Navigation]}
      >
        <SwiperSlide>
          <Img
            w="100%"
            objectFit="cover"
            src="https://swiperjs.com/demos/images/nature-1.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Img w="100%" src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <Img w="100%" src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <Img w="100%" src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
};
