"use client";

import {
  CheckCircle2,
  Twitter,
  Linkedin,
  Facebook,
  Github,
  Menu,
  X,
  Users,
  Cpu,
  Calendar,
  SunMedium,
  BarChart3,
  Settings,
} from "lucide-react";
import { useState } from "react";
import "./LandingPage.css";
import backgroundImage from "./images/background.png";
import background2Image from "./images/background2.webp";
import logoImage from "./images/logo.png";
import dashboardImage from "./images/dashboard.png";
import deviceImage from "./images/device.png";
import solarPanelImage from "./images/solarpanel.png";
import usageImage from "./images/usage.png";

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="landing-page">
      {/* Header */}
      <header className="header">
        <div className="container header-container">
          <div className="logo-container">
            <a href="/" className="logo-link">
              <img src={logoImage} alt="HomeSync Logo" className="logo-icon" />

              <span className="logo-text">HomeSync</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <a href="#features" className="nav-link">
              Features
            </a>
            <a href="#how-it-works" className="nav-link">
              How It Works
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </nav>

          <div className="desktop-actions">
            <a
              href="https://home-sync-pi.vercel.app/signin"
              className="login-link"
            >
              Log in
            </a>
            <a
              href="https://home-sync-pi.vercel.app/register-acc"
              className="button tertiary-button"
            >
              Sign Up
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="menu-icon" />
            ) : (
              <Menu className="menu-icon" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="mobile-nav-container">
            <nav className="mobile-nav">
              <a
                href="#features"
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </a>
              <a
                href="#contact"
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              <div className="mobile-actions">
                <a
                  href="https://home-sync-pi.vercel.app/"
                  className="mobile-login-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Log in
                </a>
                <a
                  href="https://home-sync-pi.vercel.app/"
                  className="button tertiary-button"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign Up
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section
          className="hero-section"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="container">
            <div className="hero-grid">
              <div className="hero-content">
                <div className="hero-text">
                  <h1 className="hero-title">
                    Control your smart home with HomeSync
                  </h1>
                  <p className="hero-description">
                    Manage all your IoT devices, customize schedules and
                    optimize energy usage from one intuitive dashboard.
                  </p>
                </div>
                <div className="hero-buttons">
                  <a
                    href="https://home-sync-pi.vercel.app/"
                    className="button tertiary-button button-lg"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="features-section">
          <div className="container">
            <div className="section-header">
              <span className="badge primary-badge">Features</span>
              <h2 className="section-title-feature">
                Everything you need for your smart home
              </h2>
              <p className="section-description-feature">
                HomeSync provides a complete solution for managing your smart
                home ecosystem.
              </p>
            </div>
            <div className="features-grid">
              <div className="feature-card">
                <Users className="feature-icon" />
                <h3 className="feature-title">Role-Based Access Control</h3>
                <p className="feature-description">
                  Separate home-owner and home-dweller permissions for proper
                  access management.
                </p>
              </div>
              <div className="feature-card">
                <Cpu className="feature-icon" />
                <h3 className="feature-title">Device Management</h3>
                <p className="feature-description">
                  Easily add and control all your smart devices from a single
                  dashboard.
                </p>
              </div>
              <div className="feature-card">
                <Calendar className="feature-icon" />
                <h3 className="feature-title">Custom Scheduling</h3>
                <p className="feature-description">
                  Create personalized schedules for each device to automate your
                  home.
                </p>
              </div>
              <div className="feature-card">
                <SunMedium className="feature-icon" />
                <h3 className="feature-title">Solar Integration</h3>
                <p className="feature-description">
                  Seamlessly integrate and optimize solar energy usage
                  throughout your home.
                </p>
              </div>
              <div className="feature-card">
                <BarChart3 className="feature-icon" />
                <h3 className="feature-title">Energy Analytics</h3>
                <p className="feature-description">
                  Monitor and analyze your energy usage with comprehensive
                  charts and insights.
                </p>
              </div>
              <div className="feature-card">
                <Settings className="feature-icon" />
                <h3 className="feature-title">Intelligent Automation</h3>
                <p className="feature-description">
                  Integrate with built-in sensors to automate devices for a
                  truly smart experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="how-it-works-section">
          <div className="container">
            <div className="section-header">
              <span className="badge primary-badge">How It Works</span>
              <h2 className="section-title">New to Smart Home control?</h2>
              <p className="section-description">
                Take control of your home with ease. Here is a guide on how to
                set up your smart home and bring everyone on board!
              </p>
            </div>
            <div className="how-it-works-grid">
              <div className="energy-image-container">
                <img
                  src={dashboardImage}
                  width={220}
                  height={100}
                  alt="Room Dashboard"
                  className="energy-image"
                />
                <img
                  src={deviceImage}
                  width={220}
                  height={100}
                  alt="Room Dashboard"
                  className="energy-image"
                />
              </div>
              <div className="steps-container">
                <ol className="steps-list">
                  <li className="step-item">
                    <div className="step-number">1</div>
                    <div className="step-content">
                      <h3 className="step-title">Set up your Account</h3>
                      <p className="step-description">
                        Create a Home-owner account using your email and log in
                        to your dashboard.
                      </p>
                    </div>
                  </li>
                  <li className="step-item">
                    <div className="step-number">2</div>
                    <div className="step-content">
                      <h3 className="step-title">Create Room</h3>
                      <p className="step-description">
                        Organize your home by setting up rooms to easily manage
                        connected devices.
                      </p>
                    </div>
                  </li>
                  <li className="step-item">
                    <div className="step-number">3</div>
                    <div className="step-content">
                      <h3 className="step-title">Add Devices</h3>
                      <p className="step-description">
                        Connect smart devices to your home system and assign
                        them to specific rooms.
                      </p>
                    </div>
                  </li>
                  <li className="step-item">
                    <div className="step-number">4</div>
                    <div className="step-content">
                      <h3 className="step-title">Automate & Schedule</h3>
                      <p className="step-description">
                        Create schedules and configure automation settings to
                        optimize convenience and efficiency.
                      </p>
                    </div>
                  </li>
                  <li className="step-item">
                    <div className="step-number">5</div>
                    <div className="step-content">
                      <h3 className="step-title">Monitor & Optimize</h3>
                      <p className="step-description">
                        Easily monitor the status and activity of your connected
                        devices in real-time.
                      </p>
                    </div>
                  </li>
                  <li className="step-item">
                    <div className="step-number">6</div>
                    <div className="step-content">
                      <h3 className="step-title">Invite Home Members</h3>
                      <p className="step-description">
                        Share access by sending an invite code via email from
                        your profile settings.
                      </p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Energy Management Section */}
        <section className="energy-section">
          <div className="container">
            <div className="energy-grid">
              <div className="energy-content">
                <div className="energy-section-header">
                  <span className="badge primary-badge">Energy Management</span>
                  <h2 className="section-title">
                    Optimize your home's energy consumption
                  </h2>
                  <p className="section-description">
                    HomeSync provides powerful tools to monitor, analyze, and
                    optimize your home's energy usage. Connect your solar panels
                    and see real-time integration with your smart devices.
                  </p>
                </div>
                <ul className="energy-features">
                  <li className="energy-feature-item">
                    <CheckCircle2 className="check-icon" />
                    <span className="bold-text">
                      Real-time energy consumption monitoring
                    </span>
                  </li>
                  <li className="energy-feature-item">
                    <CheckCircle2 className="check-icon" />
                    <span className="bold-text">
                      Solar energy integration and optimization
                    </span>
                  </li>
                  <li className="energy-feature-item">
                    <CheckCircle2 className="check-icon" />
                    <span className="bold-text">
                      Detailed analytics and usage patterns
                    </span>
                  </li>
                  <li className="energy-feature-item">
                    <CheckCircle2 className="check-icon" />
                    <span className="bold-text">
                      Download energy usage report
                    </span>
                  </li>
                </ul>
              </div>
              <div className="energy-image-container">
                <img
                  src={solarPanelImage}
                  width={220}
                  height={100}
                  alt="Solar Panel Dashboard"
                  className="energy-image"
                />
                <img
                  src={usageImage}
                  width={220}
                  height={100}
                  alt="Energy Usage Dashboard"
                  className="energy-image"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section
          id="contact"
          className="cta-section"
          style={{ backgroundImage: `url(${background2Image})` }}
        >
          <div className="container">
            <div className="hero-content">
              <h2 className="hero-title">Ready to transform your home?</h2>
              <p className="hero-description">
                Join thousands of smart homeowners who've already upgraded their
                living experience with HomeSync.
              </p>
              <div className="hero-buttons">
                <a
                  href="https://home-sync-pi.vercel.app/"
                  className="button tertiary-button button-lg"
                >
                  Get Started Now
                </a>
                <a className="button outline-button button-lg">
                  Contact Support
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-column">
              <a href="/" className="logo-link">
                <img
                  src={logoImage}
                  alt="HomeSync Logo"
                  className="logo-icon"
                />
                <span className="logo-text">HomeSync</span>
              </a>
              <p className="footer-description">
                The complete solution for managing your smart home ecosystem.
              </p>
              <div className="social-links">
                <a href="#" className="social-link">
                  <Twitter className="social-icon" />
                  <span className="sr-only">Twitter</span>
                </a>
                <a href="#" className="social-link">
                  <Linkedin className="social-icon" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a href="#" className="social-link">
                  <Facebook className="social-icon" />
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="#" className="social-link">
                  <Github className="social-icon" />
                  <span className="sr-only">GitHub</span>
                </a>
              </div>
            </div>
            <div className="footer-column">
              <h3 className="footer-heading">Product</h3>
              <ul className="footer-links">
                <li>
                  <a href="#" className="footer-link">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Energy Management
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Solar Integration
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h3 className="footer-heading">Resources</h3>
              <ul className="footer-links">
                <li>
                  <a href="#" className="footer-link">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Guides
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Support
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    API
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h3 className="footer-heading">Company</h3>
              <ul className="footer-links">
                <li>
                  <a href="#" className="footer-link">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="copyright">
              &copy; {new Date().getFullYear()} HomeSync. All rights reserved.
            </p>
            <div className="legal-links">
              <a href="#" className="legal-link">
                Privacy Policy
              </a>
              <a href="#" className="legal-link">
                Terms of Service
              </a>
              <a href="#" className="legal-link">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
