/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 p-6 md:p-12 lg:p-20 font-sans">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto space-y-8"
      >
        <header className="text-center space-y-2">
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-stone-900">
            महादेव की सबसे शक्तिशाली स्तुति
          </h1>
          <p className="text-xl text-stone-600 italic">सुनते ही मन शांत हो जाएगा</p>
        </header>

        <section className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-stone-100 space-y-6 text-lg leading-relaxed">
          <p>
            देवों के देव महादेव की यह दिव्य और शक्तिशाली स्तुति आपके मन, आत्मा और जीवन में सकारात्मक ऊर्जा का संचार करती है। भगवान शिव को करुणा, त्याग, शक्ति और कल्याण का प्रतीक माना जाता है।
          </p>
          <p>
            सच्चे मन से उनकी स्तुति और "ॐ नमः शिवाय" मंत्र का जाप करने से मन की अशांति दूर होती है, नकारात्मक विचार समाप्त होते हैं और आत्मिक शांति का अनुभव होता है। यह पावन स्तुति हर भक्त के हृदय में भक्ति, विश्वास और साहस जगाती है।
          </p>
          <p>
            यदि आप तनाव, चिंता या जीवन की कठिनाइयों से गुजर रहे हैं, तो प्रतिदिन सुबह या संध्या इस शिव स्तुति का श्रवण करें। महादेव की कृपा से मन को शांति, परिवार में सुख-समृद्धि और जीवन में नई ऊर्जा का अनुभव हो सकता है। भोलेनाथ अपने भक्तों की सच्ची प्रार्थना अवश्य सुनते हैं और उन्हें सही मार्ग दिखाते हैं।
          </p>
        </section>

        <footer className="text-center space-y-4 pt-8">
          <p className="text-2xl font-medium text-stone-900 tracking-wide">
            हर हर महादेव! ॐ नमः शिवाय।
          </p>
          <div className="flex gap-4 justify-center text-sm text-stone-500 font-mono">
            <span>Like</span>
            <span>•</span>
            <span>Share</span>
            <span>•</span>
            <span>Subscribe</span>
          </div>
        </footer>
      </motion.div>
    </div>
  );
}
