import './header.css';

type PlayerHeaderProps = {
    blockName: string,
}

function Header ({blockName}: PlayerHeaderProps):JSX.Element {
    return (
        <div className='player__header header'>
            <div className='header__wrapper'>
                <button className='button controller' type='button'>File</button>
                <div className='header__lead'>{blockName}</div>
                <button className='button controller' type='button'>Save</button>
            </div>
        </div>
    );
}

export default Header;
