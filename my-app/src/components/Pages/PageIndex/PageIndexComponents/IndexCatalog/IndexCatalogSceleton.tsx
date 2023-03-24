import { FlexWrapper } from "../../../../StyledComponents/FlexWrapper/FlexWrapper";

export const IndexCatalogSceleton = () => {
  return (
    <>
      <FlexWrapper
        height="380px"
        width="100%"
        backgroundCcolor="#ffffff"
        alignItems="center"
        justifyContent="space-between"
        borderRadius="5px"
        padding="20px"
        gap="50px"
        position="relative"
      >
        <FlexWrapper position="absolute" top="27px" left="20px">
          <FlexWrapper
            width="28px"
            height="22px"
            borderRadius="50%"
            backgroundCcolor="#b2b2b2"
          />
        </FlexWrapper>

        <FlexWrapper
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          width="250px"
          height="100%"
          overflow="hidden"
        >
          <FlexWrapper
            width="126px"
            height="180px"
            borderRadius="5px"
            backgroundCcolor="#b2b2b2"
          />
        </FlexWrapper>
        <FlexWrapper height="100%">
          <FlexWrapper
            flexDirection="column"
            height="100%"
            justifyContent="space-between"
          >
            <FlexWrapper
              flexDirection="column"
              alignItems="flex-start"
              gap="10px"
              width="1100px"
            >
              <FlexWrapper justifyContent="space-between" width="100%">
                <FlexWrapper
                  width="500px"
                  height="33px"
                  borderRadius="5px"
                  backgroundCcolor="#b2b2b2"
                />

                <FlexWrapper gap="10px" alignItems="center">
                  <FlexWrapper
                    width="163px"
                    height="33px"
                    borderRadius="5px"
                    backgroundCcolor="#b2b2b2"
                  />
                </FlexWrapper>
              </FlexWrapper>

              <FlexWrapper
                width="90px"
                height="18px"
                borderRadius="5px"
                backgroundCcolor="#b2b2b2"
              />
              <FlexWrapper
                width="1100px"
                height="19px"
                borderRadius="5px"
                backgroundCcolor="#b2b2b2"
              />
              <FlexWrapper
                width="1100px"
                height="19px"
                borderRadius="5px"
                backgroundCcolor="#b2b2b2"
              />
              <FlexWrapper
                width="1100px"
                height="19px"
                borderRadius="5px"
                backgroundCcolor="#b2b2b2"
              />
            </FlexWrapper>
            <FlexWrapper justifyContent="flex-end" width="100%">
              <FlexWrapper
                width="291px"
                height="65px"
                borderRadius="5px"
                backgroundCcolor="#b2b2b2"
              />
            </FlexWrapper>
          </FlexWrapper>
        </FlexWrapper>
      </FlexWrapper>
    </>
  );
};
