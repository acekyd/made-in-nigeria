import React, { useRef } from 'react';
import { marked } from 'marked';
import * as cheerio from 'cheerio';

import HomePage from './components/pages/HomePage';

async function getData() {
  const res = await fetch('https://raw.githubusercontent.com/acekyd/made-in-nigeria/master/README.MD')


  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  const markdownData = await res.text();

  const html = marked(markdownData);

  // write a script to parse html string to select all ul > li elements
  // and then create an array of objects with the data

  const $ = cheerio.load(html); // load the html string into cheerio

  // Select all <li> elements using jQuery-like syntax and extract their text
const liTextArray = $('li').map((index, element) => $(element).html()).get();


  console.log("Wahala", liTextArray);

  return res;
}

export default async function Home() {
  const data = await getData();
  return (
    <main>
      <HomePage />
    </main>
  )
}
