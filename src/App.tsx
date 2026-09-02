import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { UnitShowcase } from './components/UnitShowcase';
import { CommunitySection } from './components/CommunitySection';
import { FacilitiesShowcase } from './components/FacilitiesShowcase';
import { TestimonialSlider } from './components/TestimonialSlider';
import { Footer } from './components/Footer';
import { UnitInfoModal } from './components/UnitInfoModal';
import { RegistrationModal } from './components/RegistrationModal';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { EducationalUnit } from './types';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function App() {
  const [selectedUnit, setSelectedUnit] = useState<EducationalUnit | null>(null);
  const [isRegisterOpen, setIsRegisterOpen] = useState<boolean>(false);

  // Initialize Lenis Smooth Scrolling and GSAP ScrollTrigger
  useEffect(() => {
    // 1. Initialize Lenis for smooth buttery inertial scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    // 2. Setup GSAP ScrollTrigger Staggered Fade-in Animations
    const ctx = gsap.context(() => {
      // Animate Section Headers
      gsap.utils.toArray<HTMLElement>('section h2').forEach((heading) => {
        gsap.fromTo(
          heading,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: heading,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // Animate Educational Unit Cards
      gsap.utils.toArray<HTMLElement>('[id^="unit-"]').forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 45, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // Animate Community Section Cards
      gsap.fromTo(
        '#komunitas-majelis, #komunitas-pemuda',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '#komunitas',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Animate Facility cards
      gsap.utils.toArray<HTMLElement>('#fasilitas .group').forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            delay: index * 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: '#fasilitas',
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    });

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      ctx.revert();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#F7F7F2] text-stone-800 font-sans selection:bg-[#C5A059] selection:text-white">
      {/* 1. Sticky Glassmorphism Header */}
      <Header onOpenRegister={() => setIsRegisterOpen(true)} />

      {/* Main Content Areas */}
      <main>
        {/* 2. Hero Section with Ken Burns and WhatsApp Action */}
        <Hero onOpenRegister={() => setIsRegisterOpen(true)} />

        {/* 3. Unit Pendidikan Grid Showcase */}
        <UnitShowcase
          onSelectUnit={(unit) => setSelectedUnit(unit)}
          onOpenRegister={() => setIsRegisterOpen(true)}
        />

        {/* 5. Community Section: Majelis Taklim & Youth Kajian */}
        <CommunitySection onOpenRegister={() => setIsRegisterOpen(true)} />

        {/* 6. Facilities Showcase with AC highlights */}
        <FacilitiesShowcase />

        {/* 7. Testimonial Slider */}
        <TestimonialSlider />
      </main>

      {/* 8. Final CTA & Footer */}
      <Footer onOpenRegister={() => setIsRegisterOpen(true)} />

      {/* Floating WhatsApp Quick Action Button */}
      <WhatsAppFloat />

      {/* Interactive Modals */}
      <UnitInfoModal
        unit={selectedUnit}
        onClose={() => setSelectedUnit(null)}
        onOpenRegister={() => {
          setSelectedUnit(null);
          setIsRegisterOpen(true);
        }}
      />

      <RegistrationModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
      />
    </div>
  );
}
