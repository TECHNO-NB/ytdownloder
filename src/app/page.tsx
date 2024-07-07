"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import { MdFileDownload } from "react-icons/md";

const Page: React.FC = () => {
  const [url, setUrl] = useState<string>("");
  const [newurl, setNewUrl] = useState<string>("");

  const fetchVideo = async () => {
    const defaultUrl = "https://img.youtube.com/vi/";

    // Extract video id from the YouTube URL
    let videoId = url.replace("https://youtu.be/", "");

    videoId = videoId.split("?")[0];

    const newLink = `${defaultUrl}${videoId}/hqdefault.jpg`;
    setNewUrl(newLink);
    const atag=document.createElement("a");
    atag.href=newLink;
    atag.download="hqdefault";
    atag.click();

    
  };

  return (
    <div className="flex flex-col items-center pt-36 text-center h-[90vh] text-white">
      <h1 className="text-2xl sm:text-6xl">YOUTUBE VIDEO DOWNLOADER</h1>
      <div className="text-1xl mt-1 sm:text-4xl">
        <Typewriter
          options={{
            strings: ["Download Videos And Thumbnail.."],
            autoStart: true,
            loop: true,
            delay: 0,
          }}
        />
      </div>

      <div className="input mt-6 flex gap-2 items-center justify-center">
        <input
          className="border-2 p-2 w-[15em] rounded-lg sm:w-[30em]"
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Paste Youtube Video Url..."
        />

        <Button onClick={fetchVideo} variant={"destructive"}>
          Download<MdFileDownload className="text-white text-xl bg-red-500" />
        </Button>
      </div>

      {newurl && (
        <div className="mt-4">
          <img src={newurl} alt="thumbnail" />
        </div>
      )}
    </div>
  );
};

export default Page;
