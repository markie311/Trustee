"use client"

import { useState, useRef, useEffect } from "react"
import { Menu, X, Search, ShoppingCart, User, ChevronDown, Package, Zap, Home, Book, Dumbbell, Shirt } from "lucide-react"

import '../../styles/landingpage/header.scss'

export default function Header() {
  const [showCatalog, setShowCatalog] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchFocused, setSearchFocused] = useState(false)
  const dropdownRef = useRef(null)

  const catalogItems = [
   // { name: "Electronics", icon: <Zap size={18} /> },
   // { name: "Fashion", icon: <Shirt size={18} /> },
    { name: "Catalog", icon: <Book size={18} /> },
    { name: "Sellers", icon: <Home size={18} /> },
   // { name: "Sports", icon: <Dumbbell size={18} /> },
  ]

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowCatalog(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [mobileMenuOpen])

  return (
    <>
      <header className="header-enhanced">
        <div className="header-content">
          {/* Logo */}
          <div className="logo-container">
            <Package className="logo-icon" size={28} />
            <span className="logo-text">Trustee</span>
          </div>

          {/* Desktop Navigation */}
          <div className="desktop-nav">
            {/* Catalog Dropdown */}
            <div className="catalog-dropdown" ref={dropdownRef}>
              <button
                className={`catalog-btn ${showCatalog ? "active" : ""}`}
                onClick={() => setShowCatalog(!showCatalog)}
              >
                <span>Catalog</span>
                <ChevronDown
                  size={18}
                  className={`chevron ${showCatalog ? "rotate" : ""}`}
                />
              </button>

              <div className={`dropdown-menu ${showCatalog ? "show" : ""}`}>
                {catalogItems.map((item, idx) => (
                  <button
                    key={idx}
                    className="dropdown-item"
                    onClick={() => {
                      console.log("Selected:", item.name)
                      setShowCatalog(false)
                    }}
                  >
                    <span className="item-icon">{item.icon}</span>
                    <span>{item.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Search Bar */}
            <div className={`search-container ${searchFocused ? "focused" : ""}`}>
              <Search className="search-icon" size={20} />
              <input
                type="text"
                placeholder="Search products..."
                className="search-input"
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
              />
            </div>

            {/* Action Buttons */}
            <div className="action-buttons">
              <button className="icon-btn" aria-label="User account">
                <User size={20} />
              </button>
              <button className="icon-btn cart-btn" aria-label="Shopping cart">
                <ShoppingCart size={20} />
                <span className="cart-badge">3</span>
              </button>
              <button className="primary-btn">
                Sign In
              </button>
               <button className="primary-btn">
                Sell Now
              </button>
            </div>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="hamburger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-overlay ${mobileMenuOpen ? "show" : ""}`}>
        <div className={`mobile-menu ${mobileMenuOpen ? "show" : ""}`}>

          <p onClick={()=> {
            setMobileMenuOpen(!mobileMenuOpen)
          }} style={{userSelect: 'none'}}>X</p>
          {/* Search in Mobile */}
          <div className="mobile-search">
            <Search className="search-icon" size={20} />
            <input
              type="text"
              placeholder="Search products..."
              className="search-input"
            />
          </div>

          {/* Catalog Items */}
          <div className="mobile-section">
            <h3 className="section-title">Categories</h3>
            {catalogItems.map((item, idx) => (
              <button
                key={idx}
                className="mobile-item"
                onClick={() => {
                  console.log("Selected:", item.name)
                  setMobileMenuOpen(false)
                }}
              >
                <span className="item-icon">{item.icon}</span>
                <span>{item.name}</span>
              </button>
            ))}
          </div>

          {/* Mobile Actions */}
          <div className="mobile-actions">
            <button className="mobile-action-btn">
              <User size={20} />
              <span>My Account</span>
            </button>
            <button className="mobile-action-btn">
              <ShoppingCart size={20} />
              <span>Cart (3)</span>
            </button>
            <button className="mobile-primary-btn">
              Sign In / Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  )
}