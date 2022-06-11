import './app-info.css';

const AppInfo = ({increased, employees}) => {
    return (
        <div className="app-info">
            <h1>Облік співробітників компанії ТОВ "Навігатор"</h1>
            <h2>Загальна кількість співробітників: {employees}</h2>
            <h2>Премію отрмають: {increased}</h2>

        </div>
    )
}

export default AppInfo;
