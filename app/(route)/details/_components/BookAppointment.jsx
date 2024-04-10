"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { CalendarDays, Clock } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  DialogFooter,
} from "@/components/ui/dialog";

function BookAppointment() {
  const [date, setDate] = useState();
  const [timeSlot, setTimeSlot] = useState([]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState();

  useEffect(() => {
    getTime();
  }, []);

  const getTime = () => {
    const timeList = [];
    for (let i = 10; i <= 12; i++) {
      timeList.push({
        time: i + ":00 AM",
      });
      timeList.push({
        time: i + ":30 AM",
      });
    }
    for (let i = 1; i <= 6; i++) {
      timeList.push({
        time: i + ":00 PM",
      });
      timeList.push({
        time: i + ":30 PM",
      });
    }

    setTimeSlot(timeList);
  };

  const isPastDay = (day) => {
    return day < new Date();
  };

  return (
    <Dialog>
      <DialogTrigger>
        <Button className=" mt-3 rounded-full border border-primary hover:bg-white hover:text-primary transition-all ease-in-out">
          Book Appointment
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Book Appointment</DialogTitle>
          <DialogDescription>
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-4">
                {/* Calendar */}
                <div className=" col-span-1 flex flex-col">
                  <h2 className=" flex flex-row gap-2 mb-1 mt-1 items-center">
                    <CalendarDays className=" text-primary h5 w-5" />
                    Select Date
                  </h2>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={isPastDay}
                    className="rounded-md border"
                  />
                </div>
                {/* Time Slot */}
                <div className="flex flex-col justify-center ">
                  <h2 className=" flex flex-row items-center gap-2 mb-1">
                    <Clock className=" text-primary h-5 w-5" />
                    Select Time
                  </h2>
                  <div className="grid grid-cols-3 gap-2 border rounded-lg p-4">
                    {timeSlot?.map((item, index) => (
                      <h2
                        onClick={() => setSelectedTimeSlot(item.time)}
                        className={` p-2 border rounded-full text-center hover:bg-primary hover:text-white transition-all ease-in-out ${
                          item.time == selectedTimeSlot &&
                          "bg-primary text-white"
                        }`}
                      >
                        {item.time}
                      </h2>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <>
              <Button className='text-red-500 border-red-500' type="button" variant="outline">
                Close
              </Button>
              <Button type="button">Submit</Button>
            </>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default BookAppointment;
