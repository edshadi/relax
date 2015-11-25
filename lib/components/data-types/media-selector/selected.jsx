import moment from 'moment';
import React, {PropTypes} from 'react';
import {Component} from 'relax-framework';

import MediaItem from '../../media-item';

export default class Selected extends Component {
  static fragments = {
    mediaItem: {
      _id: 1,
      date: 1,
      name: 1,
      dimension: {
        width: 1,
        height: 1
      },
      size: 1
    }
  }

  static propTypes = {
    mediaItem: PropTypes.object
  }

  render () {
    const {mediaItem} = this.props;
    if (mediaItem) {
      const date = moment(mediaItem.date).format('Do MMMM YYYY');
      return (
        <div className='selected-media'>
          <div className='wrapper'>
            <div className='image-part'>
              <MediaItem item={mediaItem} width='100' height='100' />
            </div>
            <div className='info-part'>
              <div className='title'>{mediaItem.name}</div>
              <div className='under-title'>{date}</div>
              {mediaItem.dimension &&
                <div className='under-title'>
                  {`${mediaItem.dimension.width}x${mediaItem.dimension.height}`}
                </div>
              }
              <div className='under-title'>{mediaItem.size}</div>
            </div>
          </div>
        </div>
      );
    }
  }
}
