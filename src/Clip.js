import React from "react";
import { translate, withTranslation } from 'react-i18next';
import image from './Pics/image.jpg'

class Clip extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false
        }
    }
    handleClick(e) {
        e.stopPropagation();
        this.props.handleClick()
        this.setState({
            clicked: true
        })
    }
    render() {
        const { t } = this.props;
        return (
            <div className="clip">
                <div className="clip-grid" onClick={(e) => { this.handleClick(e) }}  >
                   <div className={this.props.clicked ? "clicked" : ""}>
                    <div className="r1"><img src={image}/></div>
                        <div className="r1">
                            <p>{t('Introduction')}</p>
                            <p>{t("Advantages")}</p>
                            <p>{t("Plugins to detect the user language")}</p>
                            <p>{t("Optionally cache the translations")}</p>
                            <p> {t("Flexibility to use other packages")}</p>
                            <p>{t("Plugins to detect the user language")}</p>
                        </div>
                        <div className={this.props.clicked ? "clicked r2" : "r2"}></div>
                   </div>
                </div>
            </div>
        )
    }
}
export default withTranslation('translations')(Clip);
