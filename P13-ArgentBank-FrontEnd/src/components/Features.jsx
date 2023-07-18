import Featureitem from '../components/FeatureItem';
import classes from '/src/styles/Features.module.css'

function Features({features}) {

    return (
        <section className={classes.features}>
            {features.map((feature) => (
                < Featureitem img={feature.icon} altText={feature.altText} featureTitle={feature.title} featureText={feature.text} key={feature.title}/>
            ))}
        </section>
    );
}

export default Features;