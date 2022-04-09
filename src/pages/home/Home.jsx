import Container from 'components/container';
import Header from 'components/header';
import StyledBackground from 'components/styledBackground';

import Hero from 'pages/home/hero';
import Tutorial from 'pages/home/tutorial';
import OurClients from 'pages/home/ourClients';
import Testimonials from 'pages/home/testimonials';

export default function Home() {
  return (
    <>
      <StyledBackground>
        <Header />
      </StyledBackground>

      <main>
        <Container>
          <Hero />
        </Container>

        <Container>
          <Tutorial />
        </Container>

        <Container>
          <OurClients />
        </Container>

        <Container>
          <Testimonials />
        </Container>
      </main>
    </>
  );
}
