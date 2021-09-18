import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

Album.propTypes = {

};

function Album({ album }) {
    return (
        <div className="album">
            <div className="album-thumbnail">
                <img src={album.thumbnailUrl} alt={album.name}></img>
            </div>
            <p className="album-name">{album.name}</p>

        </div>
    );
}

export default Album;