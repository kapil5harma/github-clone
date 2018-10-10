import styled from 'styled-components';

export const CustomText = styled.div.attrs({
  className: props => props.className,
  family: props => props.fontFamily,
  size: props => props.fontSize,
  weight: props => props.fontWeight,
  fontStyle: props => props.fontstyle,
  lineheight: props => props.lineHeight,
  letterSpacing: props => props.letterSpacing,
  padding: props => props.padding || '1rem',
  color: props => props.color
})`
  font-family: ${props => props.family};
  font-size: ${props => props.size};
  font-weight: ${props => props.weight};
  font-style: ${props => props.fontStyle};
  line-height: ${props => props.lineheight};
  letter-spacing: ${props => props.letterSpacing};
  padding: ${props => props.padding};
  color: ${props => props.color};
`;
