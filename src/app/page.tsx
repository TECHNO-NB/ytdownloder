"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import { MdFileDownload } from "react-icons/md";

const Page: React.FC = () => {
  const [url, setUrl] = useState<string>("");
  const [newurl, setNewUrl] = useState<string>("");

  const fetchVideo = async () => {
    if(url==="") return ;
    const defaultUrl = "https://img.youtube.com/vi/";
 let videoId = url.replace("https://youtu.be/", "");
    videoId = videoId.split("?")[0];
    const newLink = `${defaultUrl}${videoId}/hqdefault.jpg`;
    setNewUrl(newLink);
    const atag = document.createElement("a");
    atag.href = newLink;
    atag.download = "hqdefault";
   
  };

  return (
    <div className="flex flex-col items-center pt-20 text-center h-[90vh] w-[100vw] text-white sm:pt-36 px-1">
      <h1 className="text-5xl sm:text-6xl">
        <span className="text-[#FF0000]">YOUTUBE</span> VIDEO DOWNLOADER
      </h1>
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
          Download
          <MdFileDownload className="text-white text-xl bg-red-500" />
        </Button>
      </div>

      {newurl && (
        <div className="mt-4 flex items-center justify-center  px-1 py-1">
          <img className="w-96 h-max content-center" src={newurl} alt="thumbnail" />
        </div>
      )}
    </div>
  );
};

export default Page;
