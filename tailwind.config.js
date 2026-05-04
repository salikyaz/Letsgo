// /** @type {import('tailwindcss').Config} */
// module.exports = {
//     darkMode: ["class"],
//     content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//     "./public/index.html"
//   ],
//   theme: {
//   	extend: {
//   		borderRadius: {
//   			lg: 'var(--radius)',
//   			md: 'calc(var(--radius) - 2px)',
//   			sm: 'calc(var(--radius) - 4px)'
//   		},
//   		colors: {
//   			background: 'hsl(var(--background))',
//   			foreground: 'hsl(var(--foreground))',
//   			card: {
//   				DEFAULT: 'hsl(var(--card))',
//   				foreground: 'hsl(var(--card-foreground))'
//   			},
//   			popover: {
//   				DEFAULT: 'hsl(var(--popover))',
//   				foreground: 'hsl(var(--popover-foreground))'
//   			},
//   			primary: {
//   				DEFAULT: 'hsl(var(--primary))',
//   				foreground: 'hsl(var(--primary-foreground))'
//   			},
//   			secondary: {
//   				DEFAULT: 'hsl(var(--secondary))',
//   				foreground: 'hsl(var(--secondary-foreground))'
//   			},
//   			muted: {
//   				DEFAULT: 'hsl(var(--muted))',
//   				foreground: 'hsl(var(--muted-foreground))'
//   			},
//   			accent: {
//   				DEFAULT: 'hsl(var(--accent))',
//   				foreground: 'hsl(var(--accent-foreground))'
//   			},
//   			destructive: {
//   				DEFAULT: 'hsl(var(--destructive))',
//   				foreground: 'hsl(var(--destructive-foreground))'
//   			},
//   			border: 'hsl(var(--border))',
//   			input: 'hsl(var(--input))',
//   			ring: 'hsl(var(--ring))',
//   			chart: {
//   				'1': 'hsl(var(--chart-1))',
//   				'2': 'hsl(var(--chart-2))',
//   				'3': 'hsl(var(--chart-3))',
//   				'4': 'hsl(var(--chart-4))',
//   				'5': 'hsl(var(--chart-5))'
//   			}
//   		},
//   		keyframes: {
//   			'accordion-down': {
//   				from: {
//   					height: '0'
//   				},
//   				to: {
//   					height: 'var(--radix-accordion-content-height)'
//   				}
//   			},
//   			'accordion-up': {
//   				from: {
//   					height: 'var(--radix-accordion-content-height)'
//   				},
//   				to: {
//   					height: '0'
//   				}
//   			}
//   		},
//   		animation: {
//   			'accordion-down': 'accordion-down 0.2s ease-out',
//   			'accordion-up': 'accordion-up 0.2s ease-out'
//   		}
//   	}
//   },
//   plugins: [require("tailwindcss-animate")],
// };
/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./public/index.html"
    ],
    theme: {
        extend: {
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            colors: {
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))'
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))'
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))'
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))'
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                chart: {
                    '1': 'hsl(var(--chart-1))',
                    '2': 'hsl(var(--chart-2))',
                    '3': 'hsl(var(--chart-3))',
                    '4': 'hsl(var(--chart-4))',
                    '5': 'hsl(var(--chart-5))'
                }
            },
            backgroundImage: {
                // ✅ Custom #1E1033 gradients
                'purple-gradient': 'linear-gradient(180deg, #1E1033 0%, #3B1E5B 100%)',
                'purple-magenta-gradient': 'linear-gradient(135deg, #1E1033 0%, #6D28D9 100%)',
                'purple-teal-gradient': 'linear-gradient(120deg, #1E1033 40%, #0F766E 100%)',
                'purple-subtle-gradient': 'linear-gradient(90deg, #1E1033 0%, #2C1A4F 100%)',

                // Black purple  Gradient//
                 'black-gradient': 'linear-gradient(180deg, #000000 0%, #1A1A1A 100%)',
                 'black-purple-gradient': 'linear-gradient(135deg, #000000 0%, #1E1033 100%)',
                 'black-slate-gradient': 'linear-gradient(90deg, #000000 0%, #111827 100%)',
                 'black-radial-gradient': 'radial-gradient(circle at top, #1A1A1A 0%, #000000 60%)',

                 // Black White Gradient 
                 'black-white-gradient': 'linear-gradient(180deg, #000000 50%, #F5F5F5 50%)',
                 'black-gray-gradient': 'linear-gradient(135deg, #000000 0%, #E5E7EB 100%)',
                 'black-white-radial': 'radial-gradient(circle at center, #FFFFFF 0%, #D1D5DB 5%, #000000 100%)',
                 'black-white-horizontal': 'linear-gradient(90deg, #000000 0%, #FFFFFF 100%)',
 
                   //orange Gradient//
                 'orange-fire-gradient': 'linear-gradient(135deg, #FF2600 0%, #FF6A00 100%)',
                 'orange-depth-gradient': 'linear-gradient(180deg, #CC1F00 0%, #FF2600 100%)',
                 'orange-purple-gradient': 'linear-gradient(120deg, #FF2600 0%, #1E1033 100%)',
                 'orange-radial-gradient': 'radial-gradient(circle at center, #FF6A00 0%, #FF2600 55%, #B91C1C 100%)',  
            },


            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' }
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' }
                }
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out'
            }
        }
    },
    plugins: [require("tailwindcss-animate")],
};
