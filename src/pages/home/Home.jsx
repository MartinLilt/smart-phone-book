import Container from 'components/container';
import Header from 'components/header';
import Footer from 'components/footer';
import StyledBackground from 'components/styledBackground';

import Hero from 'pages/home/hero';
import Tutorial from 'pages/home/tutorial';
import OurClients from 'pages/home/ourClients';
import Testimonials from 'pages/home/testimonials';
import Faqs from 'pages/home/faqs';
import DownloadApp from 'pages/home/downloadApp';
import Subscribe from 'pages/home/subscribe';

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

        <Container>
          <Faqs />
        </Container>

        <Container>
          <DownloadApp />
        </Container>

        <Container>
          <Subscribe />
        </Container>
      </main>

      <Container>
        <Footer />
      </Container>
    </>
  );
}
