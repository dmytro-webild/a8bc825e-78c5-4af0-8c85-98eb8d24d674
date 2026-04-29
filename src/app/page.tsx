"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import { Award, Calendar, Smile, Star, Users, Wrench } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="mediumLarge"
        sizing="mediumSizeLargeTitles"
        background="fluid"
        cardStyle="outline"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="solid"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Services",
          id: "features",
        },
        {
          name: "Toys",
          id: "toys",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Castle Hill Bike & Toy"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplit
      background={{
        variant: "gradient-bars",
      }}
      title="Reliable Repairs, Endless Childhood Joy."
      description="Your neighborhood destination for expert bicycle and scooter repairs, alongside a curated selection of nostalgic toys and games."
      buttons={[
        {
          text: "Book Repair",
          href: "#contact",
        },
        {
          text: "Shop Toys",
          href: "#toys",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/mechanic-using-digital-tablet_1170-2461.jpg"
      imageAlt="Professional bike repair and shop service"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/portrait-smiling-mechanic_1170-2357.jpg",
          alt: "Portrait of smiling mechanic",
        },
        {
          src: "http://img.b2bpic.net/free-photo/mechanic-examining-bicycle-wheel_1170-2563.jpg",
          alt: "Mechanic examining a bicycle wheel",
        },
        {
          src: "http://img.b2bpic.net/free-photo/smiling-mechanic-standing-with-arms-crossed_1170-2587.jpg",
          alt: "Smiling mechanic standing with arms crossed",
        },
        {
          src: "http://img.b2bpic.net/free-photo/mechanic-filling-air-into-bicycle-tire-with-air-pump_1170-2581.jpg",
          alt: "Mechanic filling air into bicycle tire with air pump",
        },
        {
          src: "http://img.b2bpic.net/free-photo/mechanic-using-laptop_1170-2595.jpg",
          alt: "Mechanic using laptop",
        },
      ]}
      avatarText="Our expert team"
      marqueeItems={[
        {
          type: "text",
          text: "Fast Turnaround",
        },
        {
          type: "text",
          text: "Quality Parts",
        },
        {
          type: "text",
          text: "Family Owned",
        },
        {
          type: "text",
          text: "Community Focused",
        },
        {
          type: "text",
          text: "Bronx Pride",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <AboutMetric
      useInvertedBackground={false}
      title="Serving the Bronx Since Forever"
      metrics={[
        {
          icon: Wrench,
          label: "Bikes Repaired",
          value: "15,000+",
        },
        {
          icon: Smile,
          label: "Happy Customers",
          value: "5,000+",
        },
        {
          icon: Award,
          label: "Years Active",
          value: "20+",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardEight
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          title: "Bicycle Maintenance",
          description: "Full-service tuning, brake checks, and flat repairs for all bike types.",
          imageSrc: "http://img.b2bpic.net/free-photo/man-repairing-wheel-bicycle-workshop_23-2147892350.jpg",
          imageAlt: "Bicycle tire repair tool",
        },
        {
          title: "Scooter Support",
          description: "Specialized maintenance and air pressure checks for modern scooters.",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-woman-adjusting-roller-blades_23-2148382801.jpg",
          imageAlt: "Scooter air pressure check",
        },
        {
          title: "E-Bike Diagnostics",
          description: "Expert electrical troubleshooting for throttles, wires, and motors.",
          imageSrc: "http://img.b2bpic.net/free-photo/using-screwdriver-tighten-cable_23-2148254105.jpg",
          imageAlt: "Electric scooter motor repair",
        },
      ]}
      title="Expert Repair Services"
      description="From flats to motor diagnostics, our skilled team keeps you moving safely on the streets of Bronx."
    />
  </div>

  <div id="toys" data-section="toys">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="two-columns-alternating-heights"
      useInvertedBackground={false}
      products={[
        {
          id: "toy-1",
          name: "Classic Strategy Games",
          price: "$29.99",
          imageSrc: "http://img.b2bpic.net/free-photo/realistic-scene-neighborhood-yard-sale-with-miscellaneous-items_23-2151238331.jpg",
          imageAlt: "vintage board game collection",
        },
        {
          id: "toy-2",
          name: "Collectible Trading Cards",
          price: "$5.99",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-woman-carrying-box-with-goods_23-2150323400.jpg",
          imageAlt: "trading card game display",
        },
        {
          id: "toy-3",
          name: "Action Figures",
          price: "$19.99",
          imageSrc: "http://img.b2bpic.net/free-photo/set-kid-toys-white-shelf_53876-144954.jpg",
          imageAlt: "action figures collector toys",
        },
        {
          id: "toy-4",
          name: "Family Board Games",
          price: "$34.99",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-beautiful-rpg-still-life-items_23-2149282484.jpg",
          imageAlt: "board games stack store",
        },
        {
          id: "toy-5",
          name: "Building Block Sets",
          price: "$45.00",
          imageSrc: "http://img.b2bpic.net/free-photo/charming-boy-playing-kindergarten_23-2147664164.jpg",
          imageAlt: "educational toy store items",
        },
        {
          id: "toy-6",
          name: "Traditional Wooden Toys",
          price: "$24.99",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-cute-plush-toy_23-2150312317.jpg",
          imageAlt: "classic wooden toys selection",
        },
      ]}
      title="Nostalgic Toys & Games"
      description="Rediscover your favorite childhood games. From classic board games to modern favorites, we have something for every generation."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Dioris Rosario",
          handle: "@dioris",
          testimonial: "Makes me so happy they are back. I went there almost daily as a kid. Always friendly service.",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-mechanic-standing-with-arms-crossed_1170-2380.jpg",
        },
        {
          id: "2",
          name: "The Barber",
          handle: "@barber",
          testimonial: "Great dudes working there, very helpful staff behind the counter.",
          imageSrc: "http://img.b2bpic.net/free-photo/people-drinking-coffee-spacious-cafeteria_23-2150424007.jpg",
        },
        {
          id: "3",
          name: "Kenneth Mercado",
          handle: "@kenneth",
          testimonial: "Had two great experiences today with my e-bike and scooter. Highly recommended for electrical issues.",
          imageSrc: "http://img.b2bpic.net/free-photo/old-zero-waste-shop-owner-does-marketing_482257-76263.jpg",
        },
        {
          id: "4",
          name: "Anonymous",
          handle: "@bronxlocal",
          testimonial: "Prices are affordable and service is stellar. Best spot in the area.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-indigenous-person-integrating-society_23-2151102430.jpg",
        },
        {
          id: "5",
          name: "Local Mom",
          handle: "@toyfan",
          testimonial: "My kids love the toy selection. It's so rare to find a store like this in the city.",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-queer-students-outdoors_23-2150405234.jpg",
        },
      ]}
      title="Community Love"
      description="What our neighbors are saying about us."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "4.9",
          title: "Star Rating",
          description: "Average across 15+ reviews",
          icon: Star,
        },
        {
          id: "m2",
          value: "7",
          title: "Days Open",
          description: "Ready to help you daily",
          icon: Calendar,
        },
        {
          id: "m3",
          value: "2",
          title: "Friendly Employees",
          description: "Always ready to provide stellar service",
          icon: Users,
        },
      ]}
      title="Shop Stats"
      description="Evidence of our commitment to quality service."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "Do you repair electric scooters?",
          content: "Yes, we specialize in both bicycle and electric scooter diagnostics and repairs.",
        },
        {
          id: "q2",
          title: "Do you buy or trade toys?",
          content: "We offer a great selection of new and nostalgic toys. Please visit us to discuss trade-ins.",
        },
        {
          id: "q3",
          title: "What are your operating hours?",
          content: "We are open daily starting at 10 AM. Check our site for specific seasonal adjustments.",
        },
      ]}
      sideTitle="Common Questions"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Contact Us"
      title="Ready to get back on the road?"
      description="Visit us at 1321 Castle Hill Ave, Bronx, or call us for service inquiries at (718) 863-7221."
      buttons={[
        {
          text: "Call Now",
          href: "tel:+17188637221",
        },
        {
          text: "Get Directions",
          href: "https://maps.google.com/?q=1321+Castle+Hill+Ave+Bronx+NY",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "Services",
              href: "#features",
            },
            {
              label: "Toy Collection",
              href: "#toys",
            },
          ],
        },
        {
          items: [
            {
              label: "Reviews",
              href: "#testimonials",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
        {
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
      ]}
      logoText="Castle Hill Bike & Toy"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
