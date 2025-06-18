"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { ExternalLink, Mail, Phone, MapPin, Github, Linkedin, Sun, Moon } from "lucide-react"

// Theme Toggle Component
function ThemeToggle({ isDark, onToggle }: { isDark: boolean; onToggle: () => void }) {
  return (
    <Button
      onClick={onToggle}
      variant="outline"
      size="sm"
      className={`fixed top-4 right-4 z-40 transition-all duration-300 ${
        isDark
          ? "bg-gray-800 border-gray-600 text-gray-200 hover:bg-gray-700"
          : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
      }`}
    >
      {isDark ? <Sun className="w-4 h-4 mr-2" /> : <Moon className="w-4 h-4 mr-2" />}
      {isDark ? "Light" : "Dark"}
    </Button>
  )
}

// Loading Animation Component
function LoadingAnimation({ isDark }: { isDark: boolean }) {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 transition-colors duration-300 ${
        isDark ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div className="relative">
        {/* Animated Y Symbol */}
        <div className="relative w-32 h-32">
          {/* Y Letter Animation */}
          <svg width="128" height="128" viewBox="0 0 128 128" className="absolute inset-0">
            {/* Left branch of Y */}
            <path
              d="M20 20 L64 64"
              stroke="#3b82f6"
              strokeWidth="6"
              strokeLinecap="round"
              fill="none"
              className="animate-pulse"
              style={{
                animation: "drawLine 2s ease-in-out infinite alternate",
              }}
            />
            {/* Right branch of Y */}
            <path
              d="M108 20 L64 64"
              stroke="#3b82f6"
              strokeWidth="6"
              strokeLinecap="round"
              fill="none"
              className="animate-pulse"
              style={{
                animation: "drawLine 2s ease-in-out infinite alternate",
                animationDelay: "0.5s",
              }}
            />
            {/* Stem of Y */}
            <path
              d="M64 64 L64 108"
              stroke="#3b82f6"
              strokeWidth="6"
              strokeLinecap="round"
              fill="none"
              className="animate-pulse"
              style={{
                animation: "drawLine 2s ease-in-out infinite alternate",
                animationDelay: "1s",
              }}
            />
          </svg>

          {/* Glowing effect */}
          {/* <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl animate-ping"></div> */}
        </div>

        {/* Loading text */}
        <div className="mt-8 text-center">
          
          <div className="flex justify-center space-x-1">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes drawLine {
          0% {
            stroke-dasharray: 0 100;
            opacity: 0.3;
          }
          100% {
            stroke-dasharray: 100 0;
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}

export default function YashSinghPortfolio() {
  const [isLoading, setIsLoading] = useState(true)
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Load theme preference from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "dark") {
      setIsDarkMode(true)
    }
  }, [])

  // Save theme preference to localStorage when changed
  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light")
  }, [isDarkMode])

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  if (isLoading) {
    return (
      <>
        <ThemeToggle isDark={isDarkMode} onToggle={toggleTheme} />
        <LoadingAnimation isDark={isDarkMode} />
      </>
    )
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      <ThemeToggle isDark={isDarkMode} onToggle={toggleTheme} />

      <div className="max-w-4xl mx-auto p-6">
        {/* Wikipedia-style header */}
        <div className={`border-b pb-4 mb-6 ${isDarkMode ? "border-gray-700" : "border-gray-300"}`}>
          <h1 className={`text-4xl font-serif mb-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}>Yash Singh</h1>
          <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
            Creating Human-Centric AI for Real-World Impact
          </p>
        </div>

        {/* Main content layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <section>
              <p className={`text-lg leading-relaxed mb-4 ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
                <strong className={isDarkMode ? "text-white" : "text-gray-900"}>Yash Singh</strong> is an Indian
                software engineer and artificial intelligence researcher currently pursuing a Bachelor of Engineering in
                Information Science and Engineering at B.M.S College of Engineering, Bengaluru. He is recognized for his
                contributions to AI-powered civic technology and emotion detection systems, with multiple hackathon
                victories and open-source contributions to the machine learning community.
              </p>
            </section>

            {/* Professional Experience */}
            <section>
              <h2
                className={`text-2xl font-serif border-b pb-2 mb-4 ${
                  isDarkMode ? "border-gray-700 text-white" : "border-gray-300 text-gray-900"
                }`}
              >
                Professional Experience
              </h2>
              <div className="space-y-4">
                <div
                  className={`p-4 rounded-lg border transition-colors ${
                    isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200 shadow-sm"
                  }`}
                >
                  <h3 className={`text-lg font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>AI Intern</h3>
                  <p className="text-blue-500 mb-2">Next Oar • May 2025</p>
                  <p className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                    As an AI Intern at Next Oar, I developed a multi-layered relevance framework on top of vector databases to improve semantic retrieval precision in RAG systems. This involved designing relevance scoring logic that combines dense and sparse embeddings for context-aware results. I also contributed to the architecture of MCP (Model Control Protocol) servers, enabling modular, scalable deployment of AI services across distributed environments.
                  </p>
                </div>
              </div>
            </section>

            {/* Education */}
            <section>
              <h2
                className={`text-2xl font-serif border-b pb-2 mb-4 ${
                  isDarkMode ? "border-gray-700 text-white" : "border-gray-300 text-gray-900"
                }`}
              >
                Education
              </h2>
              <div className="space-y-4">
                <div
                  className={`p-4 rounded-lg border transition-colors ${
                    isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200 shadow-sm"
                  }`}
                >
                  <h3 className={`text-lg font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                    Bachelor of Engineering
                  </h3>
                  <p className="text-blue-500">B.M.S College of Engineering</p>
                  <p className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                    Information Science and Engineering • Nov 2022 – Present
                  </p>
                  <p className="text-sm text-gray-500 font-semibold">GPA: 9.45/10.0</p>
                </div>
                <div
                  className={`p-4 rounded-lg border transition-colors ${
                    isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200 shadow-sm"
                  }`}
                >
                  <h3 className={`text-lg font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                    Higher Secondary Certificate
                  </h3>
                  <p className="text-blue-500">DAV Public School, CBSE</p>
                  <p className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>2019 – 2021</p>
                  <p className="text-sm text-gray-500 font-semibold">Percentage: 94.4%</p>
                </div>
                <div
                  className={`p-4 rounded-lg border transition-colors ${
                    isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200 shadow-sm"
                  }`}
                >
                  <h3 className={`text-lg font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                    Secondary School Certificate
                  </h3>
                  <p className="text-blue-500">De Nobili School, CISCE</p>
                  <p className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>2019</p>
                  <p className="text-sm text-gray-500 font-semibold">Percentage: 94%</p>
                </div>
              </div>
            </section>

            {/* Notable Projects */}
            <section>
              <h2
                className={`text-2xl font-serif border-b pb-2 mb-4 ${
                  isDarkMode ? "border-gray-700 text-white" : "border-gray-300 text-gray-900"
                }`}
              >
                Notable Projects
              </h2>
              <div className="space-y-6">
                <div
                  className={`p-6 rounded-lg border transition-all hover:border-blue-500 ${
                    isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200 shadow-sm hover:shadow-md"
                  }`}
                >
                  <h3
                    className={`text-lg font-semibold flex items-center gap-2 mb-3 ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    AI-Powered Civic Issue Mapper
                    <ExternalLink className="w-4 h-4 text-blue-500" />
                  </h3>
                  <p className={`text-sm mb-3 leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                    A comprehensive multilingual data ingestion pipeline for real-time social media scraping and civic
                    issue analysis. The system employs fine-tuned RoBERTa models for cross-lingual sentiment
                    classification and integrates voice-based emotion detection. Features geospatial visualization using
                    Folium with 2-level nested clustering (DBSCAN and K-Means) and a custom RAG pipeline for
                    contextualized administrative summaries.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {["Python", "RoBERTa", "DBSCAN", "K-Means", "RAG", "Folium"].map((tech) => (
                      <Badge
                          key={tech}
                          variant="secondary"
                          className={`text-xs ${
                            isDarkMode
                              ? "bg-indigo-700 text-white"
                              : "bg-indigo-100 text-indigo-800"
                          }`}
                        >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <a
                  href="https://vikasya-codehers.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-500 hover:text-blue-600 cursor-pointer underline"
                >
                  civicIssue.app
                </a>
                </div>

                <div
                  className={`p-6 rounded-lg border transition-all hover:border-blue-500 ${
                    isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200 shadow-sm hover:shadow-md"
                  }`}
                >
                  <h3
                    className={`text-lg font-semibold flex items-center gap-2 mb-3 ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    VibeSense – AI-Driven Emotion Detection
                    <ExternalLink className="w-4 h-4 text-blue-500" />
                  </h3>
                  <p className={`text-sm mb-3 leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                    An advanced emotion detection system utilizing custom LSTM networks trained on diverse Indian accent
                    datasets. Features intelligent voice assistance with context-aware responses, RAG framework
                    integration, and XTTS-based voice cloning. Built with Next.js and FastAPI, deployed on AWS with
                    reverse proxy and dynamic DNS.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {["LSTM", "Next.js", "FastAPI", "AWS", "XTTS", "RAG"].map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className={`text-xs ${
                          isDarkMode ? "bg-purple-900 text-purple-200" : "bg-purple-100 text-purple-800"
                        }`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <a
                  href="https://final-frontend-chi.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-500 hover:text-blue-600 cursor-pointer underline"
                >
                  vibesense.app
                </a>
                </div>

                <div
                  className={`p-6 rounded-lg border transition-all hover:border-blue-500 ${
                    isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200 shadow-sm hover:shadow-md"
                  }`}
                >
                  <h3
                    className={`text-lg font-semibold flex items-center gap-2 mb-3 ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Quizzer – Smart Quiz Platform
                    <ExternalLink className="w-4 h-4 text-blue-500" />
                  </h3>
                  <p className={`text-sm mb-3 leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                    A full-stack quiz system built with React and Flask REST API, featuring role-based dashboards, OTP
                    authentication, and academic integrity monitoring through tab-switch detection. Includes intelligent
                    question shuffling and dynamic leaderboards with CSV/PDF export capabilities.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {["React", "Flask", "OTP Auth", "REST API", "PDF Export"].map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className={`text-xs ${
                          isDarkMode ? "bg-green-900 text-green-200" : "bg-green-100 text-green-800"
                        }`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <a
                  href="https://quizzer.site/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-500 hover:text-blue-600 cursor-pointer underline"
                >
                  quizzer.site
                </a>
                </div>
              </div>
            </section>

            {/* Awards and Recognition */}
            <section>
              <h2
                className={`text-2xl font-serif border-b pb-2 mb-4 ${
                  isDarkMode ? "border-gray-700 text-white" : "border-gray-300 text-gray-900"
                }`}
              >
                Awards and Recognition
              </h2>
              <div
                className={`p-6 rounded-lg border ${
                  isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200 shadow-sm"
                }`}
              >
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-yellow-600">1st Place</strong> - AI Verse All-India Hackathon 2025
                      <span className={`block text-xs ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                        72-hour national AI challenge
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-yellow-600">1st Place</strong> - Impact 2.0 Hackathon by Augment AI 2025
                      <span className={`block text-xs ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                        24-hour social impact hackathon
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-yellow-600">1st Place</strong> - Rotech Hackathon by Rotract Club 2025
                      <span className={`block text-xs ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                        12-hour social impact hackathon
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-blue-600">Global Contributor</strong> - First and only contributor on
                      Kaggle to publish Indian Emotion Speech Dataset
                      <span className={`block text-xs ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                        Groundbreaking resource for emotion recognition
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-green-600">Finalist</strong> - Techathon Gen AI Hackathon 2024
                      <span className={`block text-xs ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                        Generative AI expertise showcase
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Profile Card */}
            <Card
              className={`transition-colors ${
                isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200 shadow-sm"
              }`}
            >
              <CardContent className="p-6">
  <div className="text-center mb-4">
    <div
      className={`w-32 h-32 mx-auto rounded-lg overflow-hidden border-2 ${
        isDarkMode ? "bg-gray-700 border-gray-600" : "bg-gray-100 border-gray-300"
      }`}
    >
      <img
        src="/yashpp.jpg" // Replace with your actual image path or URL
        alt="Yash Singh"
        className="w-full h-full object-cover"
      />
    </div>
    <h3 className={`font-semibold text-lg mt-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
      Yash Singh
    </h3>
    <p className="text-sm text-blue-500">AI Engineer & Researcher</p>
  </div>

  <Separator className={isDarkMode ? "bg-gray-700" : "bg-gray-200"} />

  <div className="space-y-3 text-sm mt-4">
    <div className={`flex items-center gap-2 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
      <MapPin className="w-4 h-4 text-blue-500" />
      <span>Bengaluru, India</span>
    </div>
    <div className={`flex items-center gap-2 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
      <Mail className="w-4 h-4 text-blue-500" />
      <span>er.yshsingh@gmail.com</span>
    </div>
    <div className={`flex items-center gap-2 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
      <Phone className="w-4 h-4 text-blue-500" />
      <span>+91 700 400 1927</span>
    </div>
    <div className={`flex items-center gap-2 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
      <Github className="w-4 h-4 text-blue-500" />
      <a
        href="https://github.com/include-yash"
        target="_blank"
        rel="noopener noreferrer"
        className={`${isDarkMode ? "text-gray-300" : "text-gray-600"} hover:text-blue-500 transition`}
      >
        yash-github
      </a>
    </div>
    <div className={`flex items-center gap-2 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
      <Linkedin className="w-4 h-4 text-blue-500" />
      <a
        href="https://www.linkedin.com/in/yash-singh-988aa525a/"
        target="_blank"
        rel="noopener noreferrer"
        className={`${isDarkMode ? "text-gray-300" : "text-gray-600"} hover:text-blue-500 transition`}
      >
        yash-linkedin
      </a>
    </div>
  </div>
</CardContent>

            </Card>

            {/* Technical Skills */}
            <Card
              className={`transition-colors ${
                isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200 shadow-sm"
              }`}
            >
              <CardHeader>
                <CardTitle className={`text-lg ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                  Technical Skills
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className={`font-semibold text-sm mb-2 ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
                    Programming Languages
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {["Java", "Python", "C++", "JavaScript", "SQL", "TypeScript"].map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className={`text-xs ${isDarkMode ? "bg-blue-900 text-blue-200" : "bg-blue-100 text-blue-800"}`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className={`font-semibold text-sm mb-2 ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
                    Web Technologies
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {["React", "Next.js", "Tailwind CSS", "Flask", "REST APIs", "FastAPI"].map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className={`text-xs ${
                          isDarkMode ? "bg-purple-900 text-purple-200" : "bg-purple-100 text-purple-800"
                        }`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className={`font-semibold text-sm mb-2 ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
                    Tools & Databases
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {["Git", "Docker", "MongoDB", "PostgreSQL", "Redis", "VS Code"].map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className={`text-xs ${
                          isDarkMode ? "bg-green-900 text-green-200" : "bg-green-100 text-green-800"
                        }`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className={`font-semibold text-sm mb-2 ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
                    AI/ML
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {["TensorFlow", "PyTorch", "Scikit-learn", "Wav2Vec2", "Transformers"].map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className={`text-xs ${
                          isDarkMode ? "bg-orange-900 text-orange-200" : "bg-orange-100 text-orange-800"
                        }`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Facts */}
            <Card
              className={`transition-colors ${
                isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200 shadow-sm"
              }`}
            >
              <CardHeader>
                <CardTitle className={`text-lg ${isDarkMode ? "text-white" : "text-gray-900"}`}>Quick Facts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className={`font-medium ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>Current Role:</span>
                  <span className="text-blue-500">AI Intern at Next Oar</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={`font-medium ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>Education:</span>
                  <span className={isDarkMode ? "text-gray-200" : "text-gray-700"}>B.E. Student</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={`font-medium ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>GPA:</span>
                  <span className="text-green-500 font-semibold">9.45/10.0</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={`font-medium ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                    Hackathon Wins:
                  </span>
                  <span className="text-yellow-600 font-semibold">3 First Places</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div
          className={`mt-12 pt-6 border-t text-xs ${
            isDarkMode ? "border-gray-700 text-gray-500" : "border-gray-300 text-gray-500"
          }`}
        >
          <p>
            This page was last edited on{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
            .
          </p>
          <p className="mt-2"></p>
        </div>
      </div>
    </div>
  )
}
