import React, { useState } from 'react';

export const Newsletter: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setName('');
    setEmail('');
  };

  return (
    <section
      id="sign-up"
      className="relative bg-cover bg-center py-10 sm:py-14 text-[#f5eddb]"
      style={{ backgroundImage: `url('/media/footer-sign-up-bg.972cbbbe.webp')` }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Left: Text (order-1 on mobile, order-0 / first on lg) */}
          <div className="lg:col-span-4 text-center lg:text-right order-1 lg:order-1 pt-2 sm:pt-4 pb-2 lg:py-0">
            <h2 className="font-calder text-2xl sm:text-3xl lg:text-4xl text-[#f5eddb] mb-2 sm:mb-4">
              Sign Up
            </h2>
            <p className="font-asul text-xs sm:text-sm lg:text-base text-[#f5eddb]/90 leading-relaxed max-w-sm ml-auto mr-auto lg:mr-0">
              By subscribing, you’ll receive exciting new product and flavour announcements plus exclusive deals and promotions. Don’t miss out - join our mailing list today!
            </p>
          </div>

          {/* Center: Brand Full Logo Artwork (order-0 on mobile, middle on lg) */}
          <div className="lg:col-span-4 text-center order-0 lg:order-2 flex justify-center">
            <img
              src="/media/logo-full.b1310cd4.svg"
              alt="Tikiri Manike Signature"
              width={155}
              height={200}
              className="w-[120px] sm:w-[155px] h-auto object-contain drop-shadow-md"
            />
          </div>

          {/* Right: Subscription Form (order-2 on mobile, last on lg) */}
          <div className="lg:col-span-4 order-2 lg:order-3">
            {submitted ? (
              <div className="bg-[#f5eddb]/15 backdrop-blur-sm border border-[#f5eddb]/40 rounded-2xl p-6 text-center text-[#f5eddb]">
                <h4 className="font-calsans text-xl font-bold mb-2">Welcome to the Family!</h4>
                <p className="font-asul text-sm text-[#f5eddb]/90">
                  Thank you for subscribing. We're excited to share our traditional flavors and harvest stories with you.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-xs font-calsans uppercase tracking-wider underline text-[#f5eddb] hover:opacity-80 cursor-pointer"
                >
                  Subscribe another email
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3 text-center lg:text-left">
                <p className="font-calsans text-xs sm:text-sm font-bold tracking-wider text-[#f5eddb] uppercase mb-1">
                  SUBSCRIBE TO OUR EMAILS
                </p>
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border-2 border-[#f5eddb] bg-transparent text-[#f5eddb] placeholder-[#f5eddb]/70 font-calsans text-sm focus:outline-none focus:bg-[#f5eddb]/10 transition-all"
                />
                <input
                  type="email"
                  required
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border-2 border-[#f5eddb] bg-transparent text-[#f5eddb] placeholder-[#f5eddb]/70 font-calsans text-sm focus:outline-none focus:bg-[#f5eddb]/10 transition-all"
                />
                <button
                  type="submit"
                  className="btn-tertiary-custom w-full mt-2 cursor-pointer"
                >
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
