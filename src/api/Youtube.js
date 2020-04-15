import axios from 'axios';

// const KEY = 'AIzaSyDijWegwo__8XZ64UHATnQ1OxLHteP16m8';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3'
});
