import React, {Component} from 'react';
import NavigationShow from './../../_components/navigation/navigation_show';
import BillList from './bills_list';

class BillsShow extends Component {
    render() {
        return (
            <div className="row">
                <NavigationShow  className="col-md-4"/>
                <BillList className="col-md-8" />             
            </div>
        )
    }
}

export default BillsShow;