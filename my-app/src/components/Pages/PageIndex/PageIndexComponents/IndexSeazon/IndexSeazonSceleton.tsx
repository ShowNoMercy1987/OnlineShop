import { FlexWrapper } from "../../../../StyledComponents/FlexWrapper/FlexWrapper";

export const IndexSceletonSeazon = () => {
  return (
    <>
      <FlexWrapper gap="30px">
        <FlexWrapper
          height="260px"
          width="140px"
          backgroundCcolor="#e9e9e9"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-between"
          borderRadius="5px"
          padding="20px 10px"
          position="relative"
        >
          <FlexWrapper position="absolute" top="5px" right="5px">
            <FlexWrapper
              height="28px"
              width="28px"
              borderRadius="50%"
              backgroundCcolor="#b2b2b2"
            />
          </FlexWrapper>

          <FlexWrapper
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            gap="10px"
          >
            <FlexWrapper
              width="45px"
              height="60px"
              backgroundCcolor="#b2b2b2"
              borderRadius="5px"
            />
            <FlexWrapper
              width="102px"
              height="18px"
              backgroundCcolor="#b2b2b2"
              borderRadius="5px"
            />
            <FlexWrapper
              width="102px"
              height="18px"
              backgroundCcolor="#b2b2b2"
              borderRadius="5px"
            />
            <FlexWrapper
              width="102px"
              height="18px"
              backgroundCcolor="#b2b2b2"
              borderRadius="5px"
            />
          </FlexWrapper>

          <FlexWrapper />

          <FlexWrapper
            width="102px"
            height="30px"
            backgroundCcolor="#b2b2b2"
            borderRadius="5px"
          />
        </FlexWrapper>
      </FlexWrapper>
    </>
  );
};
