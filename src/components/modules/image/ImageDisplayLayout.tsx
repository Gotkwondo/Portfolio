import Box from "@mui/material/Box";
import { ImageLayoutProps } from "@/types/components/image";
import { div as MotionDiv } from "motion/react-client";

const ImageDisplayLayout = ({ animationType, children, ...rest }: ImageLayoutProps) => {
  console.log(animationType)
  return (
    <Box>
      <MotionDiv
        className="w-[100px] h-[100px] rounded-[5px] border-2 border-solid border-[#0cdcf7] overflow-hidden"
        // Hover 시 애니메이션 동작
        whileHover={{
          scale: [null, 1.3], // 애니메이션 변화 수준
          // 애니메이션 동작 방식
          transition: {
            duration: 0.3, // 애니메이션 진행 시간
            times: [0, 1], // 애니메이션 시작과 끝의 속도 조절
            ease: ["easeInOut", "easeOut"], // 애니메이션 진행 속도 곡선
          },
        }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
        {...rest}
      >
        {/* <Image className="w-full h-full" src={src} alt="test image" /> */}
        {children}
      </MotionDiv>
    </Box>
  );
};

export default ImageDisplayLayout;
