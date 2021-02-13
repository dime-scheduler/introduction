import React, { useCallback } from 'react'
import { useSpring, animated } from 'react-spring'
import styled from "styled-components";

const Container = styled.div`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  cursor: ${props => props.isClickable ? "pointer" : "auto"};
`;

const AnimatedCard = styled(animated("img"))`
  border-radius: 5px;
  box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.5s;
  height: 100%;
  width: 100%;
  &:hover {
    box-shadow: 0 30px 100px -10px rgba(0, 0, 0, 0.4);
  }
`;

const ImageCard = (props) => {
    const { image, height, width, imageId } = props;

    const [spring, setSpring] = useSpring(() => ({
        xys: [0, 0, 1],
        config: { mass: 5, tension: 350, friction: 40 },
    }));

    const imgElement = React.useRef(null);

    const calculateRotation = useCallback((x, y) => {
        const items = [
            -(y - imgElement.current.naturalHeight / 2) / 100,
            (x - imgElement.current.naturalWidth / 2) / 100,
            1.01,
        ];
        return items;
    }, []);

    return (
        <Container>
            <AnimatedCard
                id={imageId}
                src={image}
                ref={imgElement}
                onMouseMove={({ clientX: x, clientY: y }) => setSpring({ xys: calculateRotation(x, y, width, height) })}
                onMouseLeave={() => setSpring({ xys: [0, 0, 1], })}
                style={{
                    transform: spring.xys.interpolate(
                        (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
                    )
                }}
            />
        </Container>
    );
}

export default ImageCard;