import '../assets/css/main.css'

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);
}

export function reportWebVitals(metric) {
  console.log(metric)
  if(window.gtag){
    window.gtag('event', name, {
      event_category:
        label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
      value: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
      event_label: id, // id unique to current page load
      non_interaction: true, // avoids affecting bounce rate.
    })
  }
}

export default MyApp
