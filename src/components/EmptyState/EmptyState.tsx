import {
  DescriptionWrapper,
  EmptyStateContainer,
  Img,
  ImgWrapper,
} from "./styles";

type EmptyStateType = {
  img?: string | JSX.Element;
  title?: string;
  description?: string;
  button?: JSX.Element;
  className?: string;
};

const EmptyState: React.FC<EmptyStateType> = ({
  img,
  title,
  description,
  button,
  className,
}) => {
  return (
    <EmptyStateContainer className={className}>
      {img && (
        <ImgWrapper>
          {typeof img === "string" ? (
            <Img src={img} alt="tableIcon icon" />
          ) : (
            img
          )}
        </ImgWrapper>
      )}
      {title && <div>{title}</div>}
      {description && (
        <DescriptionWrapper>
          <div>{description}</div>
        </DescriptionWrapper>
      )}
      {button && button}
    </EmptyStateContainer>
  );
};

export default EmptyState;
