import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

const PinterestIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.017 1.5c-5.89 0-10.517 4.775-10.517 10.683 0 4.533 2.822 8.433 6.775 9.875-.075-.825-.017-1.85.2-2.7.233-.95.967-4.05.967-4.05s-.258-.5-.258-1.242c0-1.166.683-2.042 1.533-2.042.725 0 1.075.542 1.075 1.2c0 .716-.458 1.783-.692 2.766-.2.85.425 1.558 1.258 1.558 1.517 0 2.683-1.608 2.683-3.916 0-2.083-1.4-3.617-3.775-3.617-2.617 0-4.142 1.95-4.142 3.983 0 .7.25 1.45.583 1.85.067.083.083.15.05.283-.083.35-.283 1.158-.333 1.35-.05.183-.183.233-.35.133-1.25-.5-2.017-2.45-2.017-4.133 0-3.342 2.442-6.258 6.9-6.258 3.65 0 6.45 2.567 6.45 5.85 0 3.667-2.283 6.458-5.358 6.458-1.05 0-2.033-.533-2.358-1.166l-.5 1.917c-.242.933-.867 2.183-1.3 2.9.95.3 1.95.45 3 .45 5.89 0 10.517-4.775 10.517-10.683C22.534 6.275 17.907 1.5 12.017 1.5z"/>
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const mainLinks = [
    { name: 'Home', to: '/' },
    { name: 'Business', to: '#' },
    { name: 'Services', to: '#' },
    { name: 'Therapist Jobs', to: '#' },
    { name: 'About', to: '#' },
    { name: 'Careers', to: '#' },
  ];

  const socialIcons = [
    { icon: <Facebook className="h-5 w-5" />, href: "https://www.facebook.com/profile.php?id=61563845595167" },
    { icon: <Twitter className="h-5 w-5" />, href: "https://x.com/myvtalix" },
    { icon: <Instagram className="h-5 w-5" />, href: "https://www.instagram.com/myvtalix" },
    { icon: <PinterestIcon />, href: "https://in.pinterest.com/myvtalix/" },
    { icon: <Youtube className="h-5 w-5" />, href: "#" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/company/myvtalix/" },
  ];

  const footerBottomLinks = [
    { name: 'Terms & Conditions', to: '#' },
    { name: 'Privacy Policy', to: '#' },
    { name: 'Sharing Settings', to: '#' },
    { name: 'Web Accessibility', to: '#' },
  ];

  return (
    <footer className="bg-white text-sm text-gray-700">
      {/* Top Banner */}
      <div className="bg-[#F9F4F1]">
        <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-24 py-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
          <div className="text-center md:text-left text-base sm:text-[18px] leading-6 sm:leading-7">
            <p>If you are in a crisis or any other person may be in danger - don't use this site.</p>
            <Link href="#" className="text-orange-500 underline">These resources</Link> can provide you with immediate help.
          </div>
          <div className="shrink-0 ml-0 md:ml-4">
            <Image src="/img_2/RAZORpay.png" data-ai-hint="razorpay logo" alt="Payments Powered by Razorpay" width={160} height={60} className="mx-auto md:mx-0" />
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-24 py-8">
        {/* Links + Social */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-6">
          <nav className="flex flex-wrap gap-x-6 gap-y-2 justify-center items-center">
            {mainLinks.map((link) => (
              <Link key={link.name} href={link.to} className="hover:text-primary hover:underline font-600 text-base sm:text-base text-black font-poppins">
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            {socialIcons.map((social, index) => (
              <a key={index} target="_blank" rel="noopener noreferrer" href={social.href} className="text-black text-[22px] sm:text-[24px] font-600 leading-7 hover:text-primary">
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <hr className="border-gray-200" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-black font-600 text-base sm:text-base gap-4">
          <div className="flex flex-wrap gap-x-6 gap-y-2 items-center justify-center">
            {footerBottomLinks.map((link) => (
              <Link key={link.name} href={link.to} className="hover:text-primary hover:underline">
                {link.name}
              </Link>
            ))}
          </div>
          <span>© {currentYear} Vtalix</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
