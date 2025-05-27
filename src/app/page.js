'use client';
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Header from "./components/navbar";
import { FaUsers, FaStar, FaPlane, FaSuitcase } from "react-icons/fa";
import Paragliding from "./paragliding/page";
import Ziplining from "./ziplining/page";
import HotAirBallooning from "./hotairballooning/page";
import Head from "next/head";
import Script from 'next/script';


const activities = [
  {
    title: "Hot Air Balloon",
    description: "Soar high and enjoy breathtaking views.",
    image: "/images/hotairballon.jpg",
    price: "1500/- per person",
    link: "/activities/hot-air-ballooning",
  },
  {
    title: "Paragliding",
    description: "Experience the thrill of flying like a bird.",
    image: "/images/Paragliding2.jpg",
    price: "1500/- upto ₹3500/- per person",
    link: "/activities/paragliding",
  },
  {
    title: "Ziplining",
    description: "Glide through the air with speed and excitement.",
    image: "/images/zipline2.jpg",
    price: "1000/- per person",
    link: "/activities/zipline3.jpg",
  },
];


export default function Home() {
  return (
    <>
      <Head>
        {/* ✅ Optimized Title */}
        <title>Adventure Activities in Dalhousie & Khajjiar | Paragliding, Ziplining & Hot Air Balloon</title>

        {/* ✅ SEO-Optimized Meta Description */}
        <meta name="description" content="Discover the best adventure activities in Dalhousie & Khajjiar, the Mini Switzerland of India! Experience thrilling paragliding, ziplining & hot air ballooning. Book now at best prices!" />

        {/* ✅ Expanded Keyword List for SEO */}
        <meta name="keywords" content="adventure activities in Himachal Pradesh, things to do in Dalhousie, adventure activities in Dalhousie, Dalhousie tourism, best adventure in Khajjiar, Mini Switzerland of India, paragliding in Khajjiar, paragliding in Dalhousie, ziplining in Dalhousie, hot air balloon in Dalhousie, best places to visit in Dalhousie, adventure tourism in Himachal Pradesh, Activities at best prices, Activities at best prices in Dalhousie, himachal tourism" />

        <meta name="author" content="Adventure Heaven" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* ✅ Open Graph Tags for Social Sharing */}
        <meta property="og:title" content="Best Adventure Activities in Dalhousie & Khajjiar" />
        <meta property="og:description" content="Plan your next adventure in Dalhousie & Khajjiar, the Mini Switzerland of India! Enjoy paragliding, ziplining, and hot air balloon rides. Safe, thrilling & unforgettable!" />
        <meta property="og:image" content="/images/Paragliding2.jpg" />
        <meta property="og:url" content="https://adventuresheaven.com/" />
        <meta property="og:type" content="website" />

        {/* ✅ Twitter Card for Better Engagement on Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Adventure Activities in Dalhousie & Khajjiar" />
        <meta name="twitter:description" content="Explore the most thrilling adventure sports in Dalhousie & Khajjiar. Paragliding, ziplining, hot air ballooning & more! Book your adventure now!" />
        <meta name="twitter:image" content="/images/Paragliding2.jpg" />

        {/* ✅ JSON-LD Schema Markup for SEO */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TouristAttraction",
            "name": "Adventure Activities in Dalhousie & Khajjiar",
            "image": "/images/Paragliding2.jpg",
            "description": "Experience thrilling adventure sports in Dalhousie & Khajjiar, the Mini Switzerland of India! Paragliding, ziplining, hot air balloon rides & more.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Dalhousie",
              "addressRegion": "Himachal Pradesh",
              "addressCountry": "IN"
            },
            "offers": {
              "@type": "Offer",
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock",
              "url": "https://adventuresheaven.com/"
            }
          })
        }} />

        <Script
          id="gtag-base"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-17088875101"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17088875101');
          `}
        </Script>
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-blue-500 to-blue-300 text-white  overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/hotairballon.png')" }}
        />

        <Header />

        {/* Hero Section */}
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative p-4"
          >
            <h1 className="text-3xl sm:text-5xl font-bold">
              Experience the Thrill of Air Adventures
            </h1>

            <p className="mt-2 text-base sm:text-lg">
              Unforgettable air adventures in Khajjiar & Dalhousie: Paragliding, Ziplining, Hot Air Ballooning
            </p>

            <Link
              href="/hotairballooning"
              className="mt-6 inline-block bg-white text-blue-600 px-6 py-3 rounded-lg text-lg hover:bg-gray-200 transition font-semibold"
            >
              Explore Activities
            </Link>
          </motion.div>
          {/* Statistics Section */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {[
              { icon: <FaPlane />, value: "20+", label: "Guides" },
              { icon: <FaSuitcase />, value: "3K+", label: "Happy customers" },
              { icon: <FaStar />, value: "89+", label: "5 Star Ratings" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.2 }}
                className="bg-white text-blue-600 p-6 rounded-lg shadow-lg flex flex-col items-center"
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <h3 className="text-2xl sm:text-3xl font-bold">{stat.value}</h3>
                <p className="text-sm sm:text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>



        {/* Featured Activities */}
        <section className="py-10 px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold font-serif mb-9">Popular Air Activities</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {activities.map((activity) => (
              <motion.div
                key={activity.title}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-4 sm:p-6 rounded-lg shadow-lg text-black flex flex-col items-center"
              >
                {/* Image - Responsive */}
                <div className="w-full h-48 sm:h-64 flex justify-center items-center overflow-hidden rounded-lg">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    width={300}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                </div>
                {/* Activity Info */}
                <h3 className="text-lg sm:text-xl font-semibold mt-3">{activity.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base mt-2">{activity.description}</p>
                <p className="text-base sm:text-lg font-bold text-blue-600 mt-2">Price: ₹{activity.price}</p>
                <Link
                  href={`https://wa.me/9817404544?text=${encodeURIComponent(`Hello, I am interested in ${activity.title}. Can you share more details?`)}`}
                  className="mt-4 inline-block bg-blue-500 px-4 py-2 rounded-lg text-white hover:bg-blue-700 transition"
                >
                  Book Now
                </Link>
              </motion.div>
            ))}
          </div>
        </section>


        {/* Activity Components */}
        <HotAirBallooning />
        <Paragliding />
        <Ziplining />
      </div>
    </>
  );
}
