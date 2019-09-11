import React from "react";
import Select from 'react-select';
import i18next from 'i18next';
import { withTranslation} from 'react-i18next';




class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: { value: 'english', label: 'english' },
            lng: i18next.language,
        }

    }
      
   
    handleChange = selectedOption => {
       
        this.setState({ selectedOption });
        
        
        this.props.handleLangChange(selectedOption.value);
    };
    render() {
        const { selectedOption } = this.state;
        return (<div className="navbar">
            <div>Logo</div>
            <div>button1</div>
            <div>button2</div>
            <div className="search-bar"><input   placeholder="Search our Content"/></div>
            <div className="select">
            <Select
                value={selectedOption}
                onChange={this.handleChange}
                options={this.props.options}
                classNamePrefix="selectComp"
            />
            </div>
            <div>sign in</div>
            <div className="btn-container"><button className="btn">register</button></div>
        </div>);
    }
}

export default (withTranslation("translations")(Navbar));