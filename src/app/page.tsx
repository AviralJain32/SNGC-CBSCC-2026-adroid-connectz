import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import React from "react";
import { AuroraBackgroundDemo } from "./AroraBackground";
 

export default function Home() {
  return (
    <>
     <div className="min-h-screen bg-gradient-to-br from-white to-blue-100 text-gray-900">

     <AuroraBackgroundDemo/>
      {/* Header Section */}
      
      
      {/* About Us */}
      <section className="py-16 px-10 max-w-5xl mx-auto text-center bg-gradient-to-t from-blue-50 to-white rounded-xl shadow-xl mt-10">
        <h2 className="text-4xl font-bold">About the Conference</h2>
        <p className="mt-6 text-lg leading-relaxed">
        SNGC-CBSCC 2026 is organised with the objective of bringing together innovative scientists, professors, research scholars, students and industrial experts in the field of Sciences, Communication Technology Methods and Techniques to a common platform. The primary goal of the conference is to promote the exchange of innovative scientific information between researchers, developers, engineers, students, and practitioners. Overall the conference will provide the researchers and attendees with prospects for national and international collaboration and networking among universities and institutions from India and abroad for promoting research. SNGC-CBSCC 2026 will be jointly organized by Cardiff Metropolitan University, United Kingdom on 14th - 16th January 2026.

        </p>
      </section>
      
      {/* Academic Partners */}
      <section className="py-16 bg-gradient-to-l from-blue-100 to-blue-200 text-center text-gray-900 rounded-xl shadow-xl mt-10">
        <h2 className="text-4xl font-bold">SNGC-CBSCC Academic Partners</h2>
        <div className="flex flex-wrap justify-center mt-6 space-x-8">
          <img src="/images/Cardiff-Met-Logo.jpg" alt="Cardiff Metropolitan University" className="h-32 rounded-lg drop-shadow-lg" />
        </div>
      </section>
      
      {/* Important Dates, Downloads, and Notices */}
      <section className="py-16 px-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-900">
        {/* Important Dates */}
        <Card className="bg-gradient-to-br from-blue-50 to-blue-200 shadow-lg">
          <CardContent className="p-8">
            <h3 className="text-3xl font-semibold">Important Dates</h3>
            <ul className="mt-6 space-y-3 text-lg">
              <li>Submission Deadline: 1st September 2025</li>
              <li>Notification of Acceptance: 15th October 2025</li>
              <li>Final Paper Submission: 15th November 2025</li>
            </ul>
          </CardContent>
        </Card>
        
        {/* Downloads */}
        <Card className="bg-gradient-to-br from-blue-50 to-blue-200 shadow-lg">
          <CardContent className="p-8">
            <h3 className="text-3xl font-semibold">Downloads</h3>
            <ul className="mt-6 space-y-3">
              <li><Button variant="link" className="text-blue-700">Call for Papers</Button></li>
              <li><Button variant="link" className="text-blue-700">Conference Brochure</Button></li>
              <li><Button variant="link" className="text-blue-700">Submission Guidelines</Button></li>
            </ul>
          </CardContent>
        </Card>
        
        {/* Notices */}
        <Card className="bg-gradient-to-br from-blue-50 to-blue-200 shadow-lg">
          <CardContent className="p-8">
            <h3 className="text-3xl font-semibold">Notices</h3>
            <ul className="mt-6 space-y-3 text-lg">
              <li>Registration Opens: 1st August 2025</li>
              <li>Early Bird Registration Deadline: 30th October 2025</li>
            </ul>
          </CardContent>
        </Card>
      </section>
    </div>
    </>
  );
}
