"use client";

import React, { useEffect, useState } from "react";
import TicketSection from "@/components/Home/TicketSection";

export default function HeroWithCard({ id }: { id: string }) {
  const [regularCount, setCount] = useState(0);
  const [vipCount, setVipCount] = useState(0);
  const [otherCount, setOtherCount] = useState(0);
  const [isModalOpen, setModalOpen] = useState(false);

  const PRICE_REGULAR = 20000;
  const PRICE_VIP = 50000;
  const PRICE_TABLE = 100000;

  const subtotalRegular = regularCount * PRICE_REGULAR;
  const subtotalVip = vipCount * PRICE_VIP;
  const subtotalTable = otherCount * PRICE_TABLE;
  const grandTotal = subtotalRegular + subtotalVip + subtotalTable;

  const formatNGN = (value: number) =>
    value.toLocaleString("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    });

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "";
  }, [isModalOpen]);

  return (
    <div className="pt-36">
      {/* You can use the id here */}
      <h1 className="hidden">Event ID: {id}</h1>

      {/* --- REST OF YOUR JSX GOES HERE (UNCHANGED) --- */}
      <TicketSection />
    </div>
  );
}
