"use client";

import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { eq } from "drizzle-orm";
import { Lightbulb, WebcamIcon } from "lucide-react";

import React, { useState, useEffect } from "react";

import Webcam from "react-webcam";
import Link from "next/link";

function Interview({ params }) {
  // Unwrap the params using React.use()
  const unwrappedParams = React.use(params); // Use React.use() to unwrap the params

  const interviewId = unwrappedParams ? unwrappedParams.interviewId : null;
  const [interviewData, setInterviewData] = useState(null);
  const [webCamEnabled, setWebCamEnabled] = useState(false);

  useEffect(() => {
    if (interviewId) {
      console.log("Interview ID:", interviewId);
      GetInterviewDetails();
    }
  }, [interviewId]);

  const GetInterviewDetails = async () => {
    const result = await db
      .select()
      .from(MockInterview)
      .where(eq(MockInterview.mockId, interviewId));

    if (result.length > 0) {
      setInterviewData(result[0]);
      console.log("Interview Data:", result[0]);
    } else {
      console.error("No interview data found for ID:", interviewId);
    }
  };

  return (
    <div className="my-10">
      <h2 className="font-bold text-2xl">Let's Get Started</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col my-5 gap-3 p-5">
          {interviewData ? (
            <>
              <div className="flex flex-col p-5 rounded-lg border">
                <h2 className="text-lg">
                  <strong>Job Role/Job Position: </strong>
                  {interviewData.jobPosition}
                </h2>
                <h2 className="text-lg">
                  <strong>Job Description/Tech Stack: </strong>
                  {interviewData.jobDesc}
                </h2>
                <h2 className="text-lg">
                  <strong>Year of Experience: </strong>
                  {interviewData.jobExperience}
                </h2>
              </div>

              <div className="p-5 border rounded-lg border-yellow-300 bg-yellow-200">
                <h2 className="flex gap-2 items-center text-yellow-500">
                  <Lightbulb />
                  <strong>Information</strong>
                </h2>
                <h2 className="mt-3 text-yellow-500">
                  {process.env.NEXT_PUBLIC_INFORMATION}
                </h2>
              </div>
            </>
          ) : (
            <div>Loading interview details...</div>
          )}
        </div>

        <div>
          {webCamEnabled ? (
            <Webcam
              // audio={true}
              onUserMedia={() => setWebCamEnabled(true)}
              onUserMediaError={() => setWebCamEnabled(false)}
              mirrored={true}
              style={{ height: 500, width: 500 }}
            />
          ) : (
            <>
              <WebcamIcon className="h-72 my-7 w-full p-20 bg-secondary rounded-lg border" />
              <Button
                className="w-full"
                type="button"
                onClick={() => setWebCamEnabled(true)}
              >
                Enable Web Cam And Microphone
              </Button>
            </>
          )}
        </div>
      </div>

      <div className="flex justify-end items-end">
        <Link href={`/dashboard/interview/${interviewId}/start`}>
          <Button>Start Interview</Button>
        </Link>
      </div>
    </div>
  );
}

export default Interview;
