module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
        keyframes: {
            wiggle: {
                '0%': {
                    transform: 'translateY(-60px)'
                },
                '100%': {
                    transform: 'translateY(0px)'
                },
            },
            upp: {
              '0%': {
                  transform: 'translateY(0px)'
              },
              '100%': {
                  transform: 'translateY(-100px)'
              },
          }
        },
        animation: {
            down: 'wiggle 0.1s ease ',
            upp: 'upp 1.1s ease',
        }
    },
  },
  plugins: [],
}
