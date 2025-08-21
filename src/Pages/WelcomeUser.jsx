// // WelcomeUser.js
// export const welcomeUser = (name) => {
//   if (!name) return;

//   const message = `Welcome ${name}`;
//   const utterance = new SpeechSynthesisUtterance(message);
//   utterance.lang = "en-US"; // চাইলে "bn-BD" দিলে বাংলা হবে
//   window.speechSynthesis.speak(utterance);
// };



// // WelcomeUser.js
// export const welcomeUser = (name) => {
//   if (!name) return;

//   const message = `Welcome ${name}`;
//   const utterance = new SpeechSynthesisUtterance(message);

//   // Female voice pick করার জন্য
//   const voices = window.speechSynthesis.getVoices();
//   // সাধারণত "Google UK English Female" বা "Microsoft Zira Desktop - English (United States)" female voice
//   const femaleVoice = voices.find(
//     (voice) =>
//       voice.name.toLowerCase().includes("female") || 
//       voice.name.toLowerCase().includes("zira")
//   );

//   if (femaleVoice) {
//     utterance.voice = femaleVoice;
//   }

//   utterance.lang = "en-US"; // চাইলে bn-BD করে বাংলা voice দিতে পারবেন
//   window.speechSynthesis.speak(utterance);
// };



// WelcomeUser.js
export const welcomeUser = (name) => {
  if (!name) return;

  const message = `স্বাগতম ${name}, Fire Ground BD-তে আসার জন্য ধন্যবাদ। আশা করি আপনার সফর ভালো হবে।`;
  const utterance = new SpeechSynthesisUtterance(message);

  // Female voice pick করার চেষ্টা
  const voices = window.speechSynthesis.getVoices();
  const femaleVoice = voices.find(
    (voice) =>
      voice.name.toLowerCase().includes("female") ||
      voice.name.toLowerCase().includes("zira")
  );

  if (femaleVoice) {
    utterance.voice = femaleVoice;
  }

  utterance.lang = "bn-BD"; // বাংলা voice
  window.speechSynthesis.speak(utterance);
};
