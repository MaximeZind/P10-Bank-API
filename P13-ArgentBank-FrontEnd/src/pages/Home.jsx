import Features from '../components/Features';
import HeroBanner from '../components/HeroBanner';
import features from '/src/data/features.json';
import classes from '/src/styles/Home.module.css';

function Home() {

    return (
        <main className={classes.home}>
            < HeroBanner />
            < Features features={features} />
        </main>
    );
}

export default Home;