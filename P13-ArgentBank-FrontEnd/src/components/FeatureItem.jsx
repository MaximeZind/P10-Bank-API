import classes from '../styles/FeatureItem.module.css';
import PropTypes from 'prop-types';

function FeatureItem({img, altText, featureTitle, featureText}) {

    return (
        <div className={classes.feature_item}>
            <img src={img} alt={altText} className={classes.feature_icon} />
                <h3 className={classes.feature_item_title} >{featureTitle}</h3>
                <p>
                    {featureText}
                </p>
        </div>
    );
}

FeatureItem.propTypes = {
    img: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
    featureTitle: PropTypes.string.isRequired,
    featureText: PropTypes.string.isRequired,
}

export default FeatureItem;