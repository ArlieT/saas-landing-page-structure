"use client";
import { useState } from "react";

export default function TailwindExamples() {
  const [activeTab, setActiveTab] = useState("layout");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const tabs = [
    { id: "layout", label: "Layout" },
    { id: "typography", label: "Typography" },
    { id: "states", label: "Interactive States" },
    { id: "spacing", label: "Spacing & Sizing" },
    { id: "colors", label: "Colors & Effects" },
    { id: "animations", label: "Animations" },
    { id: "responsive", label: "Responsive" },
    { id: "forms", label: "Forms" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header with responsive navigation */}
      <header className="bg-gradient-to-r from-purple-600 to-blue-600 p-4 shadow-lg sticky top-0 z-50">
        <nav className="container mx-auto">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Tailwind Examples</h1>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md hover:bg-white/10"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <span
                  className={`block h-0.5 bg-white transition-transform ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
                ></span>
                <span
                  className={`block h-0.5 bg-white transition-opacity ${isMenuOpen ? "opacity-0" : ""}`}
                ></span>
                <span
                  className={`block h-0.5 bg-white transition-transform ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
                ></span>
              </div>
            </button>

            {/* Desktop navigation */}
            <div className="hidden md:flex space-x-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 py-2 rounded-md transition-colors ${
                    activeTab === tab.id
                      ? "bg-white/20 text-white"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile navigation */}
          <div className={`md:hidden mt-4 ${isMenuOpen ? "block" : "hidden"}`}>
            <div className="flex flex-col space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setIsMenuOpen(false);
                  }}
                  className={`px-3 py-2 rounded-md text-left transition-colors ${
                    activeTab === tab.id
                      ? "bg-white/20 text-white"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </nav>
      </header>

      <div className="container mx-auto p-6">
        {/* Layout Examples */}
        {activeTab === "layout" && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold border-b-2 border-blue-500 pb-2">
              Layout Examples
            </h2>

            {/* Flexbox Layout */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Flexbox Layout</h3>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 bg-blue-600 p-4 rounded text-center">
                  flex-1
                </div>
                <div className="flex-2 bg-green-600 p-4 rounded text-center">
                  flex-2 (grows more)
                </div>
                <div className="flex-1 bg-red-600 p-4 rounded text-center">
                  flex-1
                </div>
              </div>
            </div>

            {/* Grid Layout */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">CSS Grid Layout</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div className="bg-purple-600 p-4 rounded col-span-1 md:col-span-2">
                  col-span-2 on md+
                </div>
                <div className="bg-yellow-600 p-4 rounded">Grid Item</div>
                <div className="bg-pink-600 p-4 rounded">Grid Item</div>
                <div className="bg-indigo-600 p-4 rounded lg:col-span-2">
                  lg:col-span-2
                </div>
                <div className="bg-teal-600 p-4 rounded">Grid Item</div>
                <div className="bg-orange-600 p-4 rounded">Grid Item</div>
              </div>
            </div>

            {/* Position Examples */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Positioning</h3>
              <div className="relative h-48 bg-gray-700 rounded-lg overflow-hidden">
                <div className="absolute top-2 left-2 bg-red-500 px-3 py-1 rounded text-sm">
                  absolute top-2 left-2
                </div>
                <div className="absolute top-2 right-2 bg-blue-500 px-3 py-1 rounded text-sm">
                  absolute top-2 right-2
                </div>
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-green-500 px-3 py-1 rounded text-sm">
                  centered bottom
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-purple-500 px-4 py-2 rounded">
                    absolute inset-0 + flex center
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Typography Examples */}
        {activeTab === "typography" && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold border-b-2 border-green-500 pb-2">
              Typography Examples
            </h2>

            <div className="bg-gray-800 p-6 rounded-lg space-y-4">
              <div className="text-xs text-gray-400">
                Extra small text (text-xs)
              </div>
              <div className="text-sm text-gray-300">Small text (text-sm)</div>
              <div className="text-base">Base text (text-base)</div>
              <div className="text-lg font-medium">
                Large medium text (text-lg font-medium)
              </div>
              <div className="text-xl font-semibold">
                Extra large semibold (text-xl font-semibold)
              </div>
              <div className="text-2xl font-bold">
                2XL Bold (text-2xl font-bold)
              </div>
              <div className="text-3xl font-black tracking-wider">
                3XL Black with wide tracking
              </div>

              <div className="space-y-2 mt-6">
                <div className="text-left">Left aligned text</div>
                <div className="text-center">Center aligned text</div>
                <div className="text-right">Right aligned text</div>
                <div className="text-justify">
                  Justified text. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </div>
              </div>

              <div className="space-y-2 mt-6">
                <div className="underline">Underlined text</div>
                <div className="line-through">Strikethrough text</div>
                <div className="italic">Italic text</div>
                <div className="uppercase">uppercase text</div>
                <div className="lowercase">LOWERCASE TEXT</div>
                <div className="capitalize">capitalize each word</div>
              </div>

              <div className="space-y-2 mt-6">
                <div className="leading-tight">
                  Tight leading (line height). Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </div>
                <div className="leading-normal">
                  Normal leading. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit.
                </div>
                <div className="leading-relaxed">
                  Relaxed leading. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Interactive States */}
        {activeTab === "states" && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold border-b-2 border-red-500 pb-2">
              Interactive States
            </h2>

            <div className="bg-gray-800 p-6 rounded-lg space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Hover Effects</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg transition-colors">
                    Hover Color Change
                  </button>
                  <button className="bg-green-500 hover:shadow-lg px-6 py-3 rounded-lg transition-shadow">
                    Hover Shadow
                  </button>
                  <button className="bg-purple-500 hover:scale-105 px-6 py-3 rounded-lg transition-transform">
                    Hover Scale
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Focus States</h3>
                <div className="space-y-2">
                  <input
                    type="text"
                    placeholder="Focus me!"
                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all"
                  />
                  <button className="bg-red-500 focus:ring-4 focus:ring-red-300 focus:outline-none px-6 py-3 rounded-lg">
                    Focus Ring Effect
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Group Hover</h3>
                <div className="group bg-gray-700 p-6 rounded-lg cursor-pointer hover:bg-gray-600 transition-colors">
                  <h4 className="font-semibold mb-2">Hover this entire card</h4>
                  <p className="text-gray-300 group-hover:text-white transition-colors">
                    This text changes color on group hover
                  </p>
                  <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-blue-500 px-3 py-1 rounded text-sm">
                      Hidden until group hover!
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Active States</h3>
                <button className="bg-yellow-500 active:bg-yellow-600 active:scale-95 px-6 py-3 rounded-lg transition-all text-black font-medium">
                  Click and Hold (active state)
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Spacing & Sizing */}
        {activeTab === "spacing" && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold border-b-2 border-yellow-500 pb-2">
              Spacing & Sizing
            </h2>

            <div className="bg-gray-800 p-6 rounded-lg space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Width Examples</h3>
                <div className="space-y-2">
                  <div className="bg-blue-600 w-1/4 h-12 flex items-center justify-center rounded">
                    w-1/4
                  </div>
                  <div className="bg-green-600 w-1/2 h-12 flex items-center justify-center rounded">
                    w-1/2
                  </div>
                  <div className="bg-red-600 w-3/4 h-12 flex items-center justify-center rounded">
                    w-3/4
                  </div>
                  <div className="bg-purple-600 w-full h-12 flex items-center justify-center rounded">
                    w-full
                  </div>
                  <div className="bg-indigo-600 w-96 h-12 flex items-center justify-center rounded">
                    w-96 (384px)
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Height Examples</h3>
                <div className="flex space-x-4">
                  <div className="bg-teal-600 w-16 h-16 flex items-center justify-center rounded text-xs">
                    h-16
                  </div>
                  <div className="bg-cyan-600 w-16 h-24 flex items-center justify-center rounded text-xs">
                    h-24
                  </div>
                  <div className="bg-blue-600 w-16 h-32 flex items-center justify-center rounded text-xs">
                    h-32
                  </div>
                  <div className="bg-indigo-600 w-16 h-40 flex items-center justify-center rounded text-xs">
                    h-40
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Padding Examples</h3>
                <div className="space-y-2">
                  <div className="bg-orange-600 p-2 rounded inline-block">
                    p-2
                  </div>
                  <div className="bg-orange-600 p-4 rounded inline-block ml-4">
                    p-4
                  </div>
                  <div className="bg-orange-600 p-6 rounded inline-block ml-4">
                    p-6
                  </div>
                  <div className="bg-orange-600 p-8 rounded inline-block ml-4">
                    p-8
                  </div>
                </div>
                <div className="mt-4 space-x-2">
                  <div className="bg-pink-600 px-6 py-2 rounded inline-block">
                    px-6 py-2
                  </div>
                  <div className="bg-pink-600 pt-8 pb-2 px-4 rounded inline-block">
                    pt-8 pb-2 px-4
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Margin & Space Between
                </h3>
                <div className="bg-gray-700 p-4 rounded">
                  <div className="space-x-4 flex">
                    <div className="bg-green-600 p-3 rounded">Item 1</div>
                    <div className="bg-green-600 p-3 rounded">Item 2</div>
                    <div className="bg-green-600 p-3 rounded">Item 3</div>
                  </div>
                  <p className="text-sm text-gray-300 mt-2">
                    space-x-4 between flex items
                  </p>
                </div>

                <div className="bg-gray-700 p-4 rounded mt-4">
                  <div className="space-y-3">
                    <div className="bg-red-600 p-3 rounded">Item A</div>
                    <div className="bg-red-600 p-3 rounded">Item B</div>
                    <div className="bg-red-600 p-3 rounded">Item C</div>
                  </div>
                  <p className="text-sm text-gray-300 mt-2">
                    space-y-3 between stacked items
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Colors & Effects */}
        {activeTab === "colors" && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold border-b-2 border-pink-500 pb-2">
              Colors & Visual Effects
            </h2>

            <div className="bg-gray-800 p-6 rounded-lg space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Color Palette</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2">
                  {[
                    { color: "red-500", textColor: "white" },
                    { color: "orange-500", textColor: "white" },
                    { color: "yellow-500", textColor: "black" },
                    { color: "green-500", textColor: "white" },
                    { color: "blue-500", textColor: "white" },
                    { color: "indigo-500", textColor: "white" },
                    { color: "purple-500", textColor: "white" },
                    { color: "pink-500", textColor: "white" },
                  ].map(({ color, textColor }) => (
                    <div
                      key={color}
                      className={`bg-${color} h-16 rounded flex items-center justify-center text-xs font-medium text-${textColor}`}
                    >
                      {color}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Gradients</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-24 rounded-lg flex items-center justify-center font-medium">
                    from-purple-500 to-pink-500
                  </div>
                  <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 h-24 rounded-lg flex items-center justify-center font-medium">
                    from-blue via-purple to-pink
                  </div>
                  <div className="bg-gradient-to-t from-green-400 to-blue-500 h-24 rounded-lg flex items-center justify-center font-medium">
                    from-green-400 to-blue-500
                  </div>
                  <div className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 h-24 rounded-lg flex items-center justify-center font-medium">
                    Multi-stop gradient
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Shadow Effects</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white text-black p-6 rounded-lg shadow-sm">
                    <h4 className="font-semibold">shadow-sm</h4>
                    <p className="text-sm text-gray-600">Subtle shadow</p>
                  </div>
                  <div className="bg-white text-black p-6 rounded-lg shadow-lg">
                    <h4 className="font-semibold">shadow-lg</h4>
                    <p className="text-sm text-gray-600">Large shadow</p>
                  </div>
                  <div className="bg-white text-black p-6 rounded-lg shadow-2xl">
                    <h4 className="font-semibold">shadow-2xl</h4>
                    <p className="text-sm text-gray-600">Extra large shadow</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Border Radius</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-20 rounded-none flex items-center justify-center font-medium">
                    rounded-none
                  </div>
                  <div className="bg-gradient-to-r from-blue-500 to-teal-500 h-20 rounded flex items-center justify-center font-medium">
                    rounded
                  </div>
                  <div className="bg-gradient-to-r from-green-500 to-blue-500 h-20 rounded-lg flex items-center justify-center font-medium">
                    rounded-lg
                  </div>
                  <div className="bg-gradient-to-r from-red-500 to-yellow-500 h-20 rounded-full flex items-center justify-center font-medium">
                    rounded-full
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Opacity & Blur</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-medium">Opacity Variations</h4>
                    <div className="bg-blue-500 opacity-25 p-4 rounded">
                      opacity-25
                    </div>
                    <div className="bg-blue-500 opacity-50 p-4 rounded">
                      opacity-50
                    </div>
                    <div className="bg-blue-500 opacity-75 p-4 rounded">
                      opacity-75
                    </div>
                    <div className="bg-blue-500 opacity-100 p-4 rounded">
                      opacity-100
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-medium">Blur Effects</h4>
                    <div className="bg-green-500 blur-none p-4 rounded">
                      blur-none
                    </div>
                    <div className="bg-green-500 blur-sm p-4 rounded">
                      blur-sm
                    </div>
                    <div className="bg-green-500 blur-md p-4 rounded">
                      blur-md
                    </div>
                    <div className="bg-green-500 blur-lg p-4 rounded">
                      blur-lg
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Animations */}
        {activeTab === "animations" && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold border-b-2 border-indigo-500 pb-2">
              Transforms & Animations
            </h2>

            <div className="bg-gray-800 p-6 rounded-lg space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Hover Transforms</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-blue-600 h-24 rounded flex items-center justify-center cursor-pointer transform hover:scale-110 transition-transform">
                    Hover to Scale
                  </div>
                  <div className="bg-green-600 h-24 rounded flex items-center justify-center cursor-pointer transform hover:rotate-12 transition-transform">
                    Hover to Rotate
                  </div>
                  <div className="bg-red-600 h-24 rounded flex items-center justify-center cursor-pointer transform hover:-translate-y-2 transition-transform">
                    Hover to Lift
                  </div>
                  <div className="bg-purple-600 h-24 rounded flex items-center justify-center cursor-pointer transform hover:skew-x-12 transition-transform">
                    Hover to Skew
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Built-in Animations
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-yellow-500 text-black h-24 rounded flex items-center justify-center animate-pulse font-medium">
                    animate-pulse
                  </div>
                  <div className="bg-pink-500 h-24 rounded flex items-center justify-center animate-bounce font-medium">
                    animate-bounce
                  </div>
                  <div className="bg-teal-500 h-24 rounded flex items-center justify-center animate-spin font-medium">
                    🎯
                  </div>
                  <div className="bg-indigo-500 h-24 rounded flex items-center justify-center animate-ping font-medium">
                    animate-ping
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Transition Examples
                </h3>
                <div className="space-y-4">
                  <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg transition-colors duration-75">
                    Fast transition (75ms)
                  </button>
                  <button className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg transition-colors duration-300">
                    Normal transition (300ms)
                  </button>
                  <button className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-lg transition-colors duration-700">
                    Slow transition (700ms)
                  </button>
                  <button className="bg-purple-500 hover:bg-purple-600 hover:scale-105 px-6 py-3 rounded-lg transition-all duration-300 ease-in-out">
                    Multiple properties
                  </button>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Easing Functions</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button className="bg-orange-500 hover:translate-x-4 px-6 py-3 rounded-lg transition-transform duration-500 ease-linear">
                    ease-linear
                  </button>
                  <button className="bg-cyan-500 hover:translate-x-4 px-6 py-3 rounded-lg transition-transform duration-500 ease-in-out">
                    ease-in-out
                  </button>
                  <button className="bg-lime-500 hover:translate-x-4 px-6 py-3 rounded-lg transition-transform duration-500 ease-in">
                    ease-in
                  </button>
                  <button className="bg-rose-500 hover:translate-x-4 px-6 py-3 rounded-lg transition-transform duration-500 ease-out">
                    ease-out
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Responsive Design */}
        {activeTab === "responsive" && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold border-b-2 border-orange-500 pb-2">
              Responsive Design
            </h2>

            <div className="bg-gray-800 p-6 rounded-lg space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Responsive Text Sizes
                </h3>
                <div className="space-y-2">
                  <div className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                    This text scales: xs → sm → base → lg → xl → 2xl
                  </div>
                  <p className="text-sm text-gray-400">
                    Resize your browser to see the changes!
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Responsive Grid</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                  <div className="bg-red-500 p-4 rounded text-center text-sm">
                    1 col mobile
                  </div>
                  <div className="bg-blue-500 p-4 rounded text-center text-sm">
                    2 cols sm+
                  </div>
                  <div className="bg-green-500 p-4 rounded text-center text-sm">
                    3 cols md+
                  </div>
                  <div className="bg-yellow-500 p-4 rounded text-center text-sm text-black">
                    4 cols lg+
                  </div>
                  <div className="bg-purple-500 p-4 rounded text-center text-sm">
                    6 cols xl+
                  </div>
                  <div className="bg-pink-500 p-4 rounded text-center text-sm">
                    Responsive
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Responsive Visibility
                </h3>
                <div className="space-y-4"></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
