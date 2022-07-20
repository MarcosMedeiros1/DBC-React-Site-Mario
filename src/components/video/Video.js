import styles from "./Video.module.css";

const Video = () => {
  const src = "https://www.youtube.com/embed/lq5hlLaa16s";
  return (
    <section>
      <h1>Sobre a DBC</h1>
      <iframe
        className={styles.video}
        src={src}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </section>
  );
};

export default Video;
