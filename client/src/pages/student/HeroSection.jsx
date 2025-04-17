import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const quotes = [
  "Success doesn't come to you, you go to it.",
  "Believe in yourself and all that you are.",
  "Push yourself, because no one else is going to do it for you.",
  "Don’t watch the clock; do what it does. Keep going.",
  "The expert in anything was once a beginner.",
  "Doubt kills more dreams than failure ever will.",
  "Wake up with determination. Go to bed with satisfaction.",
  "Small steps every day lead to big results.",
  "Focus on the journey, not the destination.",
  "Education is the passport to the future.",
  "Your only limit is your mind.",
  "Learning is a treasure that will follow its owner everywhere.",
  "Study now, be proud later.",
  "You don’t have to be perfect to be amazing.",
  "Dream big. Work hard. Stay focused.",
  "It always seems impossible until it’s done.",
  "Hard work beats talent when talent doesn't work hard.",
  "Don’t let what you cannot do interfere with what you can do.",
  "Start where you are. Use what you have. Do what you can.",
  "Be stronger than your excuses.",
  "If you can dream it, you can do it.",
  "Learn as if you will live forever.",
  "Strive for progress, not perfection.",
  "Education is not preparation for life; education is life itself.",
  "Success is the sum of small efforts repeated day in and day out.",
  "Your future is created by what you do today, not tomorrow.",
  "Winners are not people who never fail, but people who never quit.",
  "Don’t limit your challenges. Challenge your limits.",
  "A little progress each day adds up to big results.",
  "Discipline is doing what needs to be done even when you don’t feel like doing it.",
  "You are capable of amazing things.",
  "Focus on being productive instead of busy.",
  "Success is not for the lazy.",
  "Failure is not the opposite of success. It’s part of success.",
  "Action is the foundational key to all success.",
  "Turn your wounds into wisdom.",
  "Every accomplishment starts with the decision to try.",
  "Be the energy you want to attract.",
  "Dreams don’t work unless you do.",
  "Don’t be afraid to fail. Be afraid not to try.",
  "You learn something every day if you pay attention.",
  "Success is no accident. It is hard work and learning.",
  "Do one thing every day that scares you.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "Stay hungry. Stay foolish.",
  "The secret of getting ahead is getting started.",
  "You miss 100% of the shots you don’t take.",
  "Pain is temporary. GPA is forever.",
  "There is no substitute for hard work.",
  "Keep going. You’re getting there.",
];

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [randomQuote, setRandomQuotes] = useState("");
  const [fade, setFade] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const changeQuoteSmoothly = () => {
      setFade(false); // Start fade-out
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setRandomQuotes(quotes[randomIndex]);
        setFade(true); // Start fade-in
      }, 1000); // Wait for fade-out to finish
    };

    changeQuoteSmoothly(); // Initial quote

    const interval = setInterval(changeQuoteSmoothly, 7000); // Every 20s

    return () => clearInterval(interval);
  }, []);

  const searchHandler = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      navigate(`/course/search?query=${searchQuery}`);
    }
    setSearchQuery("");
  };

  return (
    <div className="relative bg-gradient-to-r from-blue-500 to bg-indigo-600 dark:from-gray-800 dark:to-gray-900 py-20 px-4 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-white text-4xl font-bold mb-4">
          Find the Best Courses for You
        </h1>
        <p className="text-gray-200 dark:text-gray-400 mb-8">
          Discover, Learn, and Upskill with our wide range of courses
        </p>

        <form
          onSubmit={searchHandler}
          className="flex items-center bg-white dark:bg-gray-800 rounded-full shadow-lg overflow-hidden max-w-xl mx-auto mb-6"
        >
          <Input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Courses"
            className="flex-grow border-none focus-visible:ring-0 px-6 py-3 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
          />
          <Button
            type="submit"
            className="bg-blue-600 dark:bg-blue-700 text-white px-6 py-3 rounded-r-full hover:bg-blue-700 dark:hover:bg-blue-800"
          >
            Search
          </Button>
        </form>
        <Button
          onClick={() => navigate(`/course/search?query`)}
          className="bg-white dark:bg-gray-800 text-blue-600 rounded-full hover:bg-gray-200"
        >
          Explore Courses
        </Button>
        <p
          className={`mt-5 font-bold text-xl text-gray-200  dark:text-gray-300 font-serif  transition-opacity duration-1000 ${
            fade ? "opacity-100" : "opacity-5"
          }`}
        >
          "{randomQuote}"
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
