"use client"

import type React from "react"
import Image from 'next/image';
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  Github,
  Linkedin,
  Twitter,
  Calendar,
  FileText,
  Blocks,
  Cpu,
  Braces,
  MessageSquare,
  Layout,
  Palette,
  Server,
  UploadCloud,
  Database,
  Bell,
  Activity,
} from "lucide-react"
import { Link as ScrollLink } from "react-scroll"
import Navbar from "@/components/navbar"
import SocialIcon from "@/components/social-icon"
import { Button } from "@/components/ui/button"
import AboutMe from "@/components/about-me"
import Loading from "@/components/loading"
import InteractiveShapes from "@/components/InteractiveShapes"
import AnimatedBoxes from "@/components/AnimatedBoxes"
const a1 = "/1736509356512.png";
const a2 = "/1736509356517.png"
const a3 = "/1736509356523.png"
const a4 = "/1736509356527.png"
const a5 = "/1736509356533.png"
const a6 = "/1736509356537.png"
const a7 = "/1736509356541.png"
const a8 = "/1736509356546.png"
const a9 = "/1736509356550.png"
const a12 = "/1738488717320.png"
const a11 = "/1738488717329.png"
const a10 = "/qr.png"
export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [loading, setLoading] = useState(true)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setMounted(true)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000) // Show loading for 2 seconds

    return () => clearTimeout(timer)
  }, [])

  if (!mounted) return null
  if (loading) return <Loading />

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    // Format the message for WhatsApp
    const whatsappMessage = `Hello, my name is ${name}.%0AEmail: ${email}%0A%0A${message}`;
    const phoneNumber = "923156565918"; // Replace with your WhatsApp number (e.g., 1234567890)
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

    window.open(whatsappURL, "_blank");
  };
  const cardsData = [
    { id: 12, url: "https://www.linkedin.com/posts/muhammad-huzaifa-968a3b321_mern-fullstackdevelopment-websecurity-activity-7291114427842547712-yfbt?utm_source=share&utm_medium=member_desktop", description: "A quiz application with both frontend and backend, offering user and admin roles, question management, real-time scoring, and result tracking.", title: "Quiz Application", image: a12, site: "https://quizapplicationbyhuzaifa.vercel.app/" },
    { id: 11, url: "https://www.linkedin.com/posts/muhammad-huzaifa-968a3b321_saylanihackathon-microfinanceapp-techforgood-activity-7289947178565820416-nGZD?utm_source=share&utm_medium=member_desktop", description: "A full-stack microfinance application built with React.js, featuring user and admin dashboards, loan management, transaction tracking, and secure authentication.", title: "Micro Finance App", image: a11, site: "https://frontend-hackathon-microfinanaceapp.vercel.app/" },
    { id: 2, url: "https://www.linkedin.com/posts/muhammad-huzaifa-968a3b321_activity-7257801796050423808-2A8k?utm_source=share&utm_medium=member_desktop", description: "A weather application using JavaScript that fetches real-time weather data from an API, displaying temperature, humidity, and forecasts.", title: "Weather App", image: a2, site: "https://huzaifa-io.github.io/Weather/" },
    { id: 3, url: "https://www.linkedin.com/posts/muhammad-huzaifa-968a3b321_reactjs-activity-7263153787257683968-REy9?utm_source=share&utm_medium=member_desktop", description: "A ticket booking application built with React.js, providing a seamless user experience for selecting seats, booking tickets.", title: "Ticket Booking", image: a3, site: "https://ticket-booking-lac.vercel.app/" },
    { id: 4, url: "https://www.linkedin.com/posts/muhammad-huzaifa-968a3b321_html-css-js-activity-7270074285006757890-zHrZ?utm_source=share&utm_medium=member_desktop", description: "A currency rate converter using JavaScript that fetches real-time exchange rates via an API, enabling users to convert currencies easily.", title: "Currency Rates", image: a4, site: "https://huzaifa-io.github.io/Currency/" },
    { id: 5, url: "https://www.linkedin.com/posts/muhammad-huzaifa-968a3b321_webdevelopment-chatapplication-innovation-activity-7280563345160589312-7PAj?utm_source=share&utm_medium=member_desktop", description: "A real-time chat application built with React.js, WebSocket, and Firebase, enabling users to send and receive messages instantly in an interactive interface.", title: "Chat Application ", image: a5, site: "https://freemessages.vercel.app/" },
    { id: 6, url: "https://www.linkedin.com/posts/muhammad-huzaifa-968a3b321_html-css-js-activity-7266069515438850048-VfbS?utm_source=share&utm_medium=member_desktop", description: "A JavaScript-based word counter that provides real-time word and character count for quick text analysis with a simple and intuitive interface.", title: "Word Counter", image: a6, site: "https://huzaifa-io.github.io/Word-counter/" },
    { id: 7, url: "https://www.linkedin.com/posts/muhammad-huzaifa-968a3b321_calculator-using-javascript-activity-7264278444782313473-lyem?utm_source=share&utm_medium=member_desktop", description: "A simple calculator application built with JavaScript, enabling users to perform basic arithmetic operations with a responsive and user-friendly interface.", title: "Calculator", image: a7, site: "https://huzaifa-io.github.io/calculators/" },
    { id: 8, url: "https://www.linkedin.com/posts/muhammad-huzaifa-968a3b321_html-css-js-activity-7264681343605755904-Z6yC?utm_source=share&utm_medium=member_desktop", description: "A to-do application built with JavaScript and Firebase, allowing users to add, edit, delete, and store tasks in real-time with cloud synchronization.", title: "Todo Application", image: a8, site: "https://todo-firebase-iota.vercel.app/" },
    { id: 9, url: "https://www.linkedin.com/posts/muhammad-huzaifa-968a3b321_html-css-js-activity-7269420971634143232-FGIC?utm_source=share&utm_medium=member_desktop", description: "An e-commerce website built with React.js, featuring product listings, shopping cart functionality, user authentication.", title: "E-Commerce Website", image: a9, site: "https://lovelysteps.vercel.app/" },
    { id: 10, url: "https://www.linkedin.com/posts/muhammad-huzaifa-968a3b321_html-css-js-activity-7264597678527815681-Nnxi?utm_source=share&utm_medium=member_desktop", description: "A QR code generator built with JavaScript that instantly converts user input into a QR code, allowing easy sharing of information.", title: "Qr Code Generator", image: a10, site: "https://huzaifa-io.github.io/Qr-code" },
    { id: 1, url: "https://www.linkedin.com/posts/muhammad-huzaifa-968a3b321_html-css-js-activity-7264998306332753921-Vr65?utm_source=share&utm_medium=member_desktop", description: "An interactive game developed using JavaScript, offering engaging gameplay, smooth animations, and an intuitive user interface.", title: "Game", image: a1, site: "https://huzaifa-io.github.io/Rock-paper-scissor-/" },
  ];
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Navbar />
      <InteractiveShapes />

      {/* Hero Section with Animated Boxes */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <AnimatedBoxes />
        <div className="container relative z-10 px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              Hey! It's Muhammad Huzaifa
            </h1>
            <h2 className="text-xl md:text-2xl mb-8 text-gray-300">
              🚀Full-Stack Developer
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <ScrollLink to="work" smooth={true} duration={500}>
                <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                  View Projects
                </Button>
              </ScrollLink>
              <ScrollLink to="contact" smooth={true} duration={500}>
                <Button
                  variant="outline"
                  className="bg-transparent border-2 border-purple-500 text-white hover:bg-purple-500 hover:text-white transition-all duration-300"
                >
                  Contact Me
                </Button>
              </ScrollLink>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container px-4 mx-auto">
          <AboutMe />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-black">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                My Expertise
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard
                icon={<Braces className="w-10 h-10 text-purple-500" />}
                title="Full-Stack Web Development"
                description="Design and develop scalable, high-performance web applications using React.js, Node.js, Express.js, and MongoDB. Implement secure authentication with Firebase, JWT, or OAuth."
              />
              <ServiceCard
                icon={<Layout className="w-10 h-10 text-pink-500" />}
                title="Custom Web Applications"
                description="Develop tailored web solutions with React.js, Express.js, and MongoDB. Integrate Firebase services, Cloudinary for media storage, and Stripe for payments."
              />
              <ServiceCard
                icon={<Palette className="w-10 h-10 text-purple-500" />}
                title="Responsive UI/UX Development"
                description="Craft visually appealing, responsive UIs using Tailwind CSS, Material UI, Ant Design, and Bootstrap. Ensure accessibility and a seamless user experience."
              />
              <ServiceCard
                icon={<Server className="w-10 h-10 text-pink-500" />}
                title="API Development & Integration"
                description="Build and document robust RESTful APIs using Express.js and Node.js. Integrate third-party services like Stripe for payments and test APIs with Postman."
              />
              <ServiceCard
                icon={<UploadCloud className="w-10 h-10 text-purple-500" />}
                title="Web Hosting & Deployment"
                description="Deploy applications on Vercel, Netlify, Firebase Hosting, and traditional web servers. Configure HTTPS and optimize performance for fast delivery."
              />
              <ServiceCard
                icon={<Database className="w-10 h-10 text-pink-500" />}
                title="Database Management"
                description="Design and manage NoSQL databases with MongoDB and Firebase Firestore. Implement efficient data storage, real-time synchronization, and scalable architectures."
              />
              <ServiceCard
                icon={<Bell className="w-10 h-10 text-purple-500" />}
                title="Push Notifications & Realtime Features"
                description="Integrate push notifications and real-time features using Firebase Cloud Messaging (FCM) and WebSockets for instant updates and seamless communication."
              />
              <ServiceCard
                icon={<Activity className="w-10 h-10 text-pink-500" />}
                title="Website Maintenance & Performance Optimization"
                description="Ensure website reliability with maintenance, performance enhancements, and security updates. Implement caching, lazy loading, and CDN optimization."
              />
            </div>
          </motion.div>
        </div>

      </section>

      {/* Work Section */}
      <section id="work" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                What I've Built
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cardsData.map((project) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  tags={[project.title]}
                  image={project.image}
                  site={project.site}
                  url={project.url}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                Contact Me
              </span>
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400">
                      Name
                    </label>
                    <input
                      placeholder="Please enter your name"
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name || ""}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white px-4 py-3"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400">
                      Email
                    </label>
                    <input
                      placeholder="Enter your email"
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email || ""}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white px-4 py-3"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400">
                      Message
                    </label>
                    <textarea
                      placeholder="Enter your message here"
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message || ""}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white px-4 py-3"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 px-6 rounded-md"
                  >
                    Send Message via WhatsApp
                  </button>
                </form>
                <div className="mt-6 text-center">
                  <div className="flex flex-col sm:flex-row justify-center gap-4">

                    <a
                      href="https://drive.google.com/file/d/1xKgmAM3S06v_rWoL3UgFBOefuWHmFhOI/view?usp=drive_link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700"
                    >
                      <FileText className="mr-2 h-4 w-4" />
                      View CV
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer with Social Links */}
      <footer className="py-12 bg-gradient-to-t from-gray-900 to-black">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <SocialIcon icon={<Github />} href="https://github.com/huzaifa-io" label="GitHub" />
            <SocialIcon icon={<MessageSquare />} href="https://wa.me/923156565918" label="WhatsApp" />
            <SocialIcon icon={<Linkedin />} href="https://linkedin.com/in/muhammad-huzaifa-968a3b321" label="LinkedIn" />
          </div>
          <div className="text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Muhammad Huzaifa. All rights reserved.</p>
            <ContactEmail />
          </div>
        </div>
      </footer>
    </div>
  )
}

function ServiceCard({ icon, title, description }) {
  return (
    <div className="p-6 rounded-lg bg-gray-900 border border-gray-800 hover:border-purple-500 transition-all duration-300 text-center md:text-left">
      <div className="mb-4 flex justify-center md:justify-start">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}

const ProjectCard = ({ title, description, tags, image, site, url }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-md mb-4" />
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="text-gray-400 mt-2">{description}</p>
      <div className="flex flex-wrap mt-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-purple-600 text-white text-xs font-semibold px-2 py-1 rounded-full mr-2 mb-2"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex justify-between items-center mt-4">
        <a
          href={site}
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-400 hover:underline"
        >
          Live Demo 🚀
        </a>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:underline flex justify-center items-center space-x-2"
        >
          <span>LinkedIn Post</span><Linkedin size={16} />
          
        </a>
      </div>
    </div>
  );
};

function ContactEmail() {
  return (
    <div className="mt-2">
      <a href="mailto:huzaifa2008khi@gmail.com" className="text-purple-400 hover:text-purple-300">
        huzaifa2008khi@gmail.com
      </a>
    </div>
  )
}

