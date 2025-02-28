import { Dispatch, FormEvent, SetStateAction, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = ({
  setActiveSection,
}: {
  setActiveSection: Dispatch<SetStateAction<string>>;
}) => {
  useEffect(() => {
    setActiveSection("contact");
  }, [setActiveSection]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get in Touch
        </motion.h2>
        <motion.form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-semibold mb-2"
            >
              Name
            </label>
            <Input
              type="text"
              id="name"
              name="name"
              required
              className="w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              Email
            </label>
            <Input
              type="email"
              id="email"
              name="email"
              required
              className="w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 font-semibold mb-2"
            >
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              required
              className="w-full h-32"
            />
          </div>
          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
