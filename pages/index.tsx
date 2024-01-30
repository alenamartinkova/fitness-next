import type {GetServerSideProps, NextPage} from 'next'
import { InferGetStaticPropsType } from 'next'
import { getStaticProps } from "next/dist/build/templates/pages";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Special from "../components/Special";
import Why from "../components/Why";
import Divider from "../components/Divider";
import AboutMe from "../components/AboutMe";
import Education from "../components/Education";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const [texts, setTexts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/select');
        const data = await response.json();

        if (data.error) {
          throw new Error('Error');
        }

        setTexts(data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div
      className={
        'container mx-auto max-w-[1204px] px-4 xl:px-0 text-black'
      }
    >
      <div id={'top'}/>
      <div className={'flex flex-col md:gap-[120px] gap-8'}>
        <Nav texts={texts} />
        <Header texts={texts} />
        <Special texts={texts} />
        <Why texts={texts} />
        <Divider texts={texts} />
        <AboutMe texts={texts} />
        <Education texts={texts} />
        <Pricing texts={texts} />
        <Footer texts={texts} />
      </div>
    </div>
  )
}

export default Home