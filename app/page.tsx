'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home({
  businessName,
  businessEmail,
  businessAddress,
  businessPhone,
  primaryColor,
  secondaryColor,
  accentColor1,
  accentColor2,
  logoUrl,
  language,
  aboutUs,
  vision,
  mission,
  products,
  productImages,
  aboutUsImages,
  socialMediaLinks,
}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
  };

  const renderLanguage = (textEnglish, textMalay) => {
    if (language === 'Bahasa Malaysia') return textMalay;
    if (language === 'English') return textEnglish;
    if (language === 'Both') return `${textEnglish} / ${textMalay}`;
  };

  return (
    <div className={`min-h-screen ${primaryColor} ${secondaryColor}`}>
      <nav className="sticky top-0 z-10 bg-white shadow-md">
        <div className="container mx-auto flex justify-between py-4">
          <Link href="#" className="flex items-center">
            <Image src={logoUrl} alt={businessName} width={40} height={40} />
            <span className="ml-2 text-lg font-bold">{businessName}</span>
          </Link>
          <ul className="flex items-center space-x-4">
            <li>
              <Link href="#about">{renderLanguage('About Us', 'Tentang Kami')}</Link>
            </li>
            <li>
              <Link href="#products">{renderLanguage('Products', 'Produk')}</Link>
            </li>
            <li>
              <Link href="#contact">{renderLanguage('Contact', 'Hubungi Kami')}</Link>
            </li>
          </ul>
        </div>
      </nav>

      <section id="hero" className={`h-screen bg-gradient-to-b from-${primaryColor} to-${secondaryColor} flex items-center justify-center`}>
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-white">{businessName}</h1>
          <p className="text-2xl text-white">{renderLanguage('Your trusted partner', 'Rakan kongsi yang dipercayai')}</p>
          <Link href="#about" className="btn btn-primary">{renderLanguage('Learn More', 'Ketahui Lebih Lanjut')}</Link>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold">{renderLanguage('About Us', 'Tentang Kami')}</h2>
          <p className="text-lg">{aboutUs}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
            <div>
              <h3 className="text-2xl font-bold">{renderLanguage('Vision', 'Wawasan')}</h3>
              <p className="text-lg">{vision}</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">{renderLanguage('Mission', 'Misi')}</h3>
              <p className="text-lg">{mission}</p>
            </div>
          </div>
          {aboutUsImages.map((image, index) => (
            <Image key={index} src={image} alt={`About Us ${index + 1}`} width={400} height={300} className="mt-10" />
          ))}
        </div>
      </section>

      <section id="products" className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold">{renderLanguage('Products', 'Produk')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
            {products.map((product, index) => (
              <div key={index} className="bg-white shadow-md p-4">
                <Image src={productImages[index]} alt={product} width={200} height={150} />
                <h3 className="text-2xl font-bold mt-4">{product}</h3>
                <p className="text-lg">{renderLanguage('Description', 'Keterangan')}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold">{renderLanguage('Contact Us', 'Hubungi Kami')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
            <div>
              <h3 className="text-2xl font-bold">{renderLanguage('Get in Touch', 'Dapatkan Sentuhan Kami')}</h3>
              <p className="text-lg">{businessAddress}</p>
              <p className="text-lg">{businessEmail}</p>
              <p className="text-lg">{businessPhone}</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">{renderLanguage('Send a Message', 'Hantar Mesej')}</h3>
              <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder={renderLanguage('Name', 'Nama')} className="input input-bordered w-full mt-4" />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={renderLanguage('Email', 'Emel')} className="input input-bordered w-full mt-4" />
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder={renderLanguage('Message', 'Mesej')} className="textarea textarea-bordered w-full mt-4" />
                <button type="submit" className="btn btn-primary mt-4">{renderLanguage('Send', 'Hantar')}</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-10 bg-gray-200">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <span>&copy; {new Date().getFullYear()} {businessName}</span>
            <ul className="flex items-center space-x-4">
              {socialMediaLinks.map((link, index) => (
                <li key={index}>
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    <ChevronDown size={24} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}