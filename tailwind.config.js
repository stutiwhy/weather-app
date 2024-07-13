/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      green_thing:"#2C423F",
      lightbrown_thing:"#8D5B4C",
      grey_thing:"#EDEDED",
      darkbrown_thing:"#5A2A27",
      white_thing:"#EEEBD3",
      wine: "#6A2E35",
      gunmetal: "#19323C",
      mint_cream: "#F3F7F0",
      spring_green: "#306B34",
      reseda_green: "#73877B",
      eggplant: "#533B4D",
      orchid: "#E07BE0",
      burnt_sienna: "#E76F51",
      shampayne: "#FAE3C6",
      blue_thing: "#6B87B7",
      lightpurple_thing: "#816786"

    },
    extend: {
      fontFamily: {
        acme: ["Acme"],
        freeman: ["Freeman"]
        
      }
    },
  },
  plugins: [],
}

