
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-4 md:p-10">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">The Investor's Signal</h1>
        <p className="text-lg">Reliable, algorithm-driven trading signals straight from MT5.</p>
      </header>

      <section className="grid md:grid-cols-3 gap-6 mb-10">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">How It Works</h2>
            <p>
              Subscribe to gain access to a read-only MT5 demo account managed by our algorithm.
              Copy trades manually or with your own copier — your account remains 100% in your control.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Pricing</h2>
            <p>
              Access all our signals for a simple monthly subscription. No contracts. Cancel anytime.
            </p>
            <ul className="mt-4 list-disc pl-5">
              <li>R150/month (starter)</li>
              <li>R250/month (pro trader)</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Register</h2>
            <p>
              Click the button below to register and receive signal access instructions.
            </p>
            <Button className="mt-4">Register Now</Button>
          </CardContent>
        </Card>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">About Us</h2>
        <p>
          The Investor's Signal was built after 3 years of algorithm development and market testing.
          We believe in empowering traders with data, not dreams. No false promises — just clean, visible signal logic.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p>WhatsApp: +27 XX XXX XXXX</p>
        <p>Instagram: @theinvestorssignal</p>
        <p>Email: info@theinvestorssignal.co.za</p>
      </section>

      <footer className="text-center text-sm text-gray-500 mt-10">
        <p>&copy; 2025 The Investor's Signal. All rights reserved.</p>
        <p className="mt-2">
          Disclaimer: We do not offer financial advice. Signals are informational only. Trade at your own risk.
        </p>
      </footer>
    </div>
  );
}
