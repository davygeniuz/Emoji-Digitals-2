/**
 * Emoji Digitals — Official Image Assets
 * All images sourced directly from Emoji Digitals Google Drive
 * No external/Unsplash images used anywhere on this site.
 */

/** Generate a Google Drive thumbnail URL */
export const gd = (id: string, sz = 800) =>
  `https://drive.google.com/thumbnail?id=${id}&sz=w${sz}`;

/**
 * All official Emoji Digitals image file IDs from Google Drive.
 * Folder: https://drive.google.com/drive/folders/1T4skg6tCXedZHQJqGlji27AFzNh0WpcH
 */
export const IMGS = {
  // Brand / Logo
  logo:   "182UVO8BPxiSt5cJGF-yw9IUPbZhmFYwN",

  // Portfolio / Design work (original)
  port1:  "1k-DTs5AeqZiaNrllThxwgtRK0Ln8OnMq",

  // New images from shared links
  img01:  "1JS_L2o77blB_9usTmjU-OF3jEs7j-dEG",
  img02:  "1NrsyBy-RfIvjA469hvpow1axqec6Hfw6",
  img03:  "1PgH9ARqgi5Ef0vRgGeHYidNOnSmRZaCd",
  img04:  "1QiahmTrZ7as0L67Gq0EfXafmJMCxtaPy",
  img05:  "1SHxV1fNNc6Em4f8WB4AclHxHEoiXZxN2",
  img06:  "1SaFX55mFJCRNv97I4xLBqBZ_R_NDpRfN",
  img07:  "1ZjVE_Xm_Q9WnZDQGUyNn1mvmsHva7mRT",
  img08:  "1cn4w3bekSCHzwwnZVUET7D7vgGLA388Y",
  img09:  "1eboKELQ66-PmYEJefZF4O3lJvtNigCU6",
  img10:  "1mDr13E8aLb9HyWkkA5pF6CdXvucfgsaY",
  img11:  "1smY4NaSjIN9sWwbx8JqugG-xvKwoXEcW",
  img12:  "1x7op2wrU2WYj6Pq9smqWr5tyeK1U4-Ke",
};

/** Pre-built URLs at common sizes */
export const IMG = {
  logo:   gd(IMGS.logo, 400),
  port1:  gd(IMGS.port1, 800),
  img01:  gd(IMGS.img01, 800),
  img02:  gd(IMGS.img02, 800),
  img03:  gd(IMGS.img03, 800),
  img04:  gd(IMGS.img04, 800),
  img05:  gd(IMGS.img05, 800),
  img06:  gd(IMGS.img06, 800),
  img07:  gd(IMGS.img07, 800),
  img08:  gd(IMGS.img08, 800),
  img09:  gd(IMGS.img09, 800),
  img10:  gd(IMGS.img10, 800),
  img11:  gd(IMGS.img11, 800),
  img12:  gd(IMGS.img12, 800),
};

/** All 14 images as an array for galleries/carousels */
export const ALL_IMGS = [
  IMGS.port1, IMGS.img01, IMGS.img02, IMGS.img03,
  IMGS.img04, IMGS.img05, IMGS.img06, IMGS.img07,
  IMGS.img08, IMGS.img09, IMGS.img10, IMGS.img11, IMGS.img12,
];
