import Head from "next/head";
import MemeGallery from "../components/MemeGallery";

const Home = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
        <title>Meme Gallery</title>
      <h1> My Meme Gallery</h1>
      <MemeGallery />
    </div>
  );
};

export default Home;
