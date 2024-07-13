import './CheckBox.scss';

const CheckBox = ({
    id,
    checked,
    onChange
}) => {
    return (
        <div className="checkbox">
            <input 
                id={id}
                className='checkbox__toggle'
                type="checkbox" 
                onChange={onChange}
                checked={checked}
            />
            <label className="checkbox__ball" htmlFor={id}></label>
        </div>
    )
}

export { CheckBox };
