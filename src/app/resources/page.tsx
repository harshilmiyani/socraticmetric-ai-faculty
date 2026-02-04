"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Fancybox from "@/components/ui/Fancybox";
import { Button } from "@/components/ui/Button";
import { Play, FileText, Download, ArrowRight, Video, Book } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ResourcesPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const resources = [
    {
      id: "tutorial-video",
      type: "video",
      title: "Complete Platform Tutorial",
      description: "A comprehensive walkthrough of the SocraticMetric platform for students and faculty. Learn how to record answers, review feedback, and submit assignments.",
      src: "https://drive.google.com/file/d/1GRS5ZKMtdf8jd1ldQO4XcPo7buWkYRiP/preview",
      thumbnail: "/img/logo.png", // Using logo as placeholder since we don't have a specific thumb
      duration: "Video Walkthrough",
      category: "Tutorials"
    },
    {
      id: "student-guide",
      type: "pdf",
      title: "Student User Guide",
      description: "Detailed documentation covering account setup, assessment best practices, and troubleshooting tips for the oral assessment process.",
      src: "/img/resources/docs/SSM Student Guide.pdf",
      thumbnail: "/img/logo.png",
      pages: "PDF Document",
      category: "Documentation"
    }
  ];

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900 overflow-x-hidden">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-24 overflow-hidden bg-white">
           <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
           <div className="absolute top-0 right-0 w-[50%] h-[50%] rounded-full bg-indigo-100/40 blur-[100px] animate-pulse"></div>
           <div className="absolute bottom-0 left-0 w-[50%] h-[50%] rounded-full bg-blue-100/40 blur-[100px]"></div>

          <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <div className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-sm text-indigo-700 mb-6">
                <Book className="h-4 w-4 mr-2" />
                Knowledge Base
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 leading-tight mb-6">
                Resource <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Library</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Everything you need to master SocraticMetric. Explore our video tutorials, guides, and documentation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-6 md:px-12">
            
            <Fancybox
              options={{
                Carousel: {
                  infinite: false,
                },
              }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {resources.map((resource, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-xl border border-slate-100 overflow-hidden transition-all duration-300"
                >
                  {/* Media Preview Area */}
                  <a 
                    href={resource.src} 
                    data-fancybox="gallery"
                    data-caption={resource.title}
                    data-type={resource.type === 'video' ? 'iframe' : undefined}
                    className="relative block aspect-video w-full overflow-hidden bg-slate-900"
                  >
                    {/* Placeholder Background (Since we don't have real thumbnails yet) */}
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 group-hover:scale-105 transition-transform duration-500">
                         {resource.type === 'video' ? (
                             <Video className="h-12 w-12 text-slate-700 opacity-50" />
                         ) : (
                             <FileText className="h-12 w-12 text-slate-700 opacity-50" />
                         )}
                    </div>
                    
                    {/* Overlay Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-16 w-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300">
                        {resource.type === 'video' ? (
                          <Play className="h-6 w-6 text-white fill-current ml-1" />
                        ) : (
                          <FileText className="h-6 w-6 text-white" />
                        )}
                      </div>
                    </div>

                    {/* Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-bold border border-white/10 uppercase tracking-wide">
                        {resource.category}
                      </span>
                    </div>
                  </a>

                  {/* Content */}
                  <div className="flex-1 p-6 flex flex-col">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                        {resource.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                        {resource.description}
                      </p>
                    </div>

                    <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-100">
                      <span className="text-xs font-semibold text-slate-400 flex items-center gap-1.5">
                        {resource.type === 'video' ? <Video className="h-3 w-3" /> : <FileText className="h-3 w-3" />}
                        {resource.type === 'video' ? resource.duration : resource.pages}
                      </span>
                      
                      <a 
                        href={resource.src} 
                        download={resource.type === 'pdf'} // Only download if PDF, otherwise let fancybox handle it
                        className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 flex items-center gap-1"
                        onClick={(e) => {
                            if (resource.type === 'video') {
                                e.preventDefault();
                                // Trigger fancybox programmatically if needed, or let the wrapping <a> handle it
                            }
                        }}
                      >
                         {resource.type === 'pdf' ? 'Download' : 'Watch Now'}
                         <ArrowRight className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </Fancybox>
          </div>
        </section>

        {/* Support CTA */}
        <section className="py-24 bg-slate-900 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-5"></div>
             <div className="absolute bottom-0 right-0 w-[50%] h-[50%] rounded-full bg-indigo-500/20 blur-[120px]"></div>
          </div>
          <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
             <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
               Need more help?
             </h2>
             <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-10">
               Our support team is available 24/7 to assist you with any technical questions or platform training.
             </p>
             <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="rounded-full bg-white text-slate-900 hover:bg-indigo-50">
                  Contact Support
                </Button>
                <Button variant="outline" size="lg" className="rounded-full border-slate-700 text-white hover:bg-slate-800 hover:text-white hover:border-slate-600">
                  Read FAQs
                </Button>
             </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
