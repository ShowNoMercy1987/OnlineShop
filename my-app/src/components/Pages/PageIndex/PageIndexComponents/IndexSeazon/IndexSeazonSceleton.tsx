import {
  IndexCircleWrapper,
  IndexSceletonMainWrapper,
  IndexSceletonSecondWrapper,
  IndexCircle,
  IndexBodyWrapper,
  IndexSceletonImage,
  IndexSceletonLine,
  IndexSceletonButton
} from "./IndexSeazonStyles";

export const IndexSceletonSeazon = () => {
  return (
    <>
      <IndexSceletonMainWrapper>
        <IndexSceletonSecondWrapper>
          <IndexCircleWrapper>
            <IndexCircle />
          </IndexCircleWrapper>

          <IndexBodyWrapper>
            <IndexSceletonImage />
            <IndexSceletonLine />
            <IndexSceletonLine />
            <IndexSceletonLine />
          </IndexBodyWrapper>

          <IndexSceletonButton />
        </IndexSceletonSecondWrapper>
      </IndexSceletonMainWrapper>
    </>
  );
};
