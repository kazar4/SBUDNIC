import React from "react"
import Footer from "../Footer"
import { Link } from "react-router-dom"
import {
  // space3,
  // eureka1,
  // sbudnic,
  // sbudnic2,
  // sbudnic3,
  // sbudnic4,
  // sbudnic5,
  // sbudnic6,
  sbudnic7,
  // sbudnic8,
  // sbudnic9,
  // sbudnic10,
} from "../content/images"
import Countdown, { calcTimeDelta } from "react-countdown"

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  return (
    <div className="flex flex-col items-center lg:items-start">
      <div className="grid grid-flow-col gap-5 pb-8 font-semibold place-items-end auto-cols-max">
        <span className="text-xl md:text-xl">Launch in:</span>
        <div className="md:text-sm">
          <span className="pr-1 text-xl md:text-xl">
            <span>{days}</span>
          </span>
          days
        </div>
        <div className="md:text-sm">
          <span className="px-1 text-xl md:text-xl">
            <span>{hours}</span>
          </span>
          hours
        </div>
        <div className="md:text-sm">
          <span className="px-1 text-xl md:text-xl">
            <span> {minutes}</span>
          </span>
          min
        </div>
        <div className="md:text-sm">
          <span className="px-1 text-xl md:text-xl">
            <span>{seconds}</span>
          </span>
          sec
        </div>
      </div>
    </div>
  )
}

const Home = () => (
  <>
    <section class="text-gray-600 body-font">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 xl:pr-72 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="lg:pb-8 title-font lg:text-5xl md:leading-tight lg:leading-snug sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            A <span className="text-indigo-500">S</span>putnik-like 3U cubesat
            by <span className="text-indigo-500">B</span>rown{" "}
            <span className="text-indigo-500">U</span>niversity,{" "}
            <span className="text-indigo-500">D</span>-Orbit, and{" "}
            <span className="text-indigo-500">C</span>NR
          </h1>
          <p class="mb-12 lg:text-xl lg:leading-relaxed">
            We are a small group of Brown University students testing the limits of how quickly and efficiently a 6kg CubeSat can
            be developed.
          </p>
          <Countdown
              date={Date.now() + calcTimeDelta("2021-11-01T00:00:00").total}
              renderer={renderer}
            />
          <div class="flex justify-center">
            <Link
              to="/about"
              class="transition duration-500 ease-out transform inline-flex text-white bg-indigo-500 border-0 py-3 px-6 focus:outline-none hover:bg-indigo-600 rounded text-xl hover:scale-110 active:scale-110 focus:scale-110"
              // className="px-3 pt-4 mb-1 mr-1 text-xs font-bold text-indigo-500 uppercase transition duration-500 ease-out transform border-t-2 outline-none hover:scale-110 hover:opacity-100 background-transparent active:scale-110 focus:scale-110 hover:text-indigo-600"
            >
              Learn More
            </Link>
            <Link
              to="/news"
              class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-3 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg duration-500 ease-out transform  hover:scale-110 active:scale-110 focus:scale-110"
            >
              News
            </Link>
          </div>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            class="object-cover object-center rounded"
            alt="hero"
            src={sbudnic7}
          />
          {/* <div className="flex justify-center pt-8">
            <Countdown
              date={Date.now() + calcTimeDelta("2021-11-01T00:00:00").total}
              renderer={renderer}
            />
          </div> */}
        </div>
      </div>
    </section>
    <Footer />
  </>
)

export default Home
