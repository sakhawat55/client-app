'use strict';

const config = {
  instagramAccessToken: '642903878.5d416be.44cdf618ffd246e7bc3d2d3d9a9e6d19',
  apiUrl: 'https://api.instagram.com/v1/',
  getEndpoints: function() {
    return {userSelfInfo: `${this.apiUrl}self/?accessToken=${this.instagramAccessToken}`
    };
  }
};

export {config};

