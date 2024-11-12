
 import React, { useState, useEffect } from 'react';
import { AlertCircle, Mail, Phone, MapPin, Camera, Menu, X, Shield, ChevronRight, Star, Trophy, Book, Users, Calendar } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

Prevent right-click
  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
    };
    document.addEventListener('contextmenu', handleContextMenu);
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  // Disable developer tools shortcuts
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (
        (e.ctrlKey && e.shiftKey && e.key === 'I') ||
        (e.ctrlKey && e.shiftKey && e.key === 'J') ||
        (e.key === 'F12')
      ) {
        e.preventDefault();
      }
    };
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-red-50 flex items-center justify-center">
        <div className="space-y-8 animate-pulse">
          <div className="flex items-center justify-center">
            <div className="w-16 h-16 border-4 border-red-700 border-t-yellow-400 rounded-full animate-spin"></div>
          </div>
          <div className="text-center space-y-3">
            <div className="h-4 w-48 bg-red-200 rounded mx-auto"></div>
            <div className="h-4 w-32 bg-red-200 rounded mx-auto"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="relative h-96 animate-fade-in">
        <img
          src="/api/placeholder/1200/600"
          alt="School building"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/90 to-red-800/75 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl text-white space-y-6 opacity-0 animate-slide-up delay-200">
              <div className="flex items-center gap-2">
                <div className="h-1 w-12 bg-yellow-400"></div>
                <span className="text-yellow-400 font-semibold">Welcome to</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in delay-400">Homagama Maha Vidyalaya</h1>
              <p className="text-xl text-gray-200 animate-fade-in delay-600">Nurturing Tomorrow's Leaders Through Excellence in Education</p>
              <button className="bg-yellow-400 text-red-900 px-8 py-3 rounded-full font-bold hover:bg-yellow-300 transition-colors mt-4 flex items-center gap-2 animate-bounce">
                Learn More <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-red-900 to-transparent h-32"></div>
      </div>

      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Trophy, title: "Academic Excellence", count: "90%", desc: "Pass Rate" },
              { icon: Users, title: "Expert Teachers", count: "50+", desc: "Dedicated Staff" },
              { icon: Book, title: "Course Variety", count: "30+", desc: "Subjects" },
              { icon: Star, title: "Achievement", count: "100+", desc: "Awards Won" }
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-red-50 to-yellow-50 p-6 rounded-xl border border-red-100 hover:shadow-lg transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="bg-red-700 text-yellow-400 p-3 rounded-lg w-fit group-hover:scale-110 transition-transform">
                  <item.icon size={24} className="animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-red-900 mt-4">{item.count}</h3>
                <p className="text-red-700 font-semibold">{item.title}</p>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-20">
            <div className="text-center mb-12 animate-fade-in">
              <span className="text-yellow-500 font-semibold">WHY CHOOSE US</span>
              <h2 className="text-3xl font-bold text-red-900 mt-2">Excellence in Every Aspect</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Academic Excellence",
                  desc: "Comprehensive curriculum with focus on both academic and personal growth",
                  bgColor: "bg-gradient-to-br from-red-100 to-red-50"
                },
                {
                  title: "Experienced Faculty",
                  desc: "Highly qualified teachers dedicated to student success",
                  bgColor: "bg-gradient-to-br from-yellow-100 to-yellow-50"
                },
                {
                  title: "Modern Facilities",
                  desc: "State-of-the-art infrastructure for optimal learning",
                  bgColor: "bg-gradient-to-br from-red-100 to-red-50"
                }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className={`${item.bgColor} p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <h3 className="text-xl font-bold text-red-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
