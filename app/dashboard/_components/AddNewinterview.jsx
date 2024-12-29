"use client";
import { v4 as uuidv4 } from 'uuid';
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { chatSession } from "@/utils/GeminiAIModal";
import { LoaderCircle } from "lucide-react";
import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { uuid } from "drizzle-orm/pg-core";
import {useUser} from '@clerk/nextjs'

import moment from 'moment'
import { useRouter } from 'next/navigation';

function AddNewinterview() {
  const [openDialog, setOpenDialog] = useState(false);
  const [jobPosition, setjobPosition] = useState("");
  const [jobDesc, setjobDesc] = useState("");
  const [jobExperience, setjobExperience] = useState();
  const [jsonResponse,setjsonResponse] =useState([]);
  const {user}  = useUser();
  const router = useRouter()

  const [Loading , setLoading] = useState(false)

   const onSubmit =async (e)=>{
    setLoading(true)
    event.preventDefault();
    console.log(jobDesc , jobExperience ,jobPosition);
    
    const InputPromt = "Job position: "+jobPosition+" , Job Description: "+jobDesc+", Year of Experience : "+jobExperience+",Depends on Job Position , Job Description & Year of Experience give us "+process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT+" interview question along with Answer in JSON format Give us question and answer field on JSON"

    const result = await chatSession.sendMessage(InputPromt)

    const MoskJsonResp = (result.response.text()).replace('```json' , '').replace('```','')

     const parsedResponse = JSON.parse(MoskJsonResp);
    console.log(JSON.parse(MoskJsonResp))
    setjsonResponse(MoskJsonResp)

    if(MoskJsonResp){
     
      if (!parsedResponse) {
        console.error("Invalid or null JSON response.");
        return; // Exit the function to prevent a database error
      }

      if (parsedResponse) {
        const result = await db.insert(MockInterview).values({
          mockId: uuidv4(),
          jsonMockResp: JSON.stringify(parsedResponse),
          jobPosition,
          jobDesc,
          jobExperience,
          createdBy: user?.primaryEmailAddress?.emailAddress,
          createdAt: moment().format('DD-MM-YYYY'),
        }).returning({mockId:MockInterview.mockId})
    
        console.log("Inserted Record:", result);

        if(result){
          setOpenDialog(false);
          router.push(`/dashboard/interview/${result[0].mockId}`);
        }

    
      } else {
        console.error("No valid JSON response to insert into the database.");
      }
      
    setLoading(false)

   }
  }

  return (
    <div>
      <div
        className="p-10 border rounded-lg bg-secondary hover:scale-105 hover:shadow-md cursor-pointer transition-all"
        onClick={() => setOpenDialog(true)}
      >
        <h2 className="text-lg text-center">+ Add New</h2>
      </div>

      <Dialog open={openDialog}>
        <DialogContent className ="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">Tell us more about your job Interviewing</DialogTitle>
          </DialogHeader>
          <div className="text-sm text-muted-foreground">
            <form onSubmit={onSubmit}>
             <div>
                
                <h2 >Add Details about your job position/role , Job description and years of experience </h2>
                <div className="mt-7 my-3">
                    <label >Job Role/Job Position</label>
                    <Input placeholder="Ex.Full Stack Developer" className="mt-1"
                    onChange={(event )=>setjobPosition(event.target.value)}
                    required></Input>
                </div>


                <div className="mt-3">
                    <label >Job Description /Tech Stack (In Short)</label>
                    <Textarea placeholder="Ex. React , Angular , NodeJs , MySql etc" className="mt-1"
                     onChange={(event )=>setjobDesc(event.target.value)}
                    required></Textarea>
                </div>

                <div className="my-3">
                    <label >Years of experience</label>
                    <Input placeholder="Ex. 5" className="mt-1" max="50" type='number'
                     onChange={(event )=>setjobExperience(event.target.value)}
                    required></Input>
                </div>

             </div>
            <div className="flex gap-5 justify-end mt-4">
              <Button  type="button" variant="ghost" onClick={() => setOpenDialog(false)}>
                Cancel
              </Button>
              <Button type="submit" disabled={Loading}>
                {Loading?
                <>
                 <LoaderCircle className="animate-spin"/>'Generating from AI'
                </>:'Start Interview'
               }
               </Button>
            </div>
            </form>
          </div>

        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddNewinterview;