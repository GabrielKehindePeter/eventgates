'use client';
import React, { useEffect, useState } from "react";
import TicketSection from "@/components/Home/TicketSection";
import { useParams } from "next/navigation";

export default function HeroWithCard() {


  const params = useParams<{ id: string }>();
  const id = params?.id;
  
  const [regularCount, setCount] = useState(0);
  const [vipCount, setVipCount] = useState(0);
  const [otherCount, setOtherCount] = useState(0);

  const [isModalOpen, setModalOpen] = useState(false);

  const regularIncrement = () => setCount(prev => prev + 1);
  const regularDecrement = () => setCount(prev => (prev > 0 ? prev - 1 : 0));

  const vipIncrement = () => setVipCount(prev => prev + 1);
  const vipDecrement = () => setVipCount(prev => (prev > 0 ? prev - 1 : 0));

  const otherIncrement = () => setOtherCount(prev => prev + 1);
  const otherDecrement = () => setOtherCount(prev => (prev > 0 ? prev - 1 : 0));

  // Prices (you can move these to props or a constants file)
  const PRICE_REGULAR = 20000;
  const PRICE_VIP = 50000;
  const PRICE_TABLE = 100000;

  const subtotalRegular = regularCount * PRICE_REGULAR;
  const subtotalVip = vipCount * PRICE_VIP;
  const subtotalTable = otherCount * PRICE_TABLE;
  const grandTotal = subtotalRegular + subtotalVip + subtotalTable;

  // Format NGN currency
  const formatNGN = (value:any) => {
    try {
      return value.toLocaleString('en-NG', { style: 'currency', currency: 'NGN', minimumFractionDigits: 0 });
    } catch {
      // fallback
      return `₦${value.toLocaleString()}`;
    }
  };

  // open modal handler
  const handleGetTicket = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => setModalOpen(false);

  // close on Escape
  useEffect(() => {
    const onKey = (e:any) => {
      if (e.key === 'Escape') setModalOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  // lock scroll when modal open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isModalOpen]);

  const handleConfirm = () => {
    // Replace this with your checkout / API / routing logic
    const order = {
      regular: regularCount,
      vip: vipCount,
      table: otherCount,
      total: grandTotal,
    };
    console.log('Confirm order', order);
    // close modal after confirm (or navigate to checkout)
    setModalOpen(false);
    // e.g., router.push('/checkout', { state: order }) or send to API
  };

  return (
    <div className="pt-36"> {/* replaced inline style with Tailwind */}
      <div className="px-4 lg:max-w-6xl sm:max-w-12 mx-auto">
        {/* hero image */}
        <div
          className="w-full flex justify-center bg-blue-600"
          style={{ backgroundImage: "url('/images/events/edo-in-eko.jpg')" }}
        >
          <img
            src="/images/events/edo-in-eko.jpg"
            alt="hero"
            className="w-full h-80 sm:h-96 object-contain rounded-md"
          />
        </div>

        {/* content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 mt-8">
          {/* left (event info) */}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm text-gray-600">Tue 30 Sep 2025, 2:00 PM</h4>
            <h2 className="text-2xl md:text-3xl font-bold text-blue-600">
              Edo in Eko with MC Edo Pikin
            </h2>
            <p className="text-sm md:text-base text-gray-700">
              Nigeria's Most Fashionable Model Season 5 — THEMED: THE FUTURISM. A runway modelling contest open to both male and female models.
            </p>
            <p className="text-sm md:text-base text-gray-700">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis asperiores adipisci distinctio pariatur, error reiciendis at corporis vero magni! Vero culpa, ut harum amet odit voluptatum dolores libero qui quibusdam.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 text-sm">
              <div className="bg-white text-black p-4 rounded-md shadow-sm border">
                <div className="text-gray-500">Time</div>
                <div className="mt-1">
                  Tue 30 Sep 2025
                  <div className="text-lg font-semibold">2:00 PM - 10:00 PM</div>
                </div>
              </div>

              <div className="bg-white text-black p-4 rounded-md shadow-sm border">
                <div className="text-gray-500">Venue</div>
                <div className="mt-1">
                  Victoria Island, Lagos
                  <div className="text-lg font-semibold">Venue details</div>
                </div>
              </div>
            </div>
          </div>

          {/* right (ticket controls) */}
          <div className="space-y-4">
            {/* Ticket card (Regular) */}
            <div className="p-4 rounded-lg border border-gray-200 hover:text-black hover:bg-slate-50 flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-sm font-semibold text-gray-700">Regular</div>
                <div className="text-xl font-bold">N20,000</div>
              </div>

              <div className="mt-3 sm:mt-0 flex items-center gap-3">
                <button
                  aria-label="Decrease regular"
                  onClick={regularDecrement}
                  className="text-black w-10 h-10 flex items-center justify-center rounded-md bg-slate-200 hover:bg-slate-300"
                >
                  −
                </button>
                <div className="min-w-[36px] text-center font-semibold text-lg">{regularCount}</div>
                <button
                  aria-label="Increase regular"
                  onClick={regularIncrement}
                  className="text-black w-10 h-10 flex items-center justify-center rounded-md bg-slate-200 hover:bg-slate-300"
                >
                  +
                </button>
              </div>
            </div>

            {/* Ticket card (VIP) */}
            <div className="p-4 rounded-lg border border-gray-200 hover:text-black hover:bg-slate-50 flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-sm font-semibold text-gray-700">VIP</div>
                <div className="text-xl font-bold">N50,000</div>
              </div>

              <div className="mt-3 sm:mt-0 flex items-center gap-3">
                <button
                  aria-label="Decrease vip"
                  onClick={vipDecrement}
                  className="text-black w-10 h-10 flex items-center justify-center rounded-md bg-slate-200 hover:bg-slate-300"
                >
                  −
                </button>
                <div className="min-w-[36px] text-center font-semibold text-lg">{vipCount}</div>
                <button
                  aria-label="Increase vip"
                  onClick={vipIncrement}
                  className="text-black w-10 h-10 flex items-center justify-center rounded-md bg-slate-200 hover:bg-slate-300"
                >
                  +
                </button>
              </div>
            </div>

            {/* Ticket card (Table for 5) */}
            <div className="p-4 rounded-lg border border-gray-200 hover:text-black hover:bg-slate-50 flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-sm font-semibold text-gray-700">Table for 5</div>
                <div className="text-xl font-bold">N100,000</div>
              </div>

              <div className="mt-3 sm:mt-0 flex items-center gap-3">
                <button
                  aria-label="Decrease table"
                  onClick={otherDecrement}
                  className="text-black w-10 h-10 flex items-center justify-center rounded-md bg-slate-200 hover:bg-slate-300"
                >
                  −
                </button>
                <div className="min-w-[36px] text-center font-semibold text-lg">{otherCount}</div>
                <button
                  aria-label="Increase table"
                  onClick={otherIncrement}
                  className="text-black w-10 h-10 flex items-center justify-center rounded-md bg-slate-200 hover:bg-slate-300"
                >
                  +
                </button>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <center>
                <button
                  className="w-full md:w-auto block bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-semibold text-center"
                  type="button"
                  onClick={handleGetTicket}
                >
                  Get Ticket
                </button>
              </center>
            </div>
          </div>
        </div>

        <TicketSection />

        {/* Modal */}
        {isModalOpen && (
          // Backdrop
          <div
            className="fixed inset-0 z-50 flex items-center justify-center"
            aria-hidden={!isModalOpen}
          >
            <div
              className="absolute inset-0 bg-black/50"
              onClick={handleCloseModal}
            />

            {/* Modal dialog */}
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="ticket-summary-title"
              className="relative z-10 w-full max-w-2xl mx-4 bg-white rounded-lg shadow-2xl overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <h3 id="ticket-summary-title" className="text-xl font-bold">
                    Ticket Summary
                  </h3>
                  <button
                    onClick={handleCloseModal}
                    aria-label="Close summary"
                    className="text-gray-500 hover:text-gray-700"
                  >
                    ✕
                  </button>
                </div>

                <div className="mt-4 space-y-4">
                  {/* Summary rows */}
                  <div className="flex items-center justify-between border-b pb-2">
                    <div>
                      <div className="text-sm font-semibold">Regular</div>
                      <div className="text-xs text-gray-500">{regularCount} × {formatNGN(PRICE_REGULAR)}</div>
                    </div>
                    <div className="text-right font-semibold">{formatNGN(subtotalRegular)}</div>
                  </div>

                  <div className="flex items-center justify-between border-b pb-2">
                    <div>
                      <div className="text-sm font-semibold">VIP</div>
                      <div className="text-xs text-gray-500">{vipCount} × {formatNGN(PRICE_VIP)}</div>
                    </div>
                    <div className="text-right font-semibold">{formatNGN(subtotalVip)}</div>
                  </div>

                  <div className="flex items-center justify-between border-b pb-2">
                    <div>
                      <div className="text-sm font-semibold">Table for 5</div>
                      <div className="text-xs text-gray-500">{otherCount} × {formatNGN(PRICE_TABLE)}</div>
                    </div>
                    <div className="text-right font-semibold">{formatNGN(subtotalTable)}</div>
                  </div>

                  <div className="flex items-center justify-between pt-3">
                    <div className="text-lg font-semibold">Total</div>
                    <div className="text-lg font-bold">{formatNGN(grandTotal)}</div>
                  </div>

                  {grandTotal === 0 && (
                    <div className="text-sm text-yellow-700 bg-yellow-50 p-3 rounded">
                      You haven't selected any tickets yet. Please select at least one ticket.
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="mt-6 flex items-center justify-end gap-3">
                  <button
                    onClick={handleCloseModal}
                    className="px-4 py-2 rounded-md border hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleConfirm}
                    disabled={grandTotal === 0}
                    className={`px-4 py-2 rounded-md text-white ${grandTotal === 0 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
                  >
                    Confirm & Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
