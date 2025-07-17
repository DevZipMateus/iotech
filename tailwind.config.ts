
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
				display: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
				inter: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
			},
			maxWidth: {
				'8xl': '88rem',
				'9xl': '96rem',
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Cores específicas da Iotech.Dev baseadas na logo
				iotech: {
					cyan: 'hsl(189, 94%, 50%)', // Cyan vibrante da logo
					blue: 'hsl(220, 70%, 50%)', // Azul principal da logo
					darkblue: 'hsl(220, 80%, 35%)', // Azul mais escuro
					lightblue: 'hsl(220, 60%, 70%)', // Azul mais claro
					gray: 'hsl(215, 20%, 60%)', // Cinza da logo
					lightgray: 'hsl(210, 20%, 94%)', // Cinza claro
					slate: 'hsl(215, 25%, 25%)', // Cinza escuro
				},
				// Cores prata para sofisticação
				silver: {
					50: 'hsl(210, 20%, 98%)',
					100: 'hsl(210, 20%, 95%)',
					200: 'hsl(210, 16%, 88%)',
					300: 'hsl(210, 14%, 78%)',
					400: 'hsl(210, 12%, 68%)',
					500: 'hsl(210, 10%, 58%)',
					600: 'hsl(210, 8%, 48%)',
					700: 'hsl(210, 6%, 38%)',
					800: 'hsl(210, 4%, 28%)',
					900: 'hsl(210, 2%, 18%)',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				fadeIn: {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				slideUp: {
					'0%': { transform: 'translateY(30px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				slideDown: {
					'0%': { transform: 'translateY(-20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				slideInLeft: {
					'0%': { transform: 'translateX(-30px)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				slideInRight: {
					'0%': { transform: 'translateX(30px)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-12px)' }
				},
				pulse: {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.5' }
				},
				shimmer: {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(100%)' }
				},
				'silver-glow': {
					'0%, 100%': { boxShadow: '0 0 20px rgba(192, 192, 192, 0.3)' },
					'50%': { boxShadow: '0 0 40px rgba(192, 192, 192, 0.6)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fadeIn 0.6s ease-out forwards',
				'slide-up': 'slideUp 0.6s ease-out forwards',
				'slide-down': 'slideDown 0.6s ease-out forwards',
				'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
				'slide-in-right': 'slideInRight 0.6s ease-out forwards',
				'float': 'float 4s ease-in-out infinite',
				'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'shimmer': 'shimmer 2s infinite',
				'silver-glow': 'silver-glow 3s ease-in-out infinite'
			},
			transitionDuration: {
				'2000': '2000ms',
			},
			backgroundImage: {
				'silver-gradient': 'linear-gradient(135deg, hsl(210, 20%, 98%), hsl(210, 12%, 68%), hsl(210, 20%, 98%))',
				'silver-shimmer': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
