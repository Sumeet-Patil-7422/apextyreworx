/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SpecialOffer } from './components/SpecialOffer';
import { Technology } from './components/Technology';
import { ProductCatalog } from './components/ProductCatalog';
import { TyreCare } from './components/TyreCare';
import { Footer } from './components/Footer';
import { ImageModal } from './components/ImageModal';
import { ShopModal } from './components/ShopModal';
import { TyreProduct, TyreFinderState } from './types';

export default function App() {
  // Modal states
  const [shopModalOpen, setShopModalOpen] = useState(false);
  const [selectedTyre, setSelectedTyre] = useState<TyreProduct | null>(null);

  const [imageModal, setImageModal] = useState<{
    isOpen: boolean;
    imageSrc: string;
    title: string;
  }>({
    isOpen: false,
    imageSrc: '',
    title: ''
  });

  // Search filter state from TyreFinder
  const [activeFilters, setActiveFilters] = useState<TyreFinderState | null>(null);

  const handleOpenShop = (tyre?: TyreProduct) => {
    setSelectedTyre(tyre || null);
    setShopModalOpen(true);
  };

  const handleOpenImageModal = (imageSrc: string, title: string) => {
    setImageModal({
      isOpen: true,
      imageSrc,
      title
    });
  };

  const handleSearchTyres = (filters: TyreFinderState) => {
    setActiveFilters(filters);
  };

  const handleClearFilters = () => {
    setActiveFilters(null);
  };

  return (
    <div className="min-h-screen bg-[#0b0c0e] text-neutral-100 font-sans selection:bg-[#E63946] selection:text-white">
      {/* Top Navigation */}
      <Navbar onOpenShop={() => handleOpenShop()} />

      <main>
        {/* Section 1: Hero Section */}
        <Hero
          onOpenShop={() => handleOpenShop()}
          onOpenImageModal={handleOpenImageModal}
          onSearchTyres={handleSearchTyres}
        />

        {/* Section 2: Special Offer Promotional Banner */}
        <SpecialOffer
          onOpenShop={() => handleOpenShop()}
          onOpenImageModal={handleOpenImageModal}
        />

        {/* Section 3: Technology & Innovation Section ("GRIP MEETS TECHNOLOGY") */}
        <Technology
          onOpenShop={() => handleOpenShop()}
          onOpenImageModal={handleOpenImageModal}
        />

        {/* Section 4: High-Performance Tyre Catalog */}
        <ProductCatalog
          onSelectTyre={(tyre) => handleOpenShop(tyre)}
          activeFilters={activeFilters}
          onClearFilters={handleClearFilters}
        />

        {/* Section 5: Interactive Tyre Care Tips Section ("#TyreCareMatters") */}
        <TyreCare
          onOpenShop={() => handleOpenShop()}
          onOpenImageModal={handleOpenImageModal}
        />
      </main>

      {/* Footer Section */}
      <Footer />

      {/* Interactive Shop & Fitment Booking Modal */}
      <ShopModal
        isOpen={shopModalOpen}
        onClose={() => setShopModalOpen(false)}
        selectedTyre={selectedTyre}
      />

      {/* High-Resolution Campaign Poster Lightbox Modal */}
      <ImageModal
        isOpen={imageModal.isOpen}
        onClose={() => setImageModal((prev) => ({ ...prev, isOpen: false }))}
        imageSrc={imageModal.imageSrc}
        title={imageModal.title}
      />
    </div>
  );
}
