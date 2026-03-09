"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import Fancybox from "@/components/ui/Fancybox";

export function DemoVideo() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <Fancybox className="w-full">
          <a 
            href="https://drive.google.com/file/d/1GRS5ZKMtdf8jd1ldQO4XcPo7buWkYRiP/preview" 
            data-fancybox 
            data-type="iframe"
            className="relative group block w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-sm border border-slate-100 bg-blue-50/50 aspect-video flex items-center justify-center"
          >
            <div className="text-center p-8">
               <p className="text-slate-400 font-medium mb-4">[Platform UI screenshot or animated demo preview]</p>
               <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-white shadow-md text-blue-600 group-hover:scale-110 transition-transform">
                  <Play className="h-6 w-6 fill-current ml-1" />
               </div>
            </div>
          </a>
        </Fancybox>
      </div>
    </section>
  );
}
