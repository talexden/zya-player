import './player-header.css';

type PlayerHeaderProps = {
    playerIdx: number,
    fileName: string,
}

function PlayerHeader ({playerIdx, fileName}: PlayerHeaderProps):JSX.Element {
    return (
        <div className='player__header header'>
            <div className='header__button-wrapper'>
                <div className='button header__button header__button--file'>
                    <div className='button__name'>File</div>
                </div>
                <div className='header__lead'>{`Player-${playerIdx}`}</div>
                <div className='button header__button header__button--save'>Save</div>
            </div>
            <p className='header__file-name'>{fileName}</p>
        </div>
    );
}

export default PlayerHeader;
