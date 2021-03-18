// import * as React from 'react'
// import styled from '@emotion/styled'

// kudos to our friends at narative.co
// https://github.com/narative/gatsby-theme-novela/blob/fb38329e17595df6e846be1d33517ff6125cde4e/src/components/Navigation/Navigation.Header.tsx
// and Aaron Iker
// https://codepen.io/aaroniker/pen/KGpXZo

// const IconWrapper = styled.button`
//   /*
//     both padding and appearance are here to help
//     Mobile Safari rendering correctly, at least on
//     older iOS versions — tested on iOS 12.4.2 / iPhone 5s
//   */
//   padding: 0;
//   appearance: none;
//   align-items: center;
//   background: transparent;
//   border-radius: 5px;
//   border: 0;
//   cursor: pointer;
//   display: inline-flex;
//   height: 40px;
//   justify-content: center;
//   /*
//     roughly compensates for the additional whitespace of this specific
//     "icon button" in relation to its "social icon" siblings;
//     leave the left untouched for some separation from the aforementioned
//   */
//   margin-right: -11px;
//   opacity: 0.75;
//   /*
//     allows us to use the default :focus
//     outline without the "moon mask" being taken into account
//     by the browser when rendering the outline —
//     not an ideal solution, but good for now
//   */
//   overflow: hidden;
//   position: relative;
//   /*
//     scaling to 75% of the original size
//     scales the "moon" shape from 24px to 18px,
//     aligning it with the rest of the main nav's
//     "social icons"; sun and its rays are slightly larger;
//     good for now, too ;-)
//   */
//   transform: scale(0.75);
//   transition: opacity 0.3s ease;
//   vertical-align: middle;
//   width: 40px;

//   &:hover {
//     opacity: 1;
//   }
// `

// const MoonOrSun = styled.div<{ isDark: boolean }>`
//   border: ${(props) => (props.isDark ? `4px` : `2px`)} solid var(--font-color);
//   background: var(--font-color);
//   border-radius: 50%;
//   height: 24px;
//   overflow: ${(props) => (props.isDark ? `visible` : `hidden`)};
//   position: relative;
//   transform: scale(${(props) => (props.isDark ? 0.55 : 1)});
//   transition: all 0.45s ease;
//   width: 24px;

//   &::before {
//     border-radius: 50%;
//     border: 2px solid var(--font-color);
//     content: '';
//     height: 24px;
//     opacity: ${(props) => (props.isDark ? 0 : 1)};
//     position: absolute;
//     right: -9px;
//     top: -9px;
//     transform: translate(${(props) => (props.isDark ? `14px, -14px` : `0, 0`)});
//     transition: transform 0.45s ease;
//     width: 24px;
//   }

//   &::after {
//     border-radius: 50%;
//     box-shadow: 0 -23px 0 var(--font-color), 0 23px 0 var(--font-color),
//       23px 0 0 var(--font-color), -23px 0 0 var(--font-color),
//       15px 15px 0 var(--font-color), -15px 15px 0 var(--font-color),
//       15px -15px 0 var(--font-color), -15px -15px 0 var(--font-color);
//     content: '';
//     height: 8px;
//     left: 50%;
//     margin: -4px 0 0 -4px;
//     position: absolute;
//     top: 50%;
//     width: 8px;
//     transform: scale(${(props) => (props.isDark ? 1 : 0)});
//     transition: all 0.35s ease;

//     @media (min-width: 750px) {
//       transform: scale(${(props) => (props.isDark ? 0.92 : 0)});
//     }
//   }
// `

// const MoonMask = styled.div<{ isDark: boolean }>`
//   background: #fff;
//   border-radius: 50%;
//   border: 0;
//   height: 24px;
//   opacity: ${(props) => (props.isDark ? 0 : 1)};
//   position: absolute;
//   right: 0;
//   top: 0;
//   transform: translate(${(props) => (props.isDark ? `14px, -14px` : `0, 0`)});
//   transition: background 0.25s ease, transform 0.45s ease;
//   width: 24px;
// `

// function setLightTheme() {
//   document.documentElement.setAttribute('data-theme', 'light')
// }

// function setDarkTheme() {
//   document.documentElement.setAttribute('data-theme', 'dark')
// }

// function switchTheme(isDark: boolean) {
//   if (typeof window === 'undefined') return
//   if (isDark) {
//     setLightTheme()
//     localStorage.setItem('theme', 'light')
//   } else {
//     setDarkTheme()
//     localStorage.setItem('theme', 'dark')
//   }
// }

// export default function Switch(): JSX.Element {
//   const [isDark, setIsDark] = React.useState<boolean>(() => {
//     if (typeof window === 'undefined') return false
//     const theme = localStorage.getItem('theme')
//     if (theme === 'dark') {
//       setDarkTheme()
//       return true
//     }
//     return false
//   })

//   const label = isDark ? `Activate light mode` : `Activate dark mode`

//   return (
//     <IconWrapper
//       onClick={() => {
//         switchTheme(isDark)
//         setIsDark(!isDark)
//       }}
//       aria-label={label}
//       title={label}
//     >
//       <MoonOrSun isDark={isDark} />
//       <MoonMask isDark={isDark} />
//     </IconWrapper>
//   )
// }
