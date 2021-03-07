import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';

import PlanetOne from './img/planet.svg';
import PlanetTwo from './img/planet2.svg';
import PlanetThree from './img/planet3.svg';
import PlanetFour from './img/planet4.svg';

const Section = styled.section`
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background: #131313;
`;

const Container = styled.div`
display: grid;
grid-template-columsL 1fr 1fr;
height: 100vh;
padding: 3rem calc((100vw - 1300px)/2);

@media screen and (max-width: 768px){
    grid-template-colums: 1fr;
}
`;

const ColumnLeft = styled.div`
displat: flex;
color: #fff;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding: 5rem 2rem;

h1{
    margin-bottom: 0.5rem;
    font-size: 2rem;
}

p{
    margin: 2rem 0;
    font-size: 4rem;
    line-height: 1.1;
}
`;
const Button = styled.div`
padding: 1rem 3rem;
font-size: 1rem;
border: 2px solid #fff;
border-radius: 4px;
outline: none;
cursor: pointer;
background: transparent;
`;

const Image = styled.img`
position: absolute;
height: 100%;
width: 100%;
max-width: 250px;
max-height: 250px;
`;

const ColumnRight = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 2rem;
position: relative;

${Image}:nth-child(1){
    top: 0px;
    left: 10px;
}

${Image}:nth-child(2){
    bottom: 0;
    right: 20px;
}

${Image}:nth-child(3){
    top: 150px;
    left: 0px;
}

${Image}:nth-child(4){
    top: 100px;
    right: 0px;
}

`;

const Hero = () => {

    const fadeLeft = {
        hidden: { oppacity: 0, x: -100},
        visible: {oppacity: 1, x: 0}
    }
    return(
        <Section>
            <Container>
                <ColumnLeft>
                    <motion.h1
                        inital={{ oppacity: 0}}
                        animate={{oppacity: 1}}
                        transistion={{duration: 1}}>
                            HelloWorld!</motion.h1>
                    <mostion.p
                        variants={fadeLeft}
                        inital='hidden'
                        animate='visiable'
                        transition={{duration: 1}}>
                            This is my website</mostion.p>
                    <Button>Lets G0!</Button>
                </ColumnLeft>
                <ColumnRight>
                    <Image src={PlanetOne} alt="planet" />
                    <Image src={PlanetTwo} alt="planet" />
                    <Image src={PlanetThree} alt="planet" />
                    <Image src={PlanetFour} alt="planet" />
                </ColumnRight>
            </Container>
        </Section>
    )
};
export default Hero