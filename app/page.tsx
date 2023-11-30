import React, { useRef } from 'react';
import { marked } from 'marked';
import * as cheerio from 'cheerio';

import HomePage from './components/pages/HomePage';


export default async function Home() {
  return (
    <main>
      <HomePage />
    </main>
  )
}
