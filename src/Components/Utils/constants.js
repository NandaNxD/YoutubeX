
const GOOGLE_API_KEY='AIzaSyCXJDu8qqzU2-ndJoL5T3cElQk7XUrcpzY'

export const YOUTUBE_API=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${GOOGLE_API_KEY}`;

export const AUTOCOMPLETE_API='https://thingproxy.freeboard.io/fetch/https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=';

export const YOUTUBE_SEARCH_API=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&type=video&key=${GOOGLE_API_KEY}&q=`

export default YOUTUBE_API;