import React from "react";
import { brandName, support } from "../../config/BRAND";

const Footer = () => {
    return (
        <footer className="bg-white lg:grid lg:grid-cols-5 mt-[30vh]">
            {/* Image Section */}
            <div className="relative block h-32 lg:col-span-2 lg:h-full">
                <img
                    src="https://images.unsplash.com/photo-1642370324100-324b21fab3a9?auto=format&fit=crop&q=80&w=1160"
                    alt="Footer"
                    className="absolute inset-0 h-full w-full object-cover"
                />
            </div>

            {/* Content Section */}
            <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                    {/* Contact */}
                    <div>
                        <p>
                            <span className="text-xs tracking-wide text-gray-500 uppercase">
                                Call us
                            </span>

                            <a
                                href="#"
                                className="block text-2xl font-medium text-gray-900 hover:opacity-75 sm:text-3xl"
                            >
                                012345678
                            </a>
                        </p>

                        <ul className="mt-8 space-y-1 text-sm text-gray-700">
                            <li>Monday to Friday: 10am - 5pm</li>
                            <li>Weekend: 10am - 3pm</li>
                        </ul>

                        {/* Social Icons */}
                        <ul className="mt-8 flex gap-6">
                            {["Facebook", "Instagram", "Twitter", "GitHub", "Dribbble"].map(
                                (name, index) => (
                                    <li key={index}>
                                        <a
                                            href="#"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-gray-700 transition hover:opacity-75"
                                        >
                                            <span className="sr-only">{name}</span>
                                        </a>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>

                    {/* Links */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                            <p className="font-medium text-gray-900">Services</p>
                            <ul className="mt-6 space-y-4 text-sm">
                                <li><a href="#" className="text-gray-700 hover:opacity-75">Seasonal Collection</a></li>
                                <li><a href="#" className="text-gray-700 hover:opacity-75">Ethnic Wear</a></li>
                                <li><a href="#" className="text-gray-700 hover:opacity-75">Casual Wear</a></li>
                                <li><a href="#" className="text-gray-700 hover:opacity-75">Formal Wear</a></li>
                                <li><a href="#" className="text-gray-700 hover:opacity-75">Custom Tailoring</a></li>

                            </ul>
                        </div>

                        <div>
                            <p className="font-medium text-gray-900">Company</p>
                            <ul className="mt-6 space-y-4 text-sm">
                                <li><a href="#" className="text-purple-500 text-base hover:opacity-75 ">{brandName}</a></li>
                                <li><a href="#" className="text-pink-500 text-base hover:opacity-75">{support}</a></li>
                                <li><a href="#" className="text-gray-700 hover:opacity-75">Meet the Team</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-12 border-t border-gray-100 pt-12">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <ul className="flex flex-wrap gap-4 text-xs">
                            <li><a href="#" className="text-gray-500 hover:text-purple-600">Terms & Conditions</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-purple-600">Privacy Policy</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-purple-600">Cookies</a></li>
                        </ul>

                        <p className="mt-8 text-xs text-gray-500 sm:mt-0">
                            © 2025. <span className="text-purple-500">{brandName}</span> {support} . All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
