import './app-filter.css';

const AppFilter = (props) => {
    const buttonsData = [
        {name: "all", label: "Всі співробітники", colored: false},
        {name: "rise", label: "На підвищення", colored: false},
        {name: "moreThen1000", label: "З/П більше 1000$", colored: true}
    ];

    const buttons = buttonsData.map(({name, label, colored}) => {
        const active = props.filter === name;
        const clazz = active ? "btn-light" : "btn-outline-light";
        const style = colored ? {color: "red"} : null; 
        return (
            <button className={`btn ${clazz}`}
                type="button" 
                key={name}
                onClick={() => props.onFilterSelect(name)}
                style={style}>
                    {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
            {/* <button 
                className="btn btn-light"
                type="button">
                    Всі співробітники
            </button>
            <button 
                className="btn btn-outline-light"
                type="button">
                    Співробітники на підвищення
            </button>
            <button 
                className="btn btn-outline-light"
                type="button">
                    З/П більше 1000$
            </button> */}
        </div>
    );
}

export default AppFilter;