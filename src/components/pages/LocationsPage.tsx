import React, { useState } from 'react';
import { RESELLER_COUNTRIES } from '../../data/siteData';
import { MapPin, Phone, Mail, Navigation, Search } from 'lucide-react';
import { Newsletter } from '../Newsletter';

export const LocationsPage: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>('Hong Kong');
  const [searchQuery, setSearchQuery] = useState('');

  const currentCountryData = RESELLER_COUNTRIES.find((c) => c.country === selectedCountry) || RESELLER_COUNTRIES[0];

  const filteredStores = currentCountryData.stores.filter((store) =>
    store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    store.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pt-20 sm:pt-28 pb-0 bg-[#f5eddb]">
      {/* Header Section */}
      <section id="reseller-header" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16 text-center">
        <h1 className="font-calder uppercase text-2xl sm:text-4xl lg:text-6xl text-[#751629] mb-4 sm:mb-6 tracking-wide">
          FIND A RESELLER
        </h1>
        <p className="font-asul text-sm sm:text-base lg:text-xl text-[#280e0f] max-w-2xl mx-auto leading-relaxed opacity-90 mb-8 sm:mb-10">
          Discover Tikiri Manike products at our trusted retail partners and specialty organic food stores across the world.
        </p>

        {/* Filters and Country Selector */}
        <div className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Country Dropdown */}
          <div className="w-full sm:w-1/2">
            <label className="block text-left text-xs font-calsans font-bold uppercase tracking-wider text-[#280e0f] mb-1.5">
              Select Region
            </label>
            <select
              value={selectedCountry}
              onChange={(e) => {
                setSelectedCountry(e.target.value);
                setSearchQuery('');
              }}
              className="w-full px-5 py-3 rounded-full border-2 border-[#280e0f] bg-[#f5eddb] text-[#280e0f] font-calsans font-bold text-sm focus:outline-none focus:ring-2 focus:ring-[#751629]"
            >
              {RESELLER_COUNTRIES.map((c) => (
                <option key={c.country} value={c.country}>
                  {c.country} ({c.stores.length} {c.stores.length === 1 ? 'store' : 'stores'})
                </option>
              ))}
            </select>
          </div>

          {/* Search Box */}
          <div className="w-full sm:w-1/2">
            <label className="block text-left text-xs font-calsans font-bold uppercase tracking-wider text-[#280e0f] mb-1.5">
              Filter by location / name
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Search city, mall, or street..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-5 py-3 rounded-full border-2 border-[#280e0f] bg-[#f5eddb] text-[#280e0f] placeholder-[#280e0f]/50 font-calsans text-sm focus:outline-none focus:ring-2 focus:ring-[#751629]"
              />
              <Search className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-[#280e0f]" />
            </div>
          </div>
        </div>
      </section>

      {/* Stores List */}
      <section id="reseller-wrapper" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="text-center mb-6 sm:mb-8">
          <p className="font-calsans text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#9f9383]">
            Showing {filteredStores.length} {filteredStores.length === 1 ? 'location' : 'locations'} in {selectedCountry}
          </p>
        </div>

        {filteredStores.length === 0 ? (
          <div className="text-center py-12 sm:py-16 bg-[#e6d9c2]/50 rounded-3xl p-6 sm:p-8 max-w-md mx-auto">
            <p className="font-asul text-base sm:text-lg text-[#280e0f] mb-4">
              No stores matching "{searchQuery}" in {selectedCountry}.
            </p>
            <button
              onClick={() => setSearchQuery('')}
              className="btn-primary-custom text-xs cursor-pointer"
            >
              Clear Search
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredStores.map((store, index) => (
              <div
                key={index}
                className="bg-[#e6d9c2] border border-[#280e0f]/15 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="font-calsans text-xl sm:text-2xl font-semibold text-[#1c3a30]">
                      {store.name}
                    </h3>
                    <span className="px-3 py-1 bg-[#dab427] text-[#280e0f] rounded-full text-xs font-calsans font-bold uppercase tracking-wider">
                      Partner
                    </span>
                  </div>

                  <div className="space-y-3 font-asul text-sm text-[#0f1c25] mb-8">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#751629] shrink-0 mt-0.5" />
                      <p className="leading-relaxed">{store.location}</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-[#751629] shrink-0" />
                      <a
                        href={`tel:${store.contact}`}
                        className="hover:text-[#751629] transition-colors"
                      >
                        {store.contact}
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-[#751629] shrink-0" />
                      <a
                        href={`mailto:${store.email}`}
                        className="hover:text-[#751629] transition-colors"
                      >
                        {store.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#280e0f]/10 flex gap-3">
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(store.name + ' ' + store.location)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-primary-custom text-xs py-2.5 flex items-center justify-center gap-2"
                  >
                    <Navigation className="w-4 h-4" />
                    Directions
                  </a>
                  <a
                    href={`tel:${store.contact}`}
                    className="btn-secondary-custom text-xs py-2.5 px-4"
                  >
                    Call
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
};
