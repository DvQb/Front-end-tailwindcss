 /** @type {import('tailwindcss').Config} */
 export default {
    content: ["./src/**/*.{html,js}"],
      theme: {
        extend: {

          fontFamily: {
            'be-vietnam': ['"Be Vietnam Pro"', 'sans-serif'],
          },
          
          colors: {
            "Bright-Red": "#F25F3A",
            'Dark-Blue': 'hsl(228, 39%, 23%)',
            'Dark-Grayish-Blue': 'hsl(227, 12%, 61%)',
            'Very-Dark-Blue': 'hsl(233, 12%, 13%)',
            'Very-Pale-Red': 'hsl(13, 100%, 96%)',
            'Very-Light-Gray': 'hsl(0, 0%, 98%)',
  
          },
          backgroundImage: {

            'close-menu': "url('../img/icon-close.svg')",
            'open-menu': "url('../img/icon-hamburger.svg')",
          },
        },
       

        
      },
      plugins: [],
    }