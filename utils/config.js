// var API_BASE = 'https://www.haohome.top/api';
var API_BASE = 'http://127.0.0.1:3000/api';

const CONFIG = {
    API: {
        GET_INDEX: API_BASE+'/index',
        GET_PAGE: API_BASE + '&page_id=',
        GET_ARTICLE: API_BASE + '/detail?page_id=',
        GET_CATEGORY: API_BASE + '&cat=',
    }
}

module.exports = CONFIG;