import type { NextPage } from 'next'
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

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ locale }) => {
  return (
    <div
      className={
        'container mx-auto max-w-[1204px] px-4 xl:px-0 text-black'
      }
    >
      <div id={'top'}/>
      <div className={'flex flex-col md:gap-[120px] gap-8'}>
        <Nav/>
        <Header/>
        <Special/>
        <Why/>
        <Divider/>
        <AboutMe/>
        <Education/>
        <Pricing/>
        <Footer/>
      </div>
    </div>
  )
}

export default Home