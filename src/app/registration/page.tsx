import React from "react";
import ApplicationForm from "@/components/ApplicationForm";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RegistrationPage() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-slate-50 via-sky-50/30 to-slate-50 relative overflow-x-hidden flex flex-col font-inter">
      
      {/* Refined Background Lighting */}
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-300/10 rounded-full blur-[100px] -z-10 pointer-events-none" />
      <div className="fixed right-[-10%] bottom-[10%] w-[600px] h-[600px] bg-purple-300/15 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="fixed left-[-10%] top-[10%] w-[500px] h-[500px] bg-sky-300/15 rounded-full blur-[100px] -z-10 pointer-events-none" />
      
      {/* Global Navigation */}
      <Header />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col items-center pb-12 w-full relative z-10">
        <ApplicationForm />
      </div>

      {/* Global Footer */}
      <Footer />
    </main>
  );
}
