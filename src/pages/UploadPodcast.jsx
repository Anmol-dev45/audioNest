import React from "react";
import { PodcastForm, Container } from "../components";

const UploadPodcast = () => {
  return (
    <div className="py-12 md:px-8 mx-auto w-full max-w-4xl">
      <Container>
        <div>
          <h1 className="mb-6">Upload Podcast</h1>
          <PodcastForm />
        </div>
      </Container>
    </div>
  );
};

export default UploadPodcast;
