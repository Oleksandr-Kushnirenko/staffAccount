import { Component } from "react";
import './search-panel.css';


class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ""
        }
    }

    onUpdateSearch = (e) => {   // єто локальная функция
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term) // єта функция приходит из другого компонента. Ето разніе функции
    }

    render() {
        return (
            <input type="text" 
            className="form-control search-input"
            placeholder="Знайти співробітника"
            value={this.state.term}
            onChange={this.onUpdateSearch}/>
        )
    }
}

export default SearchPanel;