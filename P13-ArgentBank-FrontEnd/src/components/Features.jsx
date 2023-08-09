import FeatureItem from '../components/FeatureItem';
import classes from '/src/styles/Features.module.css';
import PropTypes from 'prop-types';

function Features({features}) {

    return (
        <section className={classes.features}>
            {features.map((feature) => (
                < FeatureItem img={feature.icon} altText={feature.altText} featureTitle={feature.title} featureText={feature.text} key={feature.title}/>
            ))}
        </section>
    );
}

Features.propTypes = {
    features: PropTypes.arrayOf(
        PropTypes.shape({
            altText: PropTypes.string.isRequired,
            icon: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired
        })
    ).isRequired,
}

export default Features;