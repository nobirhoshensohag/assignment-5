→ Assignment 05 all question answer:

★ প্রশ্ন ১ → উত্তর

getElementById("id")
১. Html এর একটি নির্দিষ্ট element কে id দিয়ে খুঁজে বের করে।
২. শুধুমাত্র একটি element ফেরত দেয়।
৩. একাধিক element খুঁজে বের করার জন্য ব্যবহারযোগ্য নয়।

getElementsByClassName("class")
১. Html এর একাধিক element কে class দিয়ে খুঁজে বের করতে পারে।
২. একাধিক element ফেরত দেয় (array-এর মতো object)।
৩. একাধিক element খুঁজে বের করার জন্য ব্যবহারযোগ্য।

querySelector("css selector")
১. CSS selector দিয়ে element খুঁজে বের করে।
২. একাধিক মিল থাকলেও শুধু প্রথম element ফেরত দেয়।
৩. ছোট কাজে উপযুক্ত, তবে বড় পরিসরে সুবিধাজনক নয়।

querySelectorAll("css selector")
১. CSS selector দিয়ে element খুঁজে বের করে।
২. একাধিক মিল থাকলে সব element ফেরত দেয় (array-এর মতো)।
৩. বড় পরিসরে ব্যবহার করা তেমন সুবিধাজনক নয়।

★ প্রশ্ন ২ → উত্তর

১. প্রথমে একটি ভ্যারিয়েবল নিয়ে যেখানে element বসাতে চাই তা খুঁজে বের করতে হবে।
২. এরপর আরেকটি ভ্যারিয়েবল নিয়ে নতুন একটি element তৈরি করতে হবে।
৩. তৈরি করা element এ কনটেন্ট যোগ করতে হবে।
৪. নির্দিষ্ট জায়গায় append করতে হবে।

★ প্রশ্ন ৩ → উত্তর

Event Bubbling:
যখন কোনো child element এ event ঘটে, তখন event টি প্রথমে সেই element এ কাজ করে, তারপর ধাপে ধাপে তার parent → তার parent → document পর্যন্ত উপরে ওঠে। একে Event Bubbling বলে।

★ প্রশ্ন ৪ → উত্তর

Event Delegation:

Event Delegation হলো এমন একটি পদ্ধতি যেখানে প্রতিটি child element এ আলাদা event listener না বসিয়ে, parent element এ একটি মাত্র event listener বসানো হয়।

এরপর Event Bubbling এর মাধ্যমে নির্দিষ্ট child element এর event ধরা হয়।

সুবিধা:
১. কোড ছোট ও গোছানো হয়।
২. ব্রাউজারের performance ভালো থাকে।

★ প্রশ্ন ৫ → উত্তর

preventDefault() → এটি ব্রাউজারের default behaviour বন্ধ করতে ব্যবহৃত হয়।

stopPropagation() → এটি Event Bubbling বন্ধ করার জন্য ব্যবহৃত হয় যাতে event আর parent element পর্যন্ত propagate করতে না পারে।
