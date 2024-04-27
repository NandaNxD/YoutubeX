
const GOOGLE_API_KEY='AIzaSyCXJDu8qqzU2-ndJoL5T3cElQk7XUrcpzY'

export const YOUTUBE_API=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${GOOGLE_API_KEY}`;

export const AUTOCOMPLETE_API='https://api.codetabs.com/v1/proxy/?quest=https%3A%2F%2Fsuggestqueries.google.com%2Fcomplete%2Fsearch%3Fclient%3Dfirefox%26ds%3Dyt%26q%3D';

export const YOUTUBE_SEARCH_API=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&type=video&key=${GOOGLE_API_KEY}&q=`

export default YOUTUBE_API;