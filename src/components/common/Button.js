import styled from "styled-components";
const Button = ({ outline, bgColor, size, content, click }) => {
  return (
    <StyledButton
      bgColor={bgColor}
      size={size}
      outline={outline}
      onClick={click}
    >
      {content}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  background: ${({ outline, bgColor }) => (!outline ? bgColor : "transparent")};
  border: ${({ outline, bgColor }) =>
    outline ? `2px solid ${bgColor}` : "none"};
  color: ${({ outline, bgColor }) => (outline ? bgColor : "#fff")};
  font-size: 0.8rem;
  font-weight: 600;
  padding: ${({ size }) => (size === "small" ? "0.7rem 1rem" : "1.3rem 2rem ")};
  box-shadow: ${({ outline }) =>
    !outline ? "3px 11px 18px -8px rgba(66,63,63,0.75)" : "none"};
  border-radius: 0.2rem;
  cursor: pointer;
`;
export default Button;
