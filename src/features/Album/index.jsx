import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {

};

function AlbumFeature(props) {

    const albumList = [
        {
            id: 1,
            name: 'Những Con Số Tình Yêu',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/6/d/2/7/6d277f04ab005c7ee4f8d364710d898d.jpg'
        },
        {
            id: 2,
            name: 'Ballad Việt Ngày Nay',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/0/3/f/a/03facf5aa69e3f469128cb3030ff1c22.jpg'
        },
        {
            id: 1,
            name: 'Indie Việt',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/e/b/7/f/eb7fdc1f8d726c5cb30868562215b807.jpg'
        }
    ];

    return (
        <div>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;