"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Calendar, MapPin, Building2 } from "lucide-react"

const timelineData = [
  {
    id: 1,
    company: "SMIT",
    role: "Full Stack Developer",
    period: "2025 - Present",
    location: "Karachi, Pakistan",
    type: "Full-time",
    logo: "https://smitadvisor.vercel.app/logo.png",
    skills: ["JavaScript", "React", "Node.js","MongoDB","Express.js",],
  },
  // {
  //   id: 2,
  //   company: "Company B",
  //   role: "Frontend Developer",
  //   period: "2022 - Present",
  //   location: "San Francisco, CA",
  //   type: "Full-time",
  //   logo: "/company-b-logo.svg",
  //   skills: ["React", "Next.js", "Tailwind CSS"],
  // },
]

const skillsData = {
  "Programming Languages": [
    { name: "JavaScript", proficiency: 90 },
    { name: "HTML", proficiency: 80 },
    { name: "CSS", proficiency: 80 },
  ],
  Frameworks : [
    { name: "React", proficiency: 95 },
    { name: "Next.js", proficiency: 65 },
    { name: "Vite", proficiency: 90 },
    { name: "Node.js", proficiency: 75 },
    { name: "Express.js", proficiency: 80 },
  ],
  Libraries : [
    { name: "Bootstrap", proficiency: 80 },
    { name: "Material UI", proficiency: 85 },
    { name: "Ant Design", proficiency: 75 },
    { name: "Tailwind CSS", proficiency: 70 },
  ],
  Databases: [
    { name: "MongoDB", proficiency: 80 },
    { name: "Redis", proficiency: 70 },
    { name: "FireStore", proficiency: 80 },
  ],
  Tools: [
    { name: "Github", proficiency: 85 },
    { name: "NPM", proficiency: 85 },
    { name: "Docker", proficiency: 80 },
    { name: "Postman", proficiency: 80 },
    { name: "Stripe", proficiency: 55 },
    { name: "Cloudinary", proficiency: 70 },
    { name: "Firebase", proficiency: 85 },
  ],
  Deployment: [
    { name: "Netlify", proficiency: 80 },
    { name: "Vercel", proficiency: 85 },
    { name: "Railway", proficiency: 75 },
  ],
};


export default function AboutMe() {
  return (
    <section id="about" className="py-12 bg-gradient-to-b from-black to-gray-900">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
              About Me
            </span>
          </h2>
          {/* Profile Section */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 mb-16">
            <div className="md:w-1/3">
              <div className="relative w-64 h-64 mx-auto">
                <Image
                  src="data:image/jpeg;base64,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"
                  alt="Muhammad Huzaifa"
                  fill
                  className="rounded-lg object-cover shadow-lg"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <div className="prose prose-invert max-w-none text-center md:text-left">
                {/* Mobile description */}
                <p className="text-lg leading-relaxed md:hidden">
                  Full Stack Developer 💻 with a passion for crafting seamless user experiences and robust backend solutions. Let's build the future together! 🚀
                </p>
                {/* Desktop description */}
                <div className="hidden md:block">
                  <p className="text-xl mb-4">
                    🚀 <strong>Hey, I'm Muhammad Huzaifa!</strong>
                  </p>
                  <p className="mb-4">
                    A <strong>Full Stack Developer 💻</strong> with a knack for transforming complex problems into elegant solutions. With expertise in both front-end and back-end technologies, I specialize in creating applications that are as visually appealing as they are functional.
                  </p>
                  <p className="mb-4">
                    My journey in development has equipped me with a diverse skill set, allowing me to adapt and thrive in various project environments. I am committed to continuous learning and staying updated with the latest industry trends to deliver cutting-edge solutions.
                  </p>
                  <p className="mb-4">
                    When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and sharing knowledge with the developer community.
                  </p>
                  <p>
                    Let's <strong>connect and collaborate</strong> to build innovative solutions that make a difference! 🚀
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Timeline Section */}
          <div className="mb-20">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                Experience              </span>
            </h3>
            <div className="relative">
              {/* Vertical Line (only visible on larger screens) */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-500 to-pink-500 hidden md:block"></div>

              {/* Timeline Items */}
              <div className="space-y-8">
                {timelineData.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 relative`}
                  >
                    {/* Content */}
                    <div className="md:w-1/2 p-6 bg-gray-900/50 rounded-xl backdrop-blur-sm border border-gray-800">
                      <div className="flex flex-col md:flex-row items-center gap-4">
                        <div className="w-16 h-16 md:w-12 md:h-12 rounded-full bg-gray-800 flex items-center justify-center overflow-hidden mb-4 md:mb-0 mx-auto md:mx-0">
                          <Image
                            src={item.logo || "/placeholder.svg"}
                            alt={item.company}
                            width={56}
                            height={56}
                            className="rounded-full"
                          />
                        </div>
                        <div className="text-center md:text-left">
                          <h3 className="text-xl font-bold text-white">{item.role}</h3>
                          <h4 className="text-lg text-purple-400">{item.company}</h4>
                          <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400 mt-1">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">{item.period}</span>
                          </div>
                          <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm">{item.location}</span>
                          </div>
                          <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400">
                            <Building2 className="w-4 h-4" />
                            <span className="text-sm">{item.type}</span>
                          </div>
                        </div>
                      </div>
                      {item.skills.length > 0 && (
                        <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-4">
                          {item.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-300 border border-purple-500/20"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Timeline Point (hidden on mobile) */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full hidden md:block"></div>

                    {/* Timeline Connector (hidden on mobile) */}
                    {index < timelineData.length - 1 && (
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: "100%" }}
                        transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
                        className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500 hidden md:block"
                        style={{ top: "100%", height: "100px" }}
                      ></motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                Skills
              </span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.entries(skillsData).map(([category, skills]) => (
                <div key={category} className="p-6 bg-gray-900/50 rounded-xl backdrop-blur-sm border border-gray-800">
                  <h4 className="text-xl font-bold mb-4 text-purple-400 text-center md:text-left">{category}</h4>
                  {skills.map((skill) => (
                    <SkillBar key={skill.name} name={skill.name} proficiency={skill.proficiency} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function SkillBar({ name, proficiency }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-gray-300">{name}</span>
        <span className="text-gray-400">{proficiency}%</span>
      </div>
      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${proficiency}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
        />
      </div>
    </div>
  )
}

