"use client";

import React, { useRef, useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef(null);

  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.target);
    const data = {
      name: formData.get("username"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      toast.success("Message sent successfully!");
      setIsOpen(false);
      formRef.current.reset();
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-full shadow-lg hover:shadow-blue-500/25 hover:-translate-y-1 transition-all z-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        aria-label={isOpen ? "Close chatbot" : "Open chatbot"}
      >
        {isOpen ? <X /> : <MessageCircle />}
      </button>

      {isOpen && (
        <div
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
          className="fixed bottom-20 right-6 md:bottom-24 md:right-10 bg-card border border-border p-6 rounded-2xl shadow-2xl w-80 md:w-96 z-40"
        >
          <div className="text-xl font-bold mb-1 text-foreground">
            Get in Touch
          </div>
          <div className="text-sm font-medium mb-6 text-muted-foreground">
            I&apos;d love to hear from you!
          </div>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            <div>
              <Label htmlFor="name" className="text-foreground">
                Full Name
              </Label>
              <Input
                type="text"
                id="name"
                name="username"
                className="mt-2 bg-background border-border focus:border-primary placeholder:text-muted-foreground"
                placeholder="Your Name"
                required
                aria-required="true"
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-foreground">
                Email
              </Label>
              <Input
                type="email"
                id="email"
                name="email"
                className="mt-2 bg-background border-border focus:border-primary placeholder:text-muted-foreground"
                placeholder="Your Email ID"
                required
                aria-required="true"
              />
            </div>

            <div>
              <Label htmlFor="msg" className="text-foreground">
                Message
              </Label>
              <Textarea
                placeholder="Type your message here"
                name="message"
                id="msg"
                className="mt-2 bg-background border-border focus:border-primary placeholder:text-muted-foreground resize-none"
                rows={4}
                required
                aria-required="true"
              />
            </div>

            <Button
              type="submit"
              className="mt-4 w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:opacity-90 transition-opacity text-white font-semibold py-2.5 rounded-lg shadow-md border-none"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;