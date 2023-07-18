import classes from '../styles/FeatureItem.module.css';

function Featureitem({img, altText, featureTitle, featureText}) {

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

export default Featureitem;