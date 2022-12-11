import React from "react";
import { Container, Flex, Img } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip, Pagination, Navigation } from "swiper";
import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.jpg";
import img3 from "../../assets/images/img3.jpg";
import img4 from "../../assets/images/img4.jpg";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-flip";
import "swiper/css";

export const Header = () => {
  return (
    <Flex h="120px" w="100%">
      <Swiper
        effect={"flip"}
        grabCursor={true}
        pagination={true}
        navigation={true}
        modules={[EffectFlip, Pagination, Navigation]}
      >
        <Flex bgColor="red">
          <SwiperSlide>
            <Img w="100%" objectFit="cover" src={img1} />
          </SwiperSlide>
          <SwiperSlide>
            <Img src={img2} />
          </SwiperSlide>
          <SwiperSlide>
            <Img objectFit="cover" src={img3} />
          </SwiperSlide>
          <SwiperSlide>
            <Img objectFit="cover" src={img4} />
          </SwiperSlide>
        </Flex>
      </Swiper>
    </Flex>
  );
};
