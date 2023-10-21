import {
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Navbar,
  Stats,
  Testimonials,
  Hero,
} from "./components/indextComponents";
import styles from "./style";

const App = () => {
  return (
    <>
      <section className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter} `}>
          <nav className={`${styles.boxWidth}`}>
            <Navbar />
          </nav>
        </div>
      </section>

      <section className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </section>

      <section className={`bg-primary ${styles.flexCenter} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </section>
    </>
  );
};

export default App;
