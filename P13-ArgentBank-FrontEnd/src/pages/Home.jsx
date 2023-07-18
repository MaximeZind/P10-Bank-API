import Features from '../components/Features';
import HeroBanner from '../components/HeroBanner';
import features from '/src/data/features.json'

function Home() {

    return (
        <main>
            < HeroBanner />
            < Features features={features} />
        </main>
    );
}

export default Home;